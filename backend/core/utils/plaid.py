import plaid
import requests
import json
from django.conf import settings

PLAID_SETTINGS = settings.PLAID or {}


class Plaid(object):
    def __init__(self):
        # self.client = plaid.Client(client_id=PLAID_SETTINGS.get('clientId'),
        #                            secret=PLAID_SETTINGS.get('secret'),
        #                            environment=PLAID_SETTINGS.get('environment'))
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
        """
        # Create a processor token for a specific account id.
        returns {
          "processor_token": "processor-sandbox-0asd1-a92nc",
          "request_id": "[Unique request ID]"
        }
        """
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
        """
        Exchange this public_token for a Plaid access_token using the /item/public_token/exchange API endpoint.
        returns: {
          "access_token": "access-sandbox-3f3181d2-76de-40c2-8f3b-152d2c6726d7",
          "item_id": "wnVRXPmk3mt3wepjXEeXsbN4NWe5V9FrNeEN1",
          "request_id": "WAH4B"
        }
        """
        url = 'item/public_token/exchange'
        payload = {"public_token": public_token}
        response = self.api_requester("POST", url, payload=payload)
        return response


class PlaidLink(Plaid):
    @classmethod
    def create_link_token(cls, user_id):
        return cls()._create_link_token(user_id)

    def _create_link_token(self, user_id=None):
        """
        https://plaid.com/docs/auth/partnerships/dwolla/#create-a-link_token
        A link_token is a short-lived, one-time use token that is used to authenticate your app with Link.
        """
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
