from rest_framework import serializers
from django.http import HttpRequest
from core.utils import update_object
from payment.models import PaymentCard


class PaymentCardSerializer(serializers.ModelSerializer):
    profile = serializers.SerializerMethodField(required=False)

    class Meta:
        model = PaymentCard
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
        return update_object(PaymentCard(profile_id=self.context.get('profile_id')), validated_data)
