import { request } from 'utils/http';

const CARD_API = 'api/v1/cards/';

export function getCards() {
  return request.get(CARD_API);
}

export function addCard(payload) {
  return request.post(CARD_API, payload);
}

export function deleteCard(payload) {
  return request.delete(CARD_API + payload.id + '/');
}

export function updateCard(payload) {
  return request.put(CARD_API + payload.id + '/', payload);
}
