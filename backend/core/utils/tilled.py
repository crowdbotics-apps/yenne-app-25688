import logging
import requests
import json
from django.conf import settings

from core import printer

TILLED_SETTINGS = settings.TILLED or {}

logger = logging.getLogger(__name__)


def _warn(msg):
    logger.warning(f'TILLED :: {msg}')


def pretty_print_POST(req):
    req = req.prepare()
    """
    At this point it is completely built and ready
    to be fired; it is "prepared".

    However pay attention at the formatting used in
    this function because it is programmed to be pretty
    printed and may differ from the actual request.
    """
    print('{}\n{}\r\n{}\r\n\r\n{}\n{}\n'.format(
        '-----------START-----------',
        req.method + ' ' + req.url,
        '\r\n'.join('{}: {}'.format(k, v) for k, v in req.headers.items()),
        req.body,
        '-----------END-----------',
    ))


class Tilled(object):
    def __init__(self):

        self.url = TILLED_SETTINGS.get('url')
        self.headers = {
            'Content-Type': 'application/json',
            'tilled-api-key': TILLED_SETTINGS.get('api_key'),
            'tilled-account': TILLED_SETTINGS.get('account_id')
        }

    @classmethod
    def _process_payload(cls, payload):
        return json.dumps(payload, separators=(',', ':'))

    def api_requester(self, method, url_path, payload={}):
        payload = self._process_payload(payload)

        error = None

        print(f'{self.url}{url_path}', TILLED_SETTINGS.get('account_id'))

        response = requests.request(method, f'{self.url}{url_path}', headers=self.headers, data=payload)
        req = requests.Request(method, f'{self.url}{url_path}', headers=self.headers, data=payload)
        pretty_print_POST(req)
        if response.status_code not in [200, 201]:
            error = {'message': response}
        else:
            response = json.loads(response.text.encode('utf8'))
        if error:
            _warn(f'{self.url}{url_path}')
            printer(self.headers)
            _warn(payload)
            _warn(error.get('message').content)
            print('*' * 123)
            error = error.get('message').content

        return response, error


class Accounts(Tilled):
    @classmethod
    def list(cls):
        return cls()._list()

    def _list(self):
        return self.api_requester('GET', 'accounts/connected')


class Customers(Tilled):
    @classmethod
    def list(cls):
        return cls()._list()

    def _list(self):
        return self.api_requester('GET', 'customers')

    @classmethod
    def create(cls, payload):
        return cls()._create(payload)

    def _create(self, payload: dict):
        """
        https://api.tilled.com/docs#operation/CreateCustomer
        payload = {
          "metadata": {
            "order_id": "100123",
            "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
          },
          "first_name": "string",
          "middle_name": "string",
          "last_name": "string",
          "email": "string",
          "phone": "string"
        }
        """
        return self.api_requester('POST', 'customers', payload)

    @classmethod
    def update(cls, payload):
        return cls()._create(payload)

    def _update(self, payload: dict):
        """
        https://api.tilled.com/docs#operation/CreateCustomer
        payload = {
          "metadata": {
            "order_id": "100123",
            "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
          },
          "first_name": "string",
          "middle_name": "string",
          "last_name": "string",
          "email": "string",
          "phone": "string"
        }
        """
        return self.api_requester('PATCH', 'customers', payload)

    @classmethod
    def get(cls, customer_id):
        return cls()._get(customer_id)

    def _get(self, customer_id):
        return self.api_requester('GET', f'customers/{customer_id}', )


