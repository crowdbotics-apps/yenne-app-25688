from user_profile.models import Profile


def update_customer_details(data):
    profile = Profile.objects.get(user__email=data.get('data').get('email'))
    profile.tilled_customer_id = data.get('account_id')
    profile.save()
