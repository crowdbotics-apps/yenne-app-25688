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
        self.url = DWOLLA_SETTINGS.get('url')
        self.token = self.client.Auth.client()

    def create_url(self, *args):
        url = f"{self.url}"
        for a in args: url += f'/{a}'
        return url


class FundingSource(Dwolla):
    @classmethod
    def create(cls, customer_id, plaid_token, account_name=None):
        return cls()._create(customer_id, plaid_token, account_name=account_name)

    @classmethod
    def list(cls, customer_id):
        return cls()._list(customer_id)

    @classmethod
    def get(cls, customer_id):
        return cls()._get(customer_id)

    @classmethod
    def remove(cls, funding_source_id):
        return cls()._remove(funding_source_id)

    def _remove(self, funding_source_id):
        url = self.create_url('funding-sources', funding_source_id)
        print(url)
        return self.token.post(url, {"removed": True})

    def _get(self, customer_id):
        url = f"{DWOLLA_SETTINGS.get('url')}/customers/{customer_id}/funding-sources"
        return self.token.get(url)

    def _list(self, customer_id):
        """
        Retrieve a list of funding sources that belong to a Customer.
        """
        url = self.create_url("customers", customer_id, "funding-sources")
        return self.token.get(url)

    def _create(self, customer_id, plaid_token, account_name):
        url = f"{DWOLLA_SETTINGS.get('url')}/customers/{customer_id}/funding-sources"
        request_body = {
            'plaidToken': plaid_token,
            'name': account_name
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


class Balance(Dwolla):
    """
     The Dwolla Balance
     Digital Wallet Functionality With The Dwolla Balance
     https://developers.dwolla.com/concepts/balance-funding-source#the-dwolla-balance

     https://www.dwolla.com/features/digital-wallet-functionality/
    """

    @classmethod
    def balance(cls, funding_source_id):
        return cls()._balance(funding_source_id)

    def _balance(self, funding_source_id):
        balance_url = self.create_url('funding-sources', funding_source_id, 'balance')
        return self.token.get(balance_url)

    @classmethod
    def account(cls, customer_id):
        return cls()._account(customer_id)

    def _account(self, customer_id):
        request_url = self.create_url('customers', customer_id,
                                      'funding-sources')  # f"{DWOLLA_SETTINGS.get('url')}/customers/{customer_id}"

        funding_sources = self.token.get(request_url)
        sources = funding_sources.body['_embedded']['funding-sources']
        account = next(item for item in sources if item["type"] == "balance")
        return account  # => 'Balance'


class Transfer(Dwolla):
    """
    A transfer represents money being transferred from a source to a destination.
    Transfers are available for the Customer and Account resources.
    https://docs.dwolla.com/#list-and-search-transfers-for-a-customer
     https://developers.dwolla.com/concepts/balance-funding-source#viewing-and-displaying-the-balance
    """

    @classmethod
    def list(cls, customer_id, ):
        return cls()._list(customer_id)

    def _list(self, customer_id, ):
        transfer_url = self.create_url('customers', customer_id, 'transfers')
        return self.token.get(transfer_url)

    @classmethod
    def retrieve(cls, transfer_id):
        return cls()._retrieve(transfer_id)

    def _retrieve(self, transfer_id):
        transfer_url = self.create_url('transfers', transfer_id)
        return self.token.get(transfer_url)

    @classmethod
    def request(cls, amount, source_id, destination_id, payment_id, note):
        return cls()._request(amount, source_id, destination_id, payment_id, note)

    def _request(self, amount, source_id, destination_id, payment_id, note):
        source_url = self.create_url('funding-sources', source_id)
        destination_url = self.create_url('funding-sources', destination_id)
        request_body = {
            '_links': {
                'source': {
                    'href': source_url
                },
                'destination': {
                    'href': destination_url
                }
            },
            'amount': {
                'currency': 'USD',
                'value': amount
            },
            'clearing': {
                'destination': 'next-available'
            },
            'correlationId': payment_id
        }
        print(request_body)

        return self.token.post('transfers', request_body)
