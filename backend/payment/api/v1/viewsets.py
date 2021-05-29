from rest_framework import authentication, serializers, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
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
