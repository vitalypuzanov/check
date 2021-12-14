import {all, spawn} from 'redux-saga/effects';
import postSaga from './posts';

export default function* rootSaga() {
  const sagas = [postSaga];

  yield all(sagas.map((s) => spawn(s)));
}
