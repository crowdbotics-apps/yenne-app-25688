from decimal import Decimal
import json
import logging
import dwollav2
from django.db import transaction
from django.conf import settings
from rest_framework import authentication, serializers, status, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view

from core import printer
from notification.models import Notification
from notification.signal import notification_saved
from payment.models import PaymentCard
from wallet.models import Transfer, Wallet
from core.utils.plaid import PlaidLink, PlaidItems, PlaidProcessor
from core.utils.dwolla import (
    Customer as DwollaCustomer, FundingSource, Balance, Transfer as DwollaTransfer,
    WebHooks
)
from core.utils.tilled import Accounts, PaymentIntent
from user_profile.utils import update_customer_details
from user_profile.models import Profile
from wallet.utils import amount_to_cents, amount_to_decimal
from .serializers import (
    PaymentCardSerializer, SendMoneySerializer
)

logger = logging.getLogger(__name__)


class TilledAccountsAPIView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    def get(self, request, format=None):
        return Response(Accounts.list())


class PlaidLinkAPIView(APIView):
    """
    create a link_token. A link_token is a short-lived, one-time use token that is used to authenticate your app with Link.
    """
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    def get(self, request, token_type=None, format=None):
        if token_type == 'public_token':
            res, _ = PlaidItems.public_token()
            return Response({'result': res})
        res, _ = PlaidLink.create_link_token(request.user.id)
        return Response({'result': res})

    def post(self, request, token_type=None, format=None):
        payload = request.data
        if payload is None:
            raise serializers.ValidationError(
                "Please provide a plaid link success payload."
            )
        public_token = payload.get("publicToken")
        metadata = payload.get("metadata", {})
        accounts = metadata.get("accounts", [])
        if len(accounts) == 0:
            raise serializers.ValidationError(
                "No account connected to your bank account."
            )
        account_id = accounts[0].get('id')
        account_name = metadata.get("institution", {}).get("name")

        # process access_token
        """
        Exchange this public_token for a Plaid access_token using the /item/public_token/exchange API endpoint.
        https://plaid.com/docs/auth/partnerships/dwolla/#write-server-side-handler
        """
        res, _ = PlaidItems.exchange_token(public_token)
        access_token = res.get('access_token')
        # Create a processor token for a specific account id.
        res, _ = PlaidProcessor.token_create(access_token, account_id)
        processor_token = res.get('processor_token')
        #  create a funding source for a Dwolla Customer
        profile = request.user.profile
        if profile.dwolla_customer_id:
            # dwolla customer exist
            profile.save()
        else:
            # create dwolla customer
            res = DwollaCustomer.create({
                'firstName': profile.user.first_name or "First",
                'lastName': profile.user.last_name or "Last",
                'email': profile.user.email,
                'type': 'personal',
                'state': 'NY',
                'address1': '865 Grand St',
                'city': 'Brooklyn',
                'postalCode': '11211',
                'dateOfBirth': '1970-01-01',
                'ipAddress': '99.99.99.99',
                'ssn': '1234'
            })
            profile.dwolla_customer_id = res.headers.get('Location').split('/')[-1]
            profile.dwolla_customer_url = res.headers.get('Location')
            profile.save()
        try:
            FundingSource.create(
                profile.dwolla_customer_id,
                processor_token,
                account_name=account_name,
            )
        except dwollav2.error.Error as e:
            print(e.body)
            return Response(e.body.get('message'), status=status.HTTP_403_FORBIDDEN)

        return Response({'message': 'Success'})


class PlaidProcessorAPIView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    def post(self, request, format=None):
        # process access_token
        access_token = request.data.get('access_token', 'access-sandbox-c8088059-6e81-4779-b306-ae5322a8ef48')
        account_id = request.data.get('client_id', 'DMowN7vP9mcyoMZVnnL4U1xN5yr9bXUzAqpL5')
        res, _ = PlaidProcessor.token_create(access_token, account_id)
        return Response({'result': res})


class PaymentCardViewSet(viewsets.ModelViewSet):
    serializer_class = PaymentCardSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.SessionAuthentication
    )
    permission_classes = [IsAuthenticated, ]
    queryset = PaymentCard.objects.all()

    def get_queryset(self, **args):
        queryset = PaymentCard.objects.search(params={'profile_id': self.request.user.profile.id})
        return queryset

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['profile'] = self.request.user.profile
        return context

    def perform_destroy(self, instance):
        instance.delete()

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if request.user.profile != instance.profile:
            raise serializers.ValidationError(
                {"errors": "You don't have permission to delete this card. Only creators can delete a task."}
            )
        self.perform_destroy(instance)
        return Response(status=status.HTTP_200_OK)


