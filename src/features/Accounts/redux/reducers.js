import * as constants from './constants';

const initialState = {
  isLoading: false,
  isDeleting: false,
  isLoadingBalance: false,
  isLoadingDeposit: false,
  showDepositSuccess: false,
  fundingSources: [],
  serverError: undefined,
  balance: '$0.00',
};

export const fundingSourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LIST_FUNDING_SOURCE:
      return { ...state, isLoading: true };
    case constants.LIST_FUNDING_SOURCE_SUCCESS:
      return { ...state, isLoading: false, fundingSources: action.payload };
    case constants.LIST_FUNDING_SOURCE_FAIL:
      return { ...state, isLoading: false, serverError: action.payload };

    case constants.DELETE_FUNDING_SOURCE:
      return { ...state, isDeleting: true };
    case constants.DELETE_FUNDING_SOURCE_SUCCESS:
      return { ...state, isDeleting: false };
    case constants.DELETE_FUNDING_SOURCE_FAIL:
      return { ...state, isDeleting: false };

    case constants.GET_BALANCE:
      return { ...state, isLoadingBalance: true };
    case constants.GET_BALANCE_SUCCESS:
      return { ...state, isLoadingBalance: false, balance: action.payload };
    case constants.GET_BALANCE_FAIL:
      return { ...state, isLoadingBalance: false };

    case constants.DEPOSIT:
      return { ...state, isLoadingDeposit: true };
    case constants.DEPOSIT_SUCCESS:
      return {
        ...state,
        isLoadingDeposit: false,
        showDepositSuccess: !state.showDepositSuccess,
      };
    case constants.DEPOSIT_FAIL:
      return { ...state, isLoadingDeposit: false };

    default:
      return state;
  }
};

export default fundingSourceReducer;
