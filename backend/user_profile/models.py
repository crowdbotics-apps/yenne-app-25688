from django.db import models
from core.models import TimestampModel


class ProfileQueryset(models.QuerySet):
    def search(self, lookup, **kwargs):
        search_query = kwargs.get('params', {}).get('search')
        queryset = self.filter(**lookup)
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
    objects = ProfileQueryset.as_manager()

    def fullname(self):
        """ Display either first name and last name or username """
        if any([self.user.first_name, self.user.last_name]):
            return f'{self.user.first_name} {self.user.last_name}'
        return f''

    def __str__(self):
        return f'{self.user}'
