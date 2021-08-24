import json
from rest_framework import authentication, serializers, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from payment.models import PaymentCard
from core.utils.plaid import PlaidLink, PlaidItems, PlaidProcessor
from core.utils.dwolla import Customer as DwollaCustomer, FundingSource
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
        # process access_token
        token = request.data.get('public_token')
        res, _ = PlaidItems.exchange_token(token)
        return Response({'result': res})


class PlaidProcessorAPIView(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    def post(self, request, format=None):
        # process access_token
        access_token = request.data.get('access_token', 'access-sandbox-c8088059-6e81-4779-b306-ae5322a8ef48')
        client_id = request.data.get('client_id', 'DMowN7vP9mcyoMZVnnL4U1xN5yr9bXUzAqpL5')
        res, _ = PlaidProcessor.token_create(access_token, client_id)
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


class CreateFundingSource(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [IsAuthenticated, ]

    def post(self, request, format=None):
        # process access_token
        profile = request.user.profile
        if profile.dwolla_customer_id:
            # dwolla custer exist
            res = FundingSource.create(
                profile.dwolla_customer_id,
                request.data.get('processor_token'),
                funding_source=request.data.get('funding_source'),
            )
            profile.dwolla_funding_source_id = res.headers.get('Location').split('/')[-1]
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
