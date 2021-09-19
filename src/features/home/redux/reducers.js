import * as constants from './constants';

const initialState = {
  isLoading: false,
  profiles: [],
  serverError: undefined,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.LIST_PROFILES:
      return { ...state, isLoading: true };
    case constants.LIST_PROFILES_SUCCESS:
      return { ...state, isLoading: false, profiles: action.payload };
    case constants.LIST_PROFILES_FAIL:
      return { ...state, isLoading: false, serverError: action.payload };

    default:
      return state;
  }
};

export default profileReducer;
