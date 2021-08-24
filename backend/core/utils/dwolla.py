import dwollav2
import json
from django.conf import settings

DWOLLA_SETTINGS = settings.DWOLLA or {}

app_key = 'zxGnHh7zCO2exfnE6QGNr9WNDiwf39x6rrA0aVXraRm2wIkfiY'
app_secret = 'HL3F2XgkXHhMzyOJyI5rieLVRIgR9NMFw640zQN5vT9aLbHuE1'


class Dwolla(object):
    def __init__(self):
        self.client = dwollav2.Client(
            key=DWOLLA_SETTINGS.get('app_key'),
            secret=DWOLLA_SETTINGS.get('app_secret'),
            environment=DWOLLA_SETTINGS.get('environment')
        )
        self.token = self.client.Auth.client()


class FundingSource(Dwolla):
    @classmethod
    def create(cls, customer_id, plaid_token, funding_source=None):
        return cls()._create(customer_id, plaid_token, funding_source=funding_source)

    def _create(self, customer_id, plaid_token, funding_source):
        url = f"{DWOLLA_SETTINGS.get('url')}/customers/{customer_id}/funding-sources"
        request_body = {
            'plaidToken': plaid_token,
            'name': funding_source
        }

        return self.token.post(url, request_body)


class Customer(Dwolla):
    @classmethod
    def retrieve(cls, customer_id):
        return cls()._retrieve(customer_id)

    @classmethod
    def get(cls):
        return cls()._get()

    @classmethod
    def create(cls, payload):
        """
        payload = {
          'firstName': 'Jane',
          'lastName': 'Merchant',
          'email': 'jmerchant@nomail.net',
          'type': 'receive-only',
          'businessName': 'Jane Corp llc',
          'ipAddress': '99.99.99.99'
        }
        """
        return cls()._create(payload)

    def _get(self):
        return self.token.get('customers', {"limit": 30})

    def _retrieve(self, dwolla_id):
        url = f"{DWOLLA_SETTINGS.get('url')}/customers/{dwolla_id}"
        return self.token.get(url)

    def _create(self, payload):
        """"""
        return self.token.post('customers', payload)
