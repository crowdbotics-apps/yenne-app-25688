import { request } from 'utils/http';

const FUNDING_SOURCE_API = 'api/v1/payment/funding-source';

export const getFundingSource = () => {
  return request.get(FUNDING_SOURCE_API + '/all');
};
export const getFundingSourceBalance = () => {
  return request.get(FUNDING_SOURCE_API + '/balance');
};
export const deleteFundingSource = payload => {
  return request.delete(`${FUNDING_SOURCE_API}/${payload?.funding_source_id}`);
};

export const deposit = payload => {
  return request.post('api/v1/payment/deposit', payload);
};

export const sendMoney = payload => {
  return request.post('api/v1/payment/send-money', payload);
};

export const requestMoney = payload => {
  return request.post('api/v1/payment/request-money', payload);
};
