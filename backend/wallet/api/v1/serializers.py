from rest_framework import serializers
from django.http import HttpRequest
from core.utils import update_object
from wallet.models import Wallet


class WalletSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField(required=False)

    class Meta:
        model = Wallet
        fields = "__all__"

    def get_profile(self, instance):
        return instance.profile.id

    def _get_request(self):
        request = self.context.get("request")
        if (
                request
                and not isinstance(request, HttpRequest)
                and hasattr(request, "_request")
        ):
            request = request._request
        return request

    def update(self, instance, validated_data):
        updated_instance = update_object(instance, validated_data)
        return updated_instance

    def create(self, validated_data):
        request = self.context.get("request")
        wallet = request.user.profile.wallets
        if wallet:
            return wallet
        return update_object(Wallet(profile=request.user.profile), validated_data)
