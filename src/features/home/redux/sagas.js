import { put, call, takeEvery } from 'redux-saga/effects';

import * as actions from './actions';
import { getProfiles } from './api';
import * as constants from './constants';

function* handleGetProfiles({ payload }) {
  try {
    const results = yield call(getProfiles, payload);
    yield put(actions.getProfilesSuccess(results?.data));
  } catch (error) {
    yield put(actions.getProfilesFail(error));
  }
}

export default [takeEvery(constants.LIST_PROFILES, handleGetProfiles)];
