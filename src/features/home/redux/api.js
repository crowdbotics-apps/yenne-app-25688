import { request } from 'utils/http';

export const getProfiles = payload => {
  return request.get(`api/v1/profile/?${payload?.params}`);
};

export const updateProfile = (id, payload) => {
  return request.put(`api/v1/profile/${id}/`, payload);
};
