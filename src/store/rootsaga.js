import {all, spawn} from 'redux-saga/effects';
// import postSaga from '../redux/sagas/posts/index';
import postSaga from './posts/sagas';

export default function* rootSaga() {
  const sagas = [postSaga];

  yield all(sagas.map((s) => spawn(s)));
}
