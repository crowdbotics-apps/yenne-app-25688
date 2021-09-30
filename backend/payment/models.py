from django.db import models
from core.models import TimestampModel


class PaymentQuerySet(models.QuerySet):
    def search(self, params):
        queryset = self.filter(**params)
        return queryset


class PaymentCard(TimestampModel):
    profile = models.ForeignKey('user_profile.Profile', related_name='cards', on_delete=models.CASCADE)
    number = models.CharField(max_length=35, unique=True, )
    holder = models.CharField(max_length=150)
    cvv = models.CharField(max_length=5)
    expiry = models.CharField(max_length=7)
    is_primary = models.BooleanField(default=False)
    objects = PaymentQuerySet.as_manager()
    tilled_payment_method_id = models.CharField(max_length=120, default='', null=True, blank=True)

    class Meta:
        ordering = ('-is_primary',)

    def __str__(self):
        return self.holder
