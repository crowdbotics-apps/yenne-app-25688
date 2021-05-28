import { all } from 'redux-saga/effects';
import authSagas from '../features/auth/redux/sagas';
import financialSagas from '../features/Financial/redux/sagas';

export default function* rootSaga() {
  const sagas = [...authSagas, ...financialSagas];
  yield all(sagas);
}
