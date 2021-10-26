from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .viewsets import NotificationViewSet, MarkAllAsRead

router = DefaultRouter()
router.register('notifications', NotificationViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("notifications/read-all", MarkAllAsRead.as_view())
]
