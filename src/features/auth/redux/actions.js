import * as constant from './constants';

export const updateUsername = payload => ({
  type: constant.UPDATE_USERNAME,
  payload,
});

export const updateUsernameSuccess = payload => ({
  type: constant.UPDATE_USERNAME_SUCCESS,
  payload,
});
export const updateUsernameError = payload => ({
  type: constant.UPDATE_USERNAME_ERROR,
  payload,
});

export const usernameExist = payload => ({
  type: constant.USERNAME_EXIST,
  payload,
});

export const usernameExistSuccess = payload => ({
  type: constant.USERNAME_EXIST_SUCCESS,
  payload,
});

export const usernameExistError = payload => ({
  type: constant.USERNAME_EXIST_ERROR,
  payload,
});

export const resendCode = payload => ({
  type: constant.RESET_CODE,
  payload,
});

export const resetCodeSuccess = payload => ({
  type: constant.RESET_CODE_SUCCESS,
  payload,
});

export const resetCodeError = payload => ({
  type: constant.RESET_CODE_ERROR,
  payload,
});

export const verifyCode = payload => ({
  type: constant.VERIFY_CODE,
  payload,
});

export const verifyCodeSuccess = payload => ({
  type: constant.VERIFY_CODE_SUCCESS,
  payload,
});

export const verifyCodeError = payload => ({
  type: constant.VERIFY_CODE_ERROR,
  payload,
});
export const signUp = auth => ({
  type: constant.SIGNUP,
  auth,
});

export const signUpSuccess = user => ({
  type: constant.SIGNUP_SUCCESS,
  user,
});

export const signUpError = error => ({
  type: constant.SIGNUP_ERROR,
  error,
});

export const login = auth => ({
  type: constant.LOGIN,
  auth,
});

export const loginSuccess = user => ({
  type: constant.LOGIN_SUCCESS,
  user,
});

export const loginError = error => ({
  type: constant.LOGIN_ERROR,
  error,
});

export const clearSignUpError = () => ({
  type: constant.CLEAR_SIGNUP_ERROR,
});

export const clearLoginError = () => ({
  type: constant.CLEAR_LOGIN_ERROR,
});

export const getLoggedUser = () => ({
  type: constant.GET_LOGGED_USER,
});

export const getLoggedUserSuccess = user => ({
  type: constant.GET_LOGGED_USER_SUCCESS,
  user,
});

export const updateProfile = (id, profile, onSuccess) => ({
  type: constant.UPDATE_PROFILE,
  id,
  profile,
  onSuccess,
});

export const updateProfileSuccess = user => ({
  type: constant.UPDATE_PROFILE_SUCCESS,
  user,
});

export const updateProfileError = error => ({
  type: constant.UPDATE_PROFILE_ERROR,
  error,
});

export const uploadImage = (id, picture) => ({
  type: constant.UPLOAD_IMAGE,
  id,
  picture,
});

export const uploadImageSuccess = user => ({
  type: constant.UPLOAD_IMAGE_SUCCESS,
  user,
});

export const uploadImageError = error => ({
  type: constant.UPLOAD_IMAGE_ERROR,
  error,
});

export const facebookSignUp = (auth, onSuccess) => ({
  type: constant.FACEBOOK_SIGNUP,
  auth,
  onSuccess,
});

export const facebookSignUpSuccess = user => ({
  type: constant.FACEBOOK_SIGNUP_SUCCESS,
  user,
});

export const facebookSignUpError = error => ({
  type: constant.FACEBOOK_SIGNUP_ERROR,
  error,
});

export const logOut = () => ({
  type: constant.LOGOUT_USER,
});

export const logOutSuccess = () => ({
  type: constant.LOGOUT_USER_SUCCESS,
});

export const logOutError = () => ({
  type: constant.LOGOUT_USER_ERROR,
});
