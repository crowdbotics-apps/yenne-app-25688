import * as constants from './constants';

const initialState = {
  listCardsLoading: false,
  cards: [],
  serverError: undefined,
  depositLoading: false,
};

export const financialReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LIST_CARDS:
      return { ...state, listCardsLoading: true };
    case constants.LIST_CARDS_SUCCESS:
      return { ...state, listCardsLoading: false, cards: action.payload };
    case constants.LIST_CARDS_FAIL:
      return { ...state, listCardsLoading: false, serverError: action.payload };

    case constants.DEPOSIT_FROM_CARD:
      return { ...state, depositLoading: true };
    case constants.DEPOSIT_FROM_CARD_SUCCESS:
      return { ...state, depositLoading: false };
    case constants.DEPOSIT_FROM_CARD_FAIL:
      return { ...state, depositLoading: false };

    case constants.ADD_CARD:
      return { ...state, listCardsLoading: true, serverError: undefined };

    case constants.ADD_CARD_SUCCESS:
      return { ...state, listCardsLoading: false, serverError: undefined };

    case constants.ADD_CARD_FAIL:
      return {
        ...state,
        listCardsLoading: false,
        serverError: action.payload.error,
      };

    case constants.DELETE_CARD:
      return { ...state, listCardsLoading: true, serverError: undefined };

    case constants.DELETE_CARD_SUCCESS:
      return { ...state, listCardsLoading: false, serverError: undefined };

    case constants.DELETE_CARD_FAIL:
      return {
        ...state,
        listCardsLoading: false,
        serverError: action.payload.error,
      };

    case constants.UPDATE_CARD:
      return { ...state, listCardsLoading: true, serverError: undefined };

    case constants.UPDATE_CARD_SUCCESS:
      return { ...state, listCardsLoading: false, serverError: undefined };

    case constants.UPDATE_CARD_FAIL:
      return {
        ...state,
        listCardsLoading: false,
        serverError: action.payload.error,
      };

    default:
      return state;
  }
};

export default financialReducer;
