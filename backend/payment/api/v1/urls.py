from django.urls import path, include

from rest_framework.routers import DefaultRouter

from .viewsets import (
    PaymentCardViewSet,
    PlaidLinkAPIView,
    PlaidProcessorAPIView,
    CreateFundingSource,
    FundingSourceAPIView, TransferAPIView, TilledAccountsAPIView, tilled_webhook, CardPaymentAPIView, dwolla_webhook,
    SendMoneyAPIView, ReceiveMoneyAPIView
)

router = DefaultRouter()
router.register('cards', PaymentCardViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("payment/token/<str:token_type>", PlaidLinkAPIView.as_view()),
    path("payment/process", PlaidProcessorAPIView.as_view()),
    path("payment/create-source-funding", CreateFundingSource.as_view()),
    path('payment/funding-source/<str:source_id>', FundingSourceAPIView.as_view()),
    path("payment/deposit", TransferAPIView.as_view()),
    path("payment/send-money", SendMoneyAPIView.as_view()),
    path("payment/request-money", ReceiveMoneyAPIView.as_view()),
    path("payment/tilled/accounts", TilledAccountsAPIView.as_view()),
    path("payment/tilled-webhook", tilled_webhook),
    path("payment/dwolla-webhook", dwolla_webhook),
    path("payment/card-payment-intent", CardPaymentAPIView.as_view())
]
