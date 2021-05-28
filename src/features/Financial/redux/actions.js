import * as constant from './constants';

export const listCards = () => ({
  type: constant.LIST_CARDS,
});

export const listCardsSuccess = payload => ({
  type: constant.LIST_CARDS_SUCCESS,
  payload,
});

export const listCardsFail = payload => ({
  type: constant.LIST_CARDS_FAIL,
  payload,
});

//create card
export const addCard = ({ data, onSuccess, onError }) => {
  return { type: constant.ADD_CARD, data, onSuccess, onError };
};

export const addCardSuccess = payload => ({
  type: constant.ADD_CARD_SUCCESS,
  payload,
});

export const addCardFail = payload => ({
  type: constant.ADD_CARD_FAIL,
  payload,
});
