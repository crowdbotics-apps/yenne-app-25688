from decimal import Decimal


def amount_to_cents(amount):
    return int(Decimal(amount) * 100)


def amount_to_decimal(amount):
    return "{0:.2f}".format(Decimal(amount / 100))
