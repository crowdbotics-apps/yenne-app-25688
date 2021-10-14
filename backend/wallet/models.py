import logging
from django.db import models
from core.models import TimestampModel
from django.utils.translation import ugettext_lazy as _

logger = logging.getLogger(__name__)


class TransferQuerySet(models.QuerySet):
    def webhook_transfer(self, topic, external_id):
        if topic in ['customer_transfer_created', 'customer_bank_transfer_created', 'payment_intent.created']:
            self.change_status(external_id=external_id, status='created')
        if topic in ['customer_transfer_cancelled', 'customer_bank_transfer_cancelled', 'payment_intent.canceled']:
            self.change_status(external_id=external_id, status='cancelled')
        if topic in ['customer_transfer_failed', 'customer_bank_transfer_failed',
                     'customer_bank_transfer_creation_failed', 'payment_intent.payment_failed']:
            self.change_status(external_id=external_id, status='failed')
        if topic in ['customer_transfer_completed', 'customer_bank_transfer_completed', 'payment_intent.succeeded']:
            self.change_status(external_id=external_id, status='completed')

    def change_status(self, external_id, status):
        transfer_qs = self.filter(external_id=external_id)
        if transfer_qs.exists():
            transfer = transfer_qs.first()
            if transfer.status == 'completed':
                # completed is not mutable
                return True
            transfer.status = status
            transfer.save()
            logger.warning(
                f'Transfer state for {transfer.id} {transfer.type} {transfer.external_id} changed to {status}')
            if status == 'completed':
                wallet = transfer.profile.wallet
                wallet.amount = wallet.amount + transfer.amount
                wallet.save()

            return transfer
        else:
            logger.warning(f'Transfer with external_id {external_id} does not exist.')
            return False


class Transfer(TimestampModel):
    TYPE_CHOICES = (
        ('dwolla', 'Dwolla'),
        ('yenne', 'Yenne'),
        ('tilled', 'Tilled')
    )

    STATUS_CHOICES = (
        ('created', 'Created'),
        ('cancelled', 'Cancelled'),
        ('failed', 'Failed'),
        ('completed', 'Completed'),
    )
    profile = models.ForeignKey('user_profile.Profile', related_name='transfers', on_delete=models.CASCADE)
    type = models.CharField(max_length=20, choices=TYPE_CHOICES, default="dwolla")
    status = models.CharField(max_length=20, choices=TYPE_CHOICES, default="created")
    note = models.CharField(max_length=220, default='')
    external_id = models.CharField(max_length=220, default='')
    amount = models.IntegerField(verbose_name='Amount', default=0)
    objects = TransferQuerySet.as_manager()


class WalletQuerySet(models.QuerySet):
    def search(self, params):
        queryset = self.filter(**params)
        return queryset


class Wallet(TimestampModel):
    profile = models.OneToOneField('user_profile.Profile', related_name='wallet', on_delete=models.CASCADE,
                                   unique=True)
    amount = models.IntegerField(
        verbose_name='Account balance',
        help_text='Account balance',
        default=0
    )
    objects = WalletQuerySet.as_manager()

    def __str__(self):
        return f'{self.amount}'
