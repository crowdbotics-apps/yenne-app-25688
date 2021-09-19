import * as constants from './constants';

export const listFundingSource = () => ({
  type: constants.LIST_FUNDING_SOURCE,
});

export const listFundingSourceSuccess = payload => ({
  type: constants.LIST_FUNDING_SOURCE_SUCCESS,
  payload,
});

export const listFundingSourceFail = payload => ({
  type: constants.LIST_FUNDING_SOURCE_FAIL,
  payload,
});

// Delete
export const deleteFundingSource = ({ payload, onSuccess, onError }) => ({
  type: constants.DELETE_FUNDING_SOURCE,
  payload,
  onSuccess,
  onError,
});

export const deleteFundingSourceSuccess = payload => ({
  type: constants.DELETE_FUNDING_SOURCE_SUCCESS,
  payload,
});

export const deleteFundingSourceFail = payload => ({
  type: constants.DELETE_FUNDING_SOURCE_FAIL,
  payload,
});

// balance
export const getBalance = () => ({
  type: constants.GET_BALANCE,
});

export const getBalanceSuccess = payload => ({
  type: constants.GET_BALANCE_SUCCESS,
  payload,
});
export const getBalanceFail = payload => ({
  type: constants.GET_BALANCE_FAIL,
  payload,
});

// Deposit
export const depositToBalance = ({ payload, onSuccess, onError }) => {
  return {
    type: constants.DEPOSIT,
    payload,
    onSuccess,
    onError,
  };
};

export const depositSuccess = payload => {
  return {
    type: constants.DEPOSIT_SUCCESS,
    payload,
  };
};

export const depositFail = payload => ({
  type: constants.DEPOSIT_FAIL,
  payload,
});