class PaymentMethods(Tilled):
    @classmethod
    def create(cls, card, nick_name, billing_details):
        return cls()._create(card, nick_name, billing_details)

    def _create(self, card, nick_name, billing_details):
        """
        https://api.tilled.com/docs#tag/PaymentMethods
        {
            "type": "card",
            "payment_token": "string",
            "nick_name": "string",
            "billing_details": {
            "address": {},
            "email": "string",
            "name": "string",
            "phone": "string"
            },
            "card": {
            "cvc": "string",
            "exp_month": 1,
            "exp_year": 1000,
            "number": "string"
            }
        }
        """
        payload = {
            "type": "card",
            "card": card,
            "nick_name": nick_name,
            "billing_details": billing_details
        }
        return self.api_requester('POST', 'payment-methods', payload)

    @classmethod
    def list(cls, customer_id):
        return cls()._list(customer_id)

    def _list(self, customer_id=None):
        params = ''
        if customer_id:
            params += f'?customer_id={customer_id}'
        return self.api_requester('GET', f'payment-methods{params}', )

    @classmethod
    def get(cls, payment_id):
        return cls()._get(payment_id)

    def _get(self, payment_id):
        return self.api_requester('GET', f'payment-methods/{payment_id}', )

    @classmethod
    def update(cls, payment_id, payload):
        return cls()._create(payment_id, payload)

    def _update(self, payment_id, payload: dict):
        """
            {
          "nick_name": "string",
          "billing_details": {
            "address": {
              "street": "string",
              "street2": "string",
              "city": "string",
              "state": "string",
              "zip": "string",
              "country": "st"
            },
            "email": "string",
            "name": "string",
            "phone": "string"
          }
        }
        """
        return self.api_requester('PATCH', f'payment-methods/{payment_id}', payload)

    @classmethod
    def attach(cls, payment_id, customer_id):
        return cls()._attach(payment_id, customer_id)

    def _attach(self, payment_id, customer_id):
        return self.api_requester('PUT', f'payment-methods/{payment_id}/attach', {'customer_id': customer_id})

    @classmethod
    def detach(cls, payment_id):
        return cls()._detach(payment_id)

    def _detach(self, payment_id):
        return self.api_requester('PUT', f'payment-methods/{payment_id}/detach')


class PaymentIntent(Tilled):
    @classmethod
    def create(cls, payload):
        return cls()._create(payload)

    def _create(self, payload):
        """
            {
      "payment_method_types": [
        "card"
      ],
      "metadata": {
        "order_id": "100123",
        "internal_customer_id": "7cb1159d-875e-47ae-a309-319fa7ff395b"
      },
      "amount": 1,
      "platform_fee_amount": 0,
      "currency": "aud",
      "payment_method_id": "string",
      "capture_method": "automatic",
      "confirm": true,
      "statement_descriptor_suffix": "string",
      "occurrence_type": "consumer_ad_hoc",
      "level3": {
        "line_items": [
          {
            "product_code": "string",
            "product_description": "string",
            "quantity": 0,
            "tax_amount": 99999999,
            "unit_amount": 99999999
          }
        ],
        "shipping_address_zip": "string",
        "shipping_address_country": "st",
        "shipping_amount": 99999999,
        "shipping_from_zip": "string",
        "duty_amount": 99999999
      }
    }
        """
        return self.api_requester('POST', 'payment-intents', payload)

    @classmethod
    def list(cls):
        return cls()._list()

    def _list(self):
        return self.api_requester('GET', 'payment-intents')

    @classmethod
    def get(cls, intent_id):
        return cls()._get(intent_id)

    def _get(self, intent_id):
        return self.api_requester('GET', f'payment-intents/{intent_id}')

    @classmethod
    def update(cls, intent_id, payload):
        return cls()._update(intent_id, payload)

    def _update(self, intent_id, payload):
        return self.api_requester('PATCH', f'payment-intents/{intent_id}', payload)

    @classmethod
    def confirm(cls, intent_id, payload):
        return cls()._confirm(intent_id, payload)

    def _confirm(self, intent_id, payload):
        return self.api_requester('PATCH', f'payment-intents/{intent_id}/confirm', payload)

    @classmethod
    def capture(cls, intent_id, payload):
        return cls()._capture(intent_id, payload)

    def _capture(self, intent_id, payload):
        return self.api_requester('POST', f'payment-intents/{intent_id}/capture', payload)

    @classmethod
    def cancel(cls, intent_id, payload):
        return cls()._capture(intent_id, payload)

    def _cancel(self, intent_id, payload):
        return self.api_requester('POST', f'payment-intents/{intent_id}/cancel', payload)
