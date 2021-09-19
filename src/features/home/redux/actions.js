import * as constants from './constants';

export const getProfiles = ({ payload, onSuccess, onError }) => {
  return {
    type: constants.LIST_PROFILES,
    payload,
    onSuccess,
    onError,
  };
};

export const getProfilesSuccess = payload => {
  return {
    type: constants.LIST_PROFILES_SUCCESS,
    payload,
  };
};

export const getProfilesFail = payload => ({
  type: constants.LIST_PROFILES_FAIL,
  payload,
});
