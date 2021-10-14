from rest_framework import authentication, serializers, status, viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from .serializers import NotificationSerializer
from notification.models import Notification


class NotificationViewSet(viewsets.ModelViewSet):
    serializer_class = NotificationSerializer
    authentication_classes = (
        authentication.TokenAuthentication,
        authentication.SessionAuthentication
    )
    permission_classes = [IsAuthenticated, ]
    queryset = Notification.objects.all()

    def get_queryset(self, **args):
        print(self.request.user.profile.id, self.request.user.id, self.request.user.email, self.request.user.username)
        queryset = Notification.objects.filter(recipient=self.request.user.profile)
        return queryset

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['profile'] = self.request.user.profile
        return context
