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
      if (typeof err.response?.data === 'string') {
        throw err.response?.data;
      }
      throw Object.values(err.response?.data).join().toString();
    });
}

function login(auth) {
  return request
    .post('rest-auth/login/', auth)
    .then(res => res)
    .catch(err => {
      console.log(err);
      throw 'Email or password is incorrect!';
    });
}
function updateUsername(data) {
  return request
    .post('api/v1/account/update-username/', data)
    .then(res => res)
    .catch(err => {
      alert(err.response.data);
      throw err.response.data;
    });
}
function usernameExists(data) {
  return request
    .post('api/v1/account/username-available', data)
    .then(res => res)
    .catch(err => {
      console.log(err);
      throw 'Error occurred, please try again';
    });
}

function verifyCode(data) {
  return request
    .post(`api/v1/account/verify/${data.payload}/`)
    .then(res => res)
    .catch(err => {
      throw err.response.data.join().replace(',', '').toString();
    });
}

function resetCode() {
  return request
    .post('api/v1/account/resend/code/')
    .then(res => res)
    .catch(err => {
      throw err.response.data.toString();
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
    StorageUtils.removeValue(constants.TERMS_AGREED);
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
    console.warn('error => ', err);
    if (!err) {
      const result = yield call(login, auth);

      StorageUtils.setStringValue(constants.TOKEN_KEY, result.data.token);
      StorageUtils.setStringValue(
        constants.USER_VERIFIED,
        result.data.verified.toString(),
      );
      yield put(
        actions.loginSuccess({
          ...result.data,
        }),
      );
    }
    const error =
      getServerError(err.response?.data) || JSON.stringify(err.response || err);
    yield put(
      actions.signUpError(error || 'An error occurred when trying to sign Up'),
    );
  }
}

function* handleUpdateUsername({ payload }) {
  try {
    const result = yield call(updateUsername, payload);
    StorageUtils.setStringValue(constants.USERNAME, result.data.username);
    yield put(actions.updateUsernameSuccess({}));
  } catch (err) {
    yield put(actions.updateUsernameError(err));
  }
}
function* handleUsernameExists({ payload }) {
  try {
    const result = yield call(usernameExists, payload);
    yield put(
      actions.usernameExistSuccess({
        exist: result.data,
      }),
    );
  } catch (err) {
    yield put(actions.usernameExistError(err));
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
    if (result.data.hasUsername !== 0) {
      StorageUtils.setStringValue(constants.HAS_USERNAME, 'true');
    }

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
  return request.post(
    `api/v1/account/facebook-auth/${auth.access_token}`,
    auth,
  );
}

function* handleFacebookSignUp({ auth, onSuccess }) {
  try {
    let result = yield call(facebookSignUp, auth);
    StorageUtils.setStringValue(constants.TOKEN_KEY, result.data.token);
    StorageUtils.setStringValue(constants.USER_VERIFIED, 'true');
    setAuthorizationToken(result.data.token);
    yield put(
      actions.loginSuccess({
        ...result.data,
      }),
    );
    yield put(actions.facebookSignUpSuccess({}));
    onSuccess && onSuccess();
  } catch (e) {
    yield put(
      actions.facebookSignUpError(
        e.response?.data?.message || 'An error occurred when sign Up',
      ),
    );
  }
}

function appleIdSignUp(auth) {
  return request
    .post(`api/v1/account/appleid-auth/${auth.access_token}/`, auth)
    .then(res => res)
    .catch(err => {
      alert(JSON.stringify(err.response.data));
      throw err.response.data.join();
    });
}

function* handleAppleIdSignUp({ auth, onSuccess }) {
  try {
    let result = yield call(appleIdSignUp, auth);
    StorageUtils.setStringValue(constants.TOKEN_KEY, result.data.token);
    StorageUtils.setStringValue(constants.USER_VERIFIED, 'true');
    setAuthorizationToken(result.data.token);
    yield put(
      actions.loginSuccess({
        ...result.data,
      }),
    );
    yield put(actions.appleIdSignUpSuccess({}));
    onSuccess && onSuccess();
  } catch (e) {
    yield put(
      actions.appleIdSignUpError(
        e.response?.data?.message || 'An error occurred when signing Up',
      ),
    );
  }
}

function googleSignUp(auth) {
  return request
    .post(`api/v1/account/google-auth/${auth.access_token}`, auth)
    .then(resp => resp)
    .catch(err => {
      alert(JSON.stringify(err.response.data.join()));
      throw err.response.data.join();
    });
}

function* handleGoogleSignUp({ auth, onSuccess }) {
  try {
    let result = yield call(googleSignUp, auth);
    StorageUtils.setStringValue(constants.TOKEN_KEY, result.data.token);
    StorageUtils.setStringValue(constants.USER_VERIFIED, 'true');
    setAuthorizationToken(result.data.token);
    yield put(
      actions.loginSuccess({
        ...result.data,
      }),
    );
    yield put(actions.googleSignUpSuccess({}));
    onSuccess && onSuccess();
  } catch (e) {
    yield put(
      actions.googleSignUpError(
        e.response?.data?.message || 'An error occurred when signing Up',
      ),
    );
  }
}

function* handleLogOut() {
  try {
    StorageUtils.removeValue(constants.TOKEN_KEY);
    StorageUtils.removeValue(constants.USER_VERIFIED);
    StorageUtils.removeValue(constants.USERNAME);

    StorageUtils.removeValue(constants.HAS_USERNAME);
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
  takeLatest(constants.USERNAME_EXIST, handleUsernameExists),
  takeLatest(constants.UPDATE_USERNAME, handleUpdateUsername),
  takeLatest(constants.GOOGLE_SIGNUP, handleGoogleSignUp),
  takeLatest(constants.APPLE_ID_SIGNUP, handleAppleIdSignUp),
];
