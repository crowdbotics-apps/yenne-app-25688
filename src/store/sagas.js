import { all } from 'redux-saga/effects';
import authSagas from '../features/auth/redux/sagas';
import financialSagas from '../features/Financial/redux/sagas';
import fundingSourceSagas from '../features/Accounts/redux/sagas';
import profileSagas from '../features/home/redux/sagas';
import notificationSagas from '../features/Notification/redux/sagas';

export default function* rootSaga() {
  const sagas = [
    ...authSagas,
    ...financialSagas,
    ...fundingSourceSagas,
    ...profileSagas,
    ...notificationSagas,
  ];
  yield all(sagas);
}
