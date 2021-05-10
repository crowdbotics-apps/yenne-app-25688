from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.views.decorators.csrf import csrf_exempt
from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
    HomePageViewSet,
    CustomTextViewSet,
    VerifyOTPAPIView,
    ResendOTPAPIView,
    UsernameAvailableAPIView,
    UpdateUsernameAPIView,
    SignupWithGoogleAPIView, SignupWithFacebookAPIView, SignupWithAppleAPIView, ForgotPasswordAPIView,
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
    path("account/update-username/", UpdateUsernameAPIView.as_view()),
    path('account/google-auth/<str:token>', csrf_exempt(SignupWithGoogleAPIView.as_view())),
    path('account/facebook-auth/<str:token>', csrf_exempt(SignupWithFacebookAPIView.as_view())),
    path('account/appleid-auth/<str:token>', csrf_exempt(SignupWithAppleAPIView.as_view())),
    path('account/reset-password/', csrf_exempt(ForgotPasswordAPIView.as_view())),
]
