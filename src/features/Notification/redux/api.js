import { request } from 'utils/http';

export const getNotifications = () => {
  return request.get('api/v1/notifications');
};
