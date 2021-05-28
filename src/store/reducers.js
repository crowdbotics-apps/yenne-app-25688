import { combineReducers } from 'redux';
import auth from '../features/auth/redux/reducers';
import financial from '../features/Financial/redux/reducers';
export default combineReducers({
  auth,
  financial,
});
