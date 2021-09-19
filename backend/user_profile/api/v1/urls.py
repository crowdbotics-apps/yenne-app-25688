from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import (
    ProfileViewSet, UserProfileView
)

router = DefaultRouter()
router.register("profile", ProfileViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("me/", UserProfileView.as_view())
]