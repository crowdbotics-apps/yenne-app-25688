from django.db import models
from core.models import TimestampModel


class ProfileQueryset(models.QuerySet):
    def search(self, lookup, request, **kwargs):
        search_query = kwargs.get('params', {}).get('search')
        with_balance = kwargs.get('params', {}).get('with_balance')
        queryset = self.filter(**lookup)
        if with_balance:
            queryset = queryset.exclude(dwolla_balance_funding_source_id="")
            queryset = queryset.exclude(user=request.user)

        if search_query:
            queryset = queryset.filter(
                models.Q(user__last_name__icontains=search_query) |
                models.Q(user__first_name__icontains=search_query)
            )
        return queryset.filter()


class Profile(TimestampModel):
    user = models.OneToOneField(
        "users.User",
        on_delete=models.CASCADE,
        related_name="profile",
    )
    dwolla_customer_id = models.CharField(max_length=120, default='', null=True, blank=True)
    dwolla_customer_url = models.CharField(max_length=120, default='', null=True, blank=True)
    dwolla_balance_funding_source_id = models.CharField(max_length=120, default='', null=True, blank=True)
    tilled_customer_id = models.CharField(max_length=120, default='', null=True, blank=True)
    onesignal_user_id = models.CharField(max_length=300, default='', null=True, blank=True)

    objects = ProfileQueryset.as_manager()

    def fullname(self):
        """ Display either first name and last name or username """
        if any([self.user.first_name, self.user.last_name]):
            return f'{self.user.first_name} {self.user.last_name}'
        return f''

    def __str__(self):
        return f'{self.user}'