class FundingSourceAPIView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    def get(self, request, source_id=None, format=None):
        profile = request.user.profile
        if source_id == 'balance':
            try:
                wallet = request.user.profile.wallet
            except Exception as e:
                print(e)
            if not hasattr(profile, 'wallet'):
                wallet = Wallet.objects.create(profile=profile, )
            # balance_account_id = profile.dwolla_balance_funding_source_id
            # if not profile.dwolla_balance_funding_source_id and profile.dwolla_customer_id:
            #     res = Balance.account(profile.dwolla_customer_id)
            #     balance_account_id = res.get('id')
            #     profile.dwolla_balance_funding_source_id = res.get('id')
            #     profile.save()
            # res = Balance.balance(balance_account_id)
            return Response({"balance": {'value': amount_to_decimal(wallet.amount)}})

        if not request.user.profile.dwolla_customer_id:
            return Response([])
        res = FundingSource.list(request.user.profile.dwolla_customer_id)
        sources = res.body.get("_embedded", {}).get("funding-sources", [])
        if not profile.dwolla_balance_funding_source_id:
            account = next(item for item in sources if item["type"] == "balance")
            if account:
                profile.dwolla_balance_funding_source_id = account.get('id')
                profile.save()

        return Response(sources)

    def delete(self, request, source_id=None, format=None):
        if not request.user.profile.dwolla_customer_id:
            return Response({})
        res = FundingSource.remove(source_id)
        return Response(res.body)


