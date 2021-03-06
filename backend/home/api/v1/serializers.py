import random

from django.contrib.auth import get_user_model
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.models import EmailAddress
from allauth.account.utils import setup_user_email
from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer
from rest_framework.authtoken.models import Token
from user_profile.models import Profile
from user_profile.api.v1.serializers import ProfileSerializer
from home.models import CustomText, HomePage

User = get_user_model()


class UpdateAccountSerializer(serializers.ModelSerializer):
    currentPassword = serializers.CharField(required=False)
    userName = serializers.CharField(required=False)

    class Meta:
        model = User
        fields = ('id', 'userName', 'currentPassword', 'password', 'email')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            },
            'email': {
                'required': False,
                'allow_blank': False,
            }
        }

    def _get_request(self):
        request = self.context.get('request')
        if request and not isinstance(request, HttpRequest) and hasattr(request, '_request'):
            request = request._request
        return request

    def validate_currentPassword(self, currentPassword):
        user = self._get_request().user
        valid = user.check_password(currentPassword)
        if not valid:
            raise serializers.ValidationError("Password Incorrect")
        return currentPassword

    def validate_userName(self, username):
        users_qs = User.objects.filter(username=username)

        user = self._get_request().user

        if users_qs.exists() and user.username != users_qs.first().username:
            raise serializers.ValidationError(
                _("A user with that username exist."))
        return username

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if not email:  # and email_address_exists(email):
                raise serializers.ValidationError(
                    _("Invalid email."))
        return email

    def create(self, validated_data):
        user = self._get_request().user
        email = validated_data.get('email')
        if user.email != email:
            if email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user with that email address exists."))
        user.email = email
        user.username = validated_data.get('userName')
        user.set_password(validated_data.get('password'))
        user.save()
        return user


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            },
            'email': {
                'required': True,
                'allow_blank': False,
            }
        }

    def _get_request(self):
        request = self.context.get('request')
        if request and not isinstance(request, HttpRequest) and hasattr(request, '_request'):
            request = request._request
        return request

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def create(self, validated_data):
        user = User(
            email=validated_data.get('email'),
            username=validated_data.get('username')
        )
        user.set_password(validated_data.get('password'))
        user.verification_code = random.randint(1000, 9999)
        user.save()

        # create profile
        Profile.objects.create(user=user)
        request = self._get_request()
        setup_user_email(request, user, [])
        return user

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


class CustomTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomText
        fields = '__all__'


class HomePageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomePage
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name']


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""
    password_reset_form_class = ResetPasswordForm


class TokenSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()
    profile = serializers.SerializerMethodField()
    verified = serializers.SerializerMethodField()
    hasUsername = serializers.SerializerMethodField()
    username = serializers.SerializerMethodField()
    email = serializers.SerializerMethodField()

    class Meta:
        model = Token
        fields = ('token', 'username', 'email', 'profile', 'verified', 'hasUsername')

    def get_hasUsername(self, _):
        return self.instance.user.has_username

    def get_username(self, _):
        return self.instance.user.username

    def get_email(self, _):
        return self.instance.user.email

    def get_token(self, instance):
        return instance.key

    def get_verified(self, instance):
        user = self.instance.user
        address_qs = EmailAddress.objects.filter(email=user.email)
        if address_qs.exists():
            return address_qs.first().verified
        return False

    def get_profile(self, _):
        user = self.instance.user
        if not hasattr(user, 'profile'):
            Profile.objects.create(user=user)
        serializer = ProfileSerializer(self.instance.user.profile)
        return serializer.data
