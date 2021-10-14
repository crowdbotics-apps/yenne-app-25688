import { put, call, takeEvery } from 'redux-saga/effects';

import * as actions from './actions';
import { getNotifications } from './api';
import * as constants from './constants';

function* handleGetNotifications({ payload }) {
  try {
    const results = yield call(getNotifications, payload);

    yield put(actions.getNotificationsSuccess(results?.data?.results));
  } catch (error) {
    yield put(actions.getNotificationsFail(error));
  }
}

export default [takeEvery(constants.LIST_NOTIFICATION, handleGetNotifications)];
