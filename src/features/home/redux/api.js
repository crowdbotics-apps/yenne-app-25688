import { request } from 'utils/http';

export const getProfiles = payload => {
  return request.get(`api/v1/profile/?${payload?.params}`);
};
