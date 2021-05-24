from rest_framework import authentication
from rest_framework.permissions import IsAuthenticated

from payment.models import PaymentCard
from .serializers import (
    PaymentCardSerializer
)

from rest_framework import viewsets


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
