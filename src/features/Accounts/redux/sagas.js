import { put, call, takeEvery } from 'redux-saga/effects';

import * as actions from './actions';
import {
  deleteFundingSource,
  getFundingSource,
  getFundingSourceBalance,
  deposit,
} from './api';
import * as constants from './constants';

function* handleListFundingSource() {
  try {
    const results = yield call(getFundingSource);
    yield put(actions.listFundingSourceSuccess(results.data));
  } catch (err) {
    yield put(actions.listFundingSourceFail({ err }));
  }
}
function* handleDeleteFundingSource({ payload, onSuccess, onError }) {
  try {
    const result = yield call(deleteFundingSource, payload);
    yield put(actions.deleteFundingSourceSuccess(result.data));
    onSuccess(result);
  } catch (error) {
    yield put(actions.deleteFundingSourceFail(error));
    onError(error);
  }
}

function* handleGetBalance() {
  try {
    const result = yield call(getFundingSourceBalance);
    yield put(
      actions.getBalanceSuccess('$' + result?.data?.balance?.value || '0.00'),
    );
  } catch (error) {
    yield put(actions.getBalanceFail(error));
  }
}

function* handleDeposit({ payload, onSuccess, onError }) {
  try {
    const result = yield call(deposit, payload);

    yield put(actions.depositSuccess(result.data));
    onSuccess && onSuccess(result);
  } catch (error) {
    yield put(actions.depositFail(error));
    onError && onError(error);
  }
}

export default [
  takeEvery(constants.DEPOSIT, handleDeposit),
  takeEvery(constants.GET_BALANCE, handleGetBalance),
  takeEvery(constants.LIST_FUNDING_SOURCE, handleListFundingSource),
  takeEvery(constants.DELETE_FUNDING_SOURCE, handleDeleteFundingSource),
];
