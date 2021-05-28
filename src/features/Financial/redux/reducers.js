import * as constants from './constants';

const initialState = {
  listCardsLoading: false,
  cards: [],
  serverError: undefined,
};

export const financialReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LIST_CARDS:
      return { ...state, listCardsLoading: true };
    case constants.LIST_CARDS_SUCCESS:
      return { ...state, listCardsLoading: false, cards: action.payload };
    case constants.LIST_CARDS_FAIL:
      return { ...state, listCardsLoading: false, serverError: action.payload };

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
    default:
      return state;
  }
};

export default financialReducer;
