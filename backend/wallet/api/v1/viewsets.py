from rest_framework import authentication
from rest_framework.permissions import IsAuthenticated

from wallet.models import Wallet
from .serializers import (
    WalletSerializer
)

from rest_framework import viewsets


class WalletViewSet(viewsets.ModelViewSet):
    serializer_class = WalletSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.SessionAuthentication
    )
    permission_classes = [IsAuthenticated, ]
    queryset = Wallet.objects.all()

    def get_queryset(self, **args):
        queryset = Wallet.objects.search(params={'profile_id': self.request.user.profile.id})
        return queryset

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['profile_id'] = self.request.user.profile.id
        return context
