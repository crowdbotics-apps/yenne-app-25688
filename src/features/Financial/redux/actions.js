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

// DELETE card
export const deleteCard = ({ data, onSuccess, onError }) => {
  return { type: constant.DELETE_CARD, data, onSuccess, onError };
};

export const deleteCardSuccess = payload => ({
  type: constant.DELETE_CARD_SUCCESS,
  payload,
});

export const deleteCardFail = payload => ({
  type: constant.DELETE_CARD_FAIL,
  payload,
});

// UPDATE card
export const updateCard = ({ data, onSuccess, onError }) => {
  return { type: constant.UPDATE_CARD, data, onSuccess, onError };
};

export const updateCardSuccess = payload => ({
  type: constant.UPDATE_CARD_SUCCESS,
  payload,
});

export const updateCardFail = payload => ({
  type: constant.UPDATE_CARD_FAIL,
  payload,
});

// DEPOSIT FROM CARD
export const depositFromCard = ({ data, onSuccess, onError }) => {
  return { type: constant.DEPOSIT_FROM_CARD, data, onSuccess, onError };
};

export const depositFromCardSuccess = payload => ({
  type: constant.DEPOSIT_FROM_CARD_SUCCESS,
  payload,
});

export const depositFromCardFail = payload => ({
  type: constant.DEPOSIT_FROM_CARD_FAIL,
  payload,
});
