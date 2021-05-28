import { request } from 'utils/http';

const CARD_API = 'api/v1/cards/';

export function getCards() {
  return request.get(CARD_API);
}

export function addCard(payload) {
  return request.post(CARD_API, payload);
}
