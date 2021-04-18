from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework import serializers
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView, status
from django.core.mail import send_mail
from django.conf import settings
from rest_auth.registration.views import RegisterView, LoginView
from rest_auth.views import PasswordResetView
from users.models import User
from allauth.account.models import EmailAddress
from home.api.v1.serializers import (
    SignupSerializer,
    CustomTextSerializer,
    HomePageSerializer,
    UserSerializer,
    TokenSerializer
)
from home.models import CustomText, HomePage


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})


class CustomTextViewSet(ModelViewSet):
    serializer_class = CustomTextSerializer
    queryset = CustomText.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]


class HomePageViewSet(ModelViewSet):
    serializer_class = HomePageSerializer
    queryset = HomePage.objects.all()
    authentication_classes = (SessionAuthentication, TokenAuthentication)
    permission_classes = [IsAdminUser]
    http_method_names = ["get", "put", "patch"]


class RegisterViewToken(RegisterView):
    authentication_classes = ()


class LoginViewToken(LoginView):
    authentication_classes = ()


class ResetPasswordViewToken(PasswordResetView):
    authentication_classes = ()


class VerifyOTPAPIView(APIView):
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated, ]

    def post(self, request, verification_code, format=None):
        try:
            user = User.objects.get(verification_code=verification_code, id=request.user.id)
            address: EmailAddress = EmailAddress.objects.get(email=user.email)
            address.verified = True
            address.save()
        except User.DoesNotExist:
            raise serializers.ValidationError(
                "Incorrect verification code, please try again."
            )

        return Response(data=TokenSerializer(Token.objects.filter(user=user).first()).data, status=status.HTTP_200_OK)


class ResendOTPAPIView(APIView):
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated, ]

    def post(self, request, format=None):
        try:
            user = User.objects.get(id=request.user.id)

            message = """
            Your  OTP code  is %s
            """ % user.verification_code
            send_mail(
                '[Yenne App] Please Confirm Your E-mail Address',
                message,
                settings.DEFAULT_FROM_EMAIL,
                [user.email],
                fail_silently=False,
            )
        except User.DoesNotExist:
            raise serializers.ValidationError(
                "Incorrect verification code, please try again."
            )

        return Response(data=TokenSerializer(Token.objects.filter(user=user).first()).data, status=status.HTTP_200_OK)
