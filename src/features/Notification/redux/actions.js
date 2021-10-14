import * as constants from './constants';

export const getNotifications = () => {
  return {
    type: constants.LIST_NOTIFICATION,
  };
};

export const getNotificationsSuccess = payload => {
  return {
    type: constants.LIST_NOTIFICATION_SUCCESS,
    payload,
  };
};

export const getNotificationsFail = payload => ({
  type: constants.LIST_NOTIFICATION_FAIL,
  payload,
});
