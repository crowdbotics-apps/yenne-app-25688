import * as constants from './constants';

const initialState = {
  isLoading: false,
  data: [],
  serverError: undefined,
};

export const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LIST_NOTIFICATION:
      return { ...state, isLoading: true };
    case constants.LIST_NOTIFICATION_SUCCESS:
      return { ...state, isLoading: false, data: action.payload };
    case constants.LIST_NOTIFICATION_FAIL:
      return { ...state, isLoading: false, serverError: action.payload };

    default:
      return state;
  }
};

export default notificationsReducer;
