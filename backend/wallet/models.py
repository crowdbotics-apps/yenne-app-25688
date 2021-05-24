from django.db import models
from core.models import TimestampModel


class WalletQuerySet(models.QuerySet):
    def search(self, params):
        queryset = self.filter(**params)
        return queryset


class Wallet(TimestampModel):
    profile = models.OneToOneField('user_profile.Profile', related_name='wallets', on_delete=models.CASCADE, unique=True)
    amount = models.IntegerField(
        verbose_name='Account balance',
        help_text='Account balance',
        default=0
    )
    objects = WalletQuerySet.as_manager()

    def __str__(self):
        return f'{self.amount}'
