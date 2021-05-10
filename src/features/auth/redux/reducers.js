import * as constants from './constants';

const initialState = {
  signUpLoading: false,
  user: {},
  signUpErrorMsg: undefined,
  loginError: undefined,
  appLoading: false,
  loggedIn: false,
  updateProfileLoading: false,
  updateProfileError: '',
  uploadImageLoading: false,
  uploadImageError: undefined,
  fbSignUpLoading: false,
  googleSignupLoading: false,
  appleIdSignupLoading: false,
  socialAuthError: undefined,
  logOutLoading: false,
  verifyError: undefined,
  verified: false,
  resetLoading: false,
  resetSuccess: false,
  agreeToTerms: false,
  usernameExist: undefined,
  usernameExistLoading: false,
  usernameSet: undefined,
  updateUsernameLoading: false,
  forgotPasswordLoading: false,
  passwordSent: false,
  forgotPasswordError: undefined,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_USERNAME:
      return { ...state, updateUsernameLoading: true };

    case constants.UPDATE_USERNAME_SUCCESS:
      return { ...state, updateUsernameLoading: false, usernameSet: true };

    case constants.UPDATE_USERNAME_ERROR:
      return {
        ...state,
        updateUsernameLoading: false,
        loginError: action.payload.err,
      };

    case constants.USERNAME_EXIST:
      return { ...state, usernameExistLoading: true };
    case constants.USERNAME_EXIST_SUCCESS:
      return {
        ...state,
        usernameExistLoading: false,
        usernameExist: action.payload.exist,
      };
    case constants.USERNAME_EXIST_ERROR:
      return {
        ...state,
        usernameExistLoading: false,
        usernameExist: undefined,
      };

    case constants.VERIFY_CODE:
      return { ...state, appLoading: true, verified: false };
    case constants.VERIFY_CODE_SUCCESS:
      return { ...state, appLoading: false, verified: true };
    case constants.VERIFY_CODE_ERROR:
      return { ...state, appLoading: false, verifyError: action.payload };

    case constants.FORGOT_PASSWORD:
      return { ...state, forgotPasswordLoading: true, passwordSent: false };
    case constants.FORGOT_PASSWORD_SUCCESS:
      return { ...state, forgotPasswordLoading: false, passwordSent: true };
    case constants.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        forgotPasswordLoading: false,
        passwordSent: false,
        forgotPasswordError: action.payload,
      };

    case constants.RESET_CODE:
      return { ...state, resetLoading: true, verified: false };
    case constants.RESET_CODE_SUCCESS:
      return {
        ...state,
        resetLoading: false,
        resetSuccess: true,
        verified: false,
      };
    case constants.RESET_CODE_ERROR:
      return {
        ...state,
        resetLoading: false,
        verifyError: action.payload,
        verified: false,
      };

    case constants.SIGNUP:
      return { ...state, signUpLoading: true, signUpErrorMsg: undefined };
    case constants.SIGNUP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        user: action.user,
        signUpErrorMsg: undefined,
        resetSuccess: false,
        loggedIn: action.user ? true : false,
      };
    case constants.SIGNUP_ERROR:
      return { ...state, signUpLoading: false, signUpErrorMsg: action.error };

    case constants.LOGIN:
      return {
        ...state,
        signUpLoading: true,
        loginError: undefined,
        resetSuccess: false,
      };
    case constants.LOGIN_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        user: action.user,
        loginError: undefined,
        loggedIn: action.user ? true : false,
      };
    case constants.LOGIN_ERROR:
      return { ...state, signUpLoading: false, loginError: action.error };

    case constants.CLEAR_SIGNUP_ERROR:
      return {
        ...state,
        signUpErrorMsg: undefined,
        forgotPasswordError: undefined,
      };

    case constants.CLEAR_LOGIN_ERROR:
      return {
        ...state,
        loginError: undefined,
        forgotPasswordError: undefined,
        passwordSent: false,
      };

    case constants.GET_LOGGED_USER:
      return { ...state, appLoading: true };
    case constants.GET_LOGGED_USER_SUCCESS:
      return {
        ...state,
        appLoading: false,
        user: action.user,
        loggedIn: action.user ? true : false,
      };

    case constants.UPDATE_PROFILE:
      return { ...state, updateProfileLoading: true };
    case constants.UPDATE_PROFILE_SUCCESS:
      return { ...state, updateProfileLoading: false, user: action.user };
    case constants.UPDATE_PROFILE_ERROR:
      return {
        ...state,
        updateProfileLoading: false,
        updateProfileError: action.error,
      };

    case constants.UPLOAD_IMAGE:
      return {
        ...state,
        uploadImageLoading: true,
        uploadImageError: undefined,
      };
    case constants.UPLOAD_IMAGE_SUCCESS:
      return { ...state, uploadImageLoading: false, user: action.user };
    case constants.UPLOAD_IMAGE_ERROR:
      return {
        ...state,
        uploadImageLoading: false,
        uploadImageError: action.error,
      };

    case constants.FACEBOOK_SIGNUP:
      return { ...state, fbSignUpLoading: true, socialAuthError: undefined };

    case constants.FACEBOOK_SIGNUP_SUCCESS:
      return {
        ...state,
        fbSignUpLoading: false,
        socialAuthError: undefined,
      };
    case constants.FACEBOOK_SIGNUP_ERROR:
      return {
        ...state,
        fbSignUpLoading: false,
        socialAuthError: action.error,
      };

    case constants.GOOGLE_SIGNUP:
      return {
        ...state,
        googleSignupLoading: true,
        socialAuthError: undefined,
      };

    case constants.GOOGLE_SIGNUP_SUCCESS:
      return {
        ...state,
        googleSignupLoading: false,
        socialAuthError: undefined,
      };
    case constants.GOOGLE_SIGNUP_ERROR:
      return {
        ...state,
        googleSignupLoading: false,
        socialAuthError: action.error,
      };

    case constants.APPLE_ID_SIGNUP:
      return {
        ...state,
        appleIdSignupLoading: true,
        socialAuthError: undefined,
      };

    case constants.APPLE_ID_SIGNUP_SUCCESS:
      return {
        ...state,
        appleIdSignupLoading: false,
        socialAuthError: undefined,
      };
    case constants.APPLE_ID_SIGNUP_ERROR:
      return {
        ...state,
        appleIdSignupLoading: false,
        socialAuthError: action.error,
      };

    case constants.LOGOUT_USER:
      return { ...state, logOutLoading: true };
    case constants.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        user: {},
        loggedIn: false,
        verifyError: undefined,
        verified: false,
        resetLoading: false,
        resetSuccess: false,
        agreeToTerms: false,
        usernameExist: undefined,
        usernameExistLoading: false,
        usernameSet: undefined,
        updateUsernameLoading: false,
        forgotPasswordLoading: false,
        passwordSent: false,
        forgotPasswordError: undefined,
      };
    case constants.LOGOUT_USER_ERROR:
      return { ...state, logOutLoading: false };

    default:
      return state;
  }
};

export const user = state => state.auth;

export default authReducer;
