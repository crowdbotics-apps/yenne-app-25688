import { request } from 'utils/http';

export const getNotifications = () => {
  return request.get('api/v1/notifications');
};

export const markAllAsRead = () => {
  return request.post('api/v1/notifications/read-all');
};
