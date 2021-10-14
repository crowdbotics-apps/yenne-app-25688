# Generated by Django 2.2.24 on 2021-10-12 09:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user_profile', '0005_profile_onesignal_user_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('modified_on', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
                ('deleted', models.BooleanField(db_index=True, default=False)),
                ('notified', models.BooleanField(db_index=True, default=False)),
                ('unread', models.BooleanField(db_index=True, default=True)),
                ('level', models.CharField(choices=[('request', 'request'), ('info', 'info'), ('transfer', 'transfer'), ('receive', 'receive')], default='info', max_length=20)),
                ('recipient', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notifications', to='user_profile.Profile')),
                ('sender', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='notifications_sender', to='user_profile.Profile')),
            ],
            options={
                'ordering': ('-created_on',),
                'index_together': {('recipient', 'unread')},
            },
        ),
    ]
