import { combineReducers } from 'redux';
import auth from '../features/auth/redux/reducers';
import financial from '../features/Financial/redux/reducers';
import fundingSource from '../features/Accounts/redux/reducers';
import profile from '../features/home/redux/reducers';
import notifications from '../features/Notification/redux/reducers';

export default combineReducers({
  auth,
  financial,
  fundingSource,
  profile,
  notifications,
});
