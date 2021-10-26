# Generated by Django 2.2.24 on 2021-09-30 08:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user_profile', '0004_profile_tilled_customer_id'),
        ('wallet', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transfer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('modified_on', models.DateTimeField(auto_now=True)),
                ('type', models.CharField(choices=[('dwolla', 'Dwolla'), ('tilled', 'Tilled')], default='dwolla', max_length=20)),
                ('status', models.CharField(choices=[('dwolla', 'Dwolla'), ('tilled', 'Tilled')], default='created', max_length=20)),
                ('note', models.CharField(default='', max_length=220)),
                ('external_id', models.CharField(default='', max_length=220)),
                ('amount', models.IntegerField(default=0, verbose_name='Amount')),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='transfers', to='user_profile.Profile')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]