import plaid
import requests
import json
from django.conf import settings

PLAID_SETTINGS = settings.PLAID or {}


class Plaid(object):
    def __init__(self):
        self.client = plaid.Client(client_id=PLAID_SETTINGS.get('clientId'),
                                   secret=PLAID_SETTINGS.get('secret'),
                                   environment=PLAID_SETTINGS.get('environment'))
        self.configuration: dict = {
            "client_id": PLAID_SETTINGS.get('clientId'),
            "secret": PLAID_SETTINGS.get('secret'),
        }
        self.url = PLAID_SETTINGS.get('url')
        self.headers = {
            'Content-Type': 'application/json'
        }

    @classmethod
    def _process_payload(cls, payload):
        return json.dumps(payload, separators=(',', ':'))

    def api_requester(self, method, url_path, payload={}):
        payload.update(self.configuration.copy())
        payload = self._process_payload(payload)
        # add client_id and secret

        error = None

        response = requests.request(method, f'{self.url}{url_path}', headers=self.headers, data=payload)
        if response.status_code not in [200, 201]:
            error = {'message': response}
        else:
            response = json.loads(response.text.encode('utf8'))
        return response, error


class PlaidProcessor(Plaid):
    @classmethod
    def token_create(cls, access_token, account_id):
        return cls()._token_create(access_token, account_id)

    def _token_create(self, access_token, account_id):
        url = 'processor/token/create'
        payload = {
            'access_token': access_token,
            'account_id': account_id,
            'processor': 'dwolla'
        }
        payload.update(self.configuration.copy())
        response = self.api_requester("POST", url, payload=payload)
        return response


class PlaidItems(Plaid):
    @classmethod
    def exchange_token(cls, public_token):
        return cls()._exchange_token(public_token)

    @classmethod
    def public_token(cls):
        return cls()._create_public_token()

    def _create_public_token(self):
        url = f"{PLAID_SETTINGS.get('environment', 'sandbox')}/public_token/create"
        payload = {
            "institution_id": "ins_3",
            "initial_products": [
                "auth"
            ],
            "options": {
                "webhook": "https://www.genericwebhookurl.com/webhook"
            }
        }
        response = self.api_requester("POST", url, payload=payload)
        return response

    def _exchange_token(self, public_token):
        url = 'item/public_token/exchange'
        payload = {"public_token": public_token}
        response = self.api_requester("POST", url, payload=payload)
        return response


class PlaidLink(Plaid):
    @classmethod
    def create_link_token(cls, user_id):
        return cls()._create_link_token(user_id)

    def _create_link_token(self, user_id=None):
        # Create a link_token for the given user
        url = 'link/token/create'

        payload = {
            "client_name": "Yenne",
            "country_codes": [
                "US"
            ],
            "language": "en",
            "user": {
                "client_user_id": str(user_id)
            },
            "products": [
                "auth"
            ]
        }
        payload.update(self.configuration.copy())
        response = self.api_requester("POST", url, payload=payload)

        return response
