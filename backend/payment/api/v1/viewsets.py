import json
import dwollav2
from rest_framework import authentication, serializers, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from payment.models import PaymentCard
from core.utils.plaid import PlaidLink, PlaidItems, PlaidProcessor
from core.utils.dwolla import Customer as DwollaCustomer, FundingSource, Balance, Transfer
from .serializers import (
    PaymentCardSerializer
)

from rest_framework import viewsets


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
        context['profile_id'] = self.request.user.profile.id
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
            balance_account_id = profile.dwolla_balance_funding_source_id
            if not profile.dwolla_balance_funding_source_id and profile.dwolla_customer_id:
                res = Balance.account(profile.dwolla_customer_id)
                balance_account_id = res.get('id')
                profile.dwolla_balance_funding_source_id = res.get('id')
                profile.save()
            res = Balance.balance(balance_account_id)
            return Response(res.body)

        if not request.user.profile.dwolla_customer_id:
            return Response({})
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
                funding_source=request.data.get('funding_source'),
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
                funding_source=request.data.get('funding_source'),
            )
            print('CREATED FUNDING SOURCE: ', res.body)
            return Response({'message': "success"})


class TransferAPIView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    def post(self, request, format=None):
        print(request.data)
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
        payment_id = user.profile.id
        note = f'Deposit funds from source id {source_id} to balance account {user.profile.dwolla_balance_funding_source_id}'
        return Response(request.data)
        res = Transfer.request(amount, source_id, destination_id, payment_id, note)
        return Response(res.body)
