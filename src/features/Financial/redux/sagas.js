import { put, call, takeEvery } from 'redux-saga/effects';

import * as actions from './actions';
import * as constants from './constants';
import { getCards, addCard, deleteCard, updateCard, cardPaymentIntent } from './api';

function* handleGetCards(payload) {
  try {
    const result = yield call(getCards, payload);
    yield put(actions.listCardsSuccess(result.data));
  } catch (error) {
    yield put(actions.listCardsFail({ error }));
  }
}

function* handleAddCard({ data, onSuccess, onError }) {
  try {
    const result = yield call(addCard, data);
    yield put(actions.addCardSuccess(result.data));
    onSuccess(result);
  } catch (error) {
    yield put(actions.addCardFail(error));
    onError(error);
  }
}

function* handleDeleteCard({ data, onSuccess, onError }) {
  try {
    const result = yield call(deleteCard, data);
    yield put(actions.deleteCardSuccess(result.data));
    onSuccess(result);
  } catch (error) {
    yield put(actions.depositFromCardFail(error));
    onError(error);
  }
}
function* handleDepositFromCard({ data, onSuccess, onError }) {
  try {
    const result = yield call(cardPaymentIntent, data);
    yield put(actions.depositFromCardSuccess(result.data));
    onSuccess(result);
  } catch (error) {
    yield put(actions.updateCardFail(error));
    onError(error);
  }
}

function* handleUpdateCard({ data, onSuccess, onError }) {
  try {
    const result = yield call(updateCard, data);
    yield put(actions.updateCardSuccess(result.data));
    onSuccess(result);
  } catch (error) {
    yield put(actions.updateCardFail(error));
    onError(error);
  }
}
export default [
  takeEvery(constants.DEPOSIT_FROM_CARD, handleDepositFromCard),
  takeEvery(constants.LIST_CARDS, handleGetCards),
  takeEvery(constants.ADD_CARD, handleAddCard),
  takeEvery(constants.DELETE_CARD, handleDeleteCard),
  takeEvery(constants.UPDATE_CARD, handleUpdateCard),
];
