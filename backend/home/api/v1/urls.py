from django.urls import path, include
from rest_framework.routers import DefaultRouter

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    HomePageViewSet,
    CustomTextViewSet,
    VerifyOTPAPIView,
    ResendOTPAPIView,
    UsernameAvailableAPIView,UpdateUsernameAPIView
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("customtext", CustomTextViewSet)
router.register("homepage", HomePageViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("account/verify/<int:verification_code>/", VerifyOTPAPIView.as_view()),
    path("account/resend/code/", ResendOTPAPIView.as_view()),
    path("account/username-available", UsernameAvailableAPIView.as_view()),
    path("account/update-username/", UpdateUsernameAPIView.as_view())
]
