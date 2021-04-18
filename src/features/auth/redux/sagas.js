import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';

import { request, setAuthorizationToken } from 'utils/http';
import * as actions from './actions';
import * as constants from './constants';
import { navigate } from 'navigator/service';
import { getServerError } from 'utils/helpers';
import { StorageUtils } from 'utils/storage';

function signUp(auth) {
  return request
    .post('rest-auth/registration/', auth)
    .then(res => res)
    .catch(err => {
      console.warn(Object.keys(err.response));
      throw Object.values(err.response.data).join();
    });
}

function login(auth) {
  return request
    .post('rest-auth/login/', auth)
    .then(res => res)
    .catch(err => {
      console.warn(err);
      throw 'Email or password is incorrect!';
    });
}

function verifyCode(data) {
  return request
    .post(`api/v1/account/verify/${data.payload}/`)
    .then(res => res)
    .catch(err => {
      throw err.response.data.join();
    });
}

function resetCode() {
  return request
    .post('api/v1/account/reset/')
    .then(res => res)
    .catch(err => {
      throw err.response.data.join();
    });
}

function* handleResetCode() {
  try {
    yield call(resetCode);
    yield put(actions.resetCodeSuccess({}));
  } catch (error) {
    yield put(
      actions.resetCodeError(
        error || 'An error occurred when trying to resend',
      ),
    );
  }
}

function* handleVerifyCode(payload) {
  try {
    const result = yield call(verifyCode, payload);
    StorageUtils.setStringValue(constants.TOKEN_KEY, result.data.token);
    StorageUtils.setStringValue(
      constants.USER_VERIFIED,
      result.data.verified.toString(),
    );
    setAuthorizationToken(result.data.token);
    yield put(
      actions.verifyCodeSuccess({
        ...result.data,
      }),
    );
  } catch (err) {
    yield put(
      actions.verifyCodeError(err || 'An error occurred when trying to verify'),
    );
  }
}

function* handleSignUp({ auth }) {
  try {
    const result = yield call(signUp, auth);
    StorageUtils.setStringValue(constants.TOKEN_KEY, result.data.token);
    StorageUtils.setStringValue(
      constants.USER_VERIFIED,
      result.data.verified.toString(),
    );
    setAuthorizationToken(result.data.token);
    yield put(
      actions.loginSuccess({
        ...result.data,
      }),
    );
  } catch (err) {
    const error =
      getServerError(err.response?.data) || JSON.stringify(err.response || err);
    yield put(
      actions.signUpError(error || 'An error occurred when trying to sign Up'),
    );
  }
}

function* handleLogin({ auth }) {
  try {
    const result = yield call(login, auth);

    StorageUtils.setStringValue(constants.TOKEN_KEY, result.data.token);
    StorageUtils.setStringValue(
      constants.USER_VERIFIED,
      result.data.verified.toString(),
    );
    setAuthorizationToken(result.data.token);
    yield put(
      actions.loginSuccess({
        ...result.data,
      }),
    );
  } catch (err) {
    console.warn(err);
    const error =
      getServerError(err.response?.data) || JSON.stringify(err.response || err);
    yield put(
      actions.loginError(error || 'An error occurred when trying to sign Up'),
    );
  }
}

function* handleLoggedInUser() {
  try {
    let token = yield call(StorageUtils.getStringValue, constants.TOKEN_KEY);

    let user;
    if (token) {
      setAuthorizationToken(token);
    }
    yield put(actions.getLoggedUserSuccess(user));
  } catch (e) {
    console.log(e);
  }
}

function updateProfileApi(id, profile) {
  return request.patch(`/user/${id}/`, profile);
}

function* handleUpdateProfile({ id, profile, onSuccess }) {
  try {
    const result = yield call(updateProfileApi, id, profile);
    yield put(actions.updateProfileSuccess(result.data));
    yield call(onSuccess);
  } catch (e) {
    yield put(
      actions.updateProfileError(
        e.response?.data?.message || 'An error occurred when updating data',
      ),
    );
  }
}

function uploadImageApi(id, body) {
  return request.patch(`/user/${id}/`, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

function* handleUploadImage({ id, picture }) {
  try {
    const data = new FormData();
    data.append('profile_picture', {
      uri: picture.uri,
      type: picture.type,
      name: picture.name,
    });

    let result = yield call(uploadImageApi, id, data);
    yield put(actions.uploadImageSuccess(result.data));
    navigate('VerificationStepTwo');
  } catch (e) {
    yield put(
      actions.uploadImageError(
        'An error occurred when trying to upload pet image',
      ),
    );
  }
}

function facebookSignUp(auth) {
  return request.post('/facebook/', auth);
}

function* handleFacebookSignUp({ auth, onSuccess }) {
  try {
    let user = yield call(facebookSignUp, auth);
    request.defaults.headers.Authorization = 'token ' + user.data.key;
    StorageUtils.setStringValue('@token', user.data.key);
    yield put(actions.facebookSignUpSuccess(user.data.user));
    onSuccess && onSuccess();
  } catch (e) {
    yield put(
      actions.facebookSignUpError(
        e.response?.data?.message || 'An error occurred when sign Up',
      ),
    );
  }
}

function logOutApi() {
  return request.post('/logout/');
}

function* handleLogOut() {
  try {
    yield call(logOutApi);
    yield call(StorageUtils.removeValue, '@token');
    request.defaults.headers.Authorization = '';
    yield put(actions.logOutSuccess());
  } catch (e) {
    yield put(actions.logOutError());
  }
}

export default [
  takeLatest(constants.SIGNUP, handleSignUp),
  takeEvery(constants.GET_LOGGED_USER, handleLoggedInUser),
  takeLatest(constants.UPDATE_PROFILE, handleUpdateProfile),
  takeLatest(constants.UPLOAD_IMAGE, handleUploadImage),
  takeLatest(constants.LOGIN, handleLogin),
  takeLatest(constants.FACEBOOK_SIGNUP, handleFacebookSignUp),
  takeLatest(constants.LOGOUT_USER, handleLogOut),
  takeLatest(constants.VERIFY_CODE, handleVerifyCode),
  takeLatest(constants.RESET_CODE, handleResetCode),
];
