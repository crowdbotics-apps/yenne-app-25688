import requests
import random

from allauth.utils import generate_unique_username, email_address_exists
from allauth.account.adapter import get_adapter
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
from rest_framework.permissions import AllowAny

from users.models import User
from allauth.account.models import EmailAddress
from home.api.v1.serializers import (
    SignupSerializer,
    CustomTextSerializer,
    HomePageSerializer,
    UserSerializer,
    TokenSerializer, UpdateAccountSerializer
)
from home.models import CustomText, HomePage


class UpdateAccountViewSet(ModelViewSet):
    serializer_class = UpdateAccountSerializer
    authentication_classes = (
        TokenAuthentication,
        SessionAuthentication,
    )
    permission_classes = [IsAuthenticated, ]
    queryset = User.objects.all()
    # http_method_names = ["put"]


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


class SignupWithAppleAPIView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request, token):
        email = request.data.get('email')
        email = get_adapter().clean_email(email)
        if email and email_address_exists(email):
            user = User.objects.get(email=email)
        else:
            user_qs = User.objects.filter(apple_id_token=token)
            if user_qs.exists():
                user = user_qs.first()
            else:
                user = User(
                    email=email or f'apple-id-{request.data.get("nonce")[5]}{token[4]}@yenne-dev.com',
                    username=generate_unique_username([
                        '',
                        email,
                        'user'
                    ])
                )
                user.apple_id_token = token
                user.apple_nonce = request.data.get('nonce', '')

            user.verification_code = random.randint(1000, 9999)
            user.set_password(f'xxxxxxxx{user.verification_code}')
            user.save()
            EmailAddress.objects.get_or_create(user=user, email=user.email, verified=True, primary=True)
        token, _ = Token.objects.get_or_create(user=user)

        return Response(data=TokenSerializer(token).data, status=status.HTTP_201_CREATED)


class SignupWithGoogleAPIView(APIView):
    permission_classes = (AllowAny,)

    authentication_classes = ()
    profile_url = 'https://oauth2.googleapis.com/tokeninfo'

    def post(self, request, token):
        resp = requests.get(
            self.profile_url,
            params={"id_token": token, "alt": "json"},
        )
        if resp.json().get('error'):
            raise serializers.ValidationError(
                resp.json().get('error', {}).get('message'))
        email = resp.json().get('email')
        if email and email_address_exists(email):
            user = User.objects.get(email=email)
        else:
            user = User(
                email=email,
                username=generate_unique_username([
                    resp.json().get('given_name'),
                    email,
                    'user'
                ])
            )

            user.verification_code = random.randint(1000, 9999)
            user.set_password(f'xxxxxxxx{user.verification_code}')
            user.save()
            EmailAddress.objects.get_or_create(user=user, email=user.email, verified=True, primary=True)
        token, _ = Token.objects.get_or_create(user=user)

        return Response(data=TokenSerializer(token).data, status=status.HTTP_201_CREATED)


class SignupWithFacebookAPIView(APIView):
    permission_classes = (AllowAny,)

    authentication_classes = ()
    profile_url = 'https://graph.facebook.com/me'

    def post(self, request, token):
        resp = requests.get(
            self.profile_url,
            params={"access_token": token, "fields": "email", "alt": "json"},
        )
        if resp.json().get('error'):
            raise serializers.ValidationError(
                resp.json().get('error', {}).get('message'))
        email = resp.json().get('email')
        if email and email_address_exists(email):
            user = User.objects.get(email=email)
        else:
            user = User(
                email=email,
                username=generate_unique_username([
                    '',
                    email,
                    'user'
                ])
            )

            user.verification_code = random.randint(1000, 9999)
            user.set_password(f'xxxxxxxx{user.verification_code}')
            user.save()
            EmailAddress.objects.get_or_create(user=user, email=user.email, verified=True, primary=True)
        token, _ = Token.objects.get_or_create(user=user)

        return Response(data=TokenSerializer(token).data, status=status.HTTP_201_CREATED)


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


class UsernameAvailableAPIView(APIView):
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        exist = User.objects.exclude(id=request.user.id).filter(username=request.data.get('username')).exists()
        return Response(data=exist, status=status.HTTP_200_OK)


class UpdateUsernameAPIView(APIView):
    authentication_classes = [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        exist = User.objects.exclude(id=request.user.id).filter(username=request.data.get('username')).exists()
        if exist:
            raise serializers.ValidationError(
                "The username exist, please try again with a unique name."
            )
        else:
            user = request.user
            user.username = request.data.get('username')
            user.has_username = 1
            user.save()
        return Response(data={'username': user.username}, status=status.HTTP_200_OK)


class ForgotPasswordAPIView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny, ]

    def post(self, request, format=None):
        email = request.data.get('email', '').lower()
        if not email:
            raise serializers.ValidationError(
                "The email field is required."
            )
        exist = User.objects.filter(email=email).exists()
        if not exist:
            raise serializers.ValidationError(
                "A user with that email does not."
            )
        else:
            user = User.objects.get(email=email)
            user.set_password(user.verification_code)
            user.save()
            message = """
                        Your  one-time password is %s
                        """ % user.verification_code
            send_mail(
                '[Yenne App] One Time Password',
                message,
                settings.DEFAULT_FROM_EMAIL,
                [user.email],
                fail_silently=False,
            )
        return Response(data={'username': user.username}, status=status.HTTP_200_OK)


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
