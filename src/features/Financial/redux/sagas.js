import { put, call, takeEvery } from 'redux-saga/effects';

import * as actions from './actions';
import * as constants from './constants';
import { getCards, addCard } from './api';

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

export default [
  takeEvery(constants.LIST_CARDS, handleGetCards),
  takeEvery(constants.ADD_CARD, handleAddCard),
];