class CreateFundingSource(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    def post(self, request, format=None):
        # process access_token
        profile = request.user.profile
        if profile.dwolla_customer_id:
            # dwolla customer exist
            res = FundingSource.create(
                profile.dwolla_customer_id,
                request.data.get('processor_token'),
                account_name=request.data.get('funding_source'),
            )
            profile.dwolla_customer_url = res.headers.get('Location')
            profile.save()
            return Response({'message': 'success'})
        else:
            # create dwolla customer
            res = DwollaCustomer.create({
                'firstName': profile.user.first_name or "First",
                'lastName': profile.user.last_name or "Last",
                'email': profile.user.email,
                'type': 'receive-only',
                'businessName': 'Yenne',
                'ipAddress': '99.99.99.99'
            })
            profile.dwolla_customer_id = res.headers.get('Location').split('/')[-1]
            profile.save()
            res = FundingSource.create(
                profile.dwolla_customer_id,
                request.data.get('processor_token'),
                account_name=request.data.get('funding_source'),
            )
            print('CREATED FUNDING SOURCE: ', res.body)
            return Response({'message': "success"})


class ReceiveMoneyAPIView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    @transaction.atomic()
    def post(self, request, format=None):
        user = request.user
        profile = user.profile
        serializer = SendMoneySerializer(data=request.data)
        if not serializer.is_valid():
            raise serializers.ValidationError(serializer.errors)

        recipient_qs = Profile.objects.filter(id=serializer.validated_data.get('recipient'))
        if not recipient_qs.exists():
            raise serializers.ValidationError('Recipient does not exist.')
        recipient = recipient_qs.first()
        amount = serializer.validated_data.get('amount')

        note = f"${recipient.user.email} has requested ${amount_to_decimal(amount)}"
        logger.warning(note)

        # send notification to sender
        notification = Notification.objects.create(
            title='Request',
            description=note,
            recipient=recipient,
            sender=profile,
            level='request'
        )
        notification_saved.send(sender=Notification, notification=notification)

        # send notification to receiver
        note = f"You requested ${amount_to_decimal(amount)} from ${recipient.user.email}"

        Notification.objects.create(
            title='Request',
            description=note,
            recipient=profile,
            sender=profile,
            level='request'
        )

        return Response(request.data)


class SendMoneyAPIView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    @transaction.atomic()
    def post(self, request, format=None):
        user = request.user
        profile = user.profile
        serializer = SendMoneySerializer(data=request.data)
        if not serializer.is_valid():
            raise serializers.ValidationError(serializer.errors)

        recipient_qs = Profile.objects.filter(id=serializer.validated_data.get('recipient'))
        if not recipient_qs.exists():
            raise serializers.ValidationError('Recipient does not exist.')
        recipient = recipient_qs.first()
        amount = serializer.validated_data.get('amount')

        if profile.wallet.amount < amount:
            raise serializers.ValidationError('You do not have enough funds in your account')
        note = f"You transferred ${amount_to_decimal(amount)} to ${recipient.user.email}"
        logger.warning(note)
        Transfer.objects.create(
            profile=user.profile,
            type='dwolla',
            note=note,
            status='completed',
            amount=amount_to_cents(amount),
        )

        if not hasattr(profile, 'wallet'):
            Wallet.objects.create(profile=profile, )

        if not hasattr(recipient, 'wallet'):
            wallet = Wallet.objects.create(profile=recipient, )
        else:
            wallet = recipient.wallet

        profile.wallet.amount -= amount
        profile.wallet.save()
        wallet.amount = wallet.amount + amount
        wallet.save()

        # send notification to sender
        notification = Notification.objects.create(
            title='Transfer',
            description=note,
            recipient=profile,
            sender=profile,
            level='transfer'
        )
        notification_saved.send(sender=Notification, notification=notification)

        # send notification to receiver
        note = f"You received ${amount_to_decimal(amount)} from ${recipient.user.email}"

        notification = Notification.objects.create(
            title='Receive',
            description=note,
            recipient=recipient,
            sender=profile,
            level='receive'
        )
        notification_saved.send(sender=Notification, notification=notification)

        return Response(request.data)


class TransferAPIView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    def post(self, request, format=None):
        user = request.user
        source_id = request.data.get('source_id')
        amount = request.data.get('amount')
        destination_id = request.data.get('destination_id')
        if source_id == 'self':
            if not user.profile.dwolla_balance_funding_source_id:
                raise serializers.ValidationError(
                    "User account doesn't have a balance account."
                )
            source_id = user.profile.dwolla_balance_funding_source_id

        if destination_id == 'self':
            if not user.profile.dwolla_balance_funding_source_id:
                raise serializers.ValidationError(
                    "User account doesn't have a balance account."
                )
            destination_id = user.profile.dwolla_balance_funding_source_id

        # make all transfer to master balance funding source id
        destination_id = settings.DWOLLA.get('balance_funding_source_id')
        payment_id = user.profile.id
        note = f'Deposit funds from source id {source_id} to balance account {destination_id}'
        res = DwollaTransfer.request(amount, source_id, destination_id, payment_id, note)

        try:
            Transfer.objects.create(
                profile=user.profile,
                type='dwolla',
                note=note,
                external_id=res.headers.get('Location').split('/')[-1],
                amount=amount_to_cents(amount),
            )
        except Exception as e:
            logger.warning(e)
        return Response(res.body)


class CardPaymentAPIView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    @transaction.atomic()
    def post(self, request, format=None):
        printer(request.data)
        profile = request.user.profile
        data = request.data
        amount = amount_to_cents(data.get('amount', 0))
        card = PaymentCard.objects.get(id=data.get('cardId'))
        note = f"Deposit ${data.get('amount')} to Yenne wallet"
        if request.user.profile.id != card.profile.id:
            raise serializers.ValidationError('You can only deposit using your own card')
        if data.get('tilled_payment_method_id', None) is None:
            raise serializers.ValidationError('tilled_payment_method_id field is required')

        res, error = PaymentIntent.create(
            {
                "payment_method_types": [
                    "card"
                ],
                "metadata": {
                    "internal_profile_id": str(request.user.profile.id)
                },
                "amount": amount,
                "platform_fee_amount": 0,
                "currency": "usd",
                "payment_method_id": data.get('tilled_payment_method_id'),
                "capture_method": "automatic",
                "confirm": True,
                "statement_descriptor_suffix": note[19],
                "occurrence_type": "consumer_ad_hoc",
            }
        )
        if error:
            logger.warning(f'Tilled PaymentIntent {error}')
            raise serializers.ValidationError(error)

        # create local transfer
        Transfer.objects.create(
            profile=profile,
            type='tilled',
            note=note,
            external_id=res.get('id'),
            amount=amount
        )

        return Response('Success')


@api_view(['GET', 'POST', 'PUT', 'PATCH'])
def dwolla_webhook(request):
    signature = request.headers.get('X-Request-Signature-Sha-256')
    topic = request.data.get('topic')
    if not WebHooks.verify_request(signature, request.data):
        error = f'Dwolla Webhook for {topic} was not verified'
        logger.warning(error)
        raise serializers.ValidationError(error)
        # TODO:  terminate if webhook is not verified
    print(topic)
    if 'transfer' in topic.split('_'):
        Transfer.objects.webhook_transfer(topic, request.data.get('resourceId'))
    res = {}

    try:
        pass
        # res = WebHooks.create('https://4e57-197-211-30-20.ngrok.io/api/v1/payment/dwolla-webhook')
        # printer(res.body)
    except Exception as e:
        printer(e)
    return Response(res)


@api_view(['GET', 'POST', 'PUT', 'PATCH'])
def tilled_webhook(request):
    try:
        req = request.POST
        data = None

        logger.warning(f'Tilled WebHook ::  {req}')
        for i in req.lists():
            if not data:
                data = json.loads(i[0])

        if data.get('type') == 'customer.created':
            update_customer_details(data)
        if 'payment_intent' in data.get('type').split('.'):
            Transfer.objects.webhook_transfer(data.get('type'), data.get('data').get('id'))
        return Response({"message": "Yenne webhook!"})
    except Exception as e:
        print(e)
        logger.warning(e)
        return Response('error', status=status.HTTP_500_INTERNAL_SERVER_ERROR)
