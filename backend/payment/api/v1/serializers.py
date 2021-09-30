import datetime
import logging
from rest_framework import serializers
from django.http import HttpRequest
from django.db import transaction

from core import printer
from core.utils import update_object
from core.utils.tilled import PaymentMethods, Customers

from payment.models import PaymentCard

logger = logging.getLogger(__name__)


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

    @transaction.atomic()
    def update(self, instance, validated_data):
        updated_instance = update_object(instance, validated_data)
        return updated_instance

    @transaction.atomic()
    def create(self, validated_data):
        profile = self.context.get('profile')
        now = datetime.datetime.now()
        expiry = validated_data.get('expiry')
        exp_month = ''
        exp_year = ''
        if '/' in expiry:
            expiry.split('/')
            exp_month = expiry.split('/')[0]
            exp_year = str(now.year)[:2] + expiry.split('/')[1]
        # add user as tilled customer
        if not profile.tilled_customer_id:
            customer_result, err = Customers.create(
                {
                    "metadata": {
                        "internal_customer_id": str(profile.id)
                    },
                    "first_name": profile.user.first_name or profile.user.username,
                    "middle_name": "",
                    "last_name": profile.user.last_name or "",
                    "email": profile.user.email,
                }
            )
            if err:
                print('Error creating a user')
                logger.warning(err)
            if not err:
                print(customer_result.get('id'), 'where to get user details \n')
                profile.tilled_customer_id = customer_result.get('id')
                profile.save()
        # add card as tilled payment method
        result, error = PaymentMethods.create(card={
            'cvc': validated_data.get('cvv'),
            'exp_month': int(exp_month),
            'exp_year': int(exp_year),
            'number': validated_data.get('number').replace(' ', '')
        },
            nick_name=validated_data.get('holder'),
            billing_details={
                "address": {
                    "street": "string",
                    "street2": "string",
                    "city": "string",
                    "state": "string",
                    "zip": "string",
                    "country": "US"
                },
                "email":  profile.user.email,
                "name": profile.user.first_name or profile.user.username,
            },
        )

        if error:
            logger.warning(error)
            raise serializers.ValidationError(error)
        printer('no card errrors')
        printer(result)
        instance = update_object(PaymentCard(profile_id=profile.id), validated_data)
        instance.tilled_payment_method_id = result.get('id')
        instance.save()
        return instance
