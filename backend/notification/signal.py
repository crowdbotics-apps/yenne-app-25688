from django.dispatch import Signal, receiver
from core.utils.onesignal.onesignal import onesignal
from core import printer
from notification.models import Notification

notification_saved = Signal(providing_args=['notification'])


@receiver(notification_saved)
def playbook_receiver(**kwargs):
    printer('Notification signal ')
    # send a push notification to recipient
    notification: Notification = kwargs.get('notification')
    if notification.recipient.onesignal_user_id:
        body = {"include_player_ids": [notification.recipient.onesignal_user_id],
                "contents": {"en": notification.description}}
        onesignal.create_notification(body)

    printer(kwargs)
