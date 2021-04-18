import { all } from 'redux-saga/effects';
import authSagas from '../features/auth/redux/sagas';
export default function* rootSaga() {
  const sagas = [...authSagas];
  yield all(sagas);
}
