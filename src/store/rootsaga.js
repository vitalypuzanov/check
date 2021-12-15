import {all, spawn} from 'redux-saga/effects';
// import postSaga from '../redux/sagas/posts/index';
import postSaga from './posts/sagas';
import userSaga from './user/sagas';
import commentSaga from './comments/sagas';

export default function* rootSaga() {
  const sagas = [postSaga, userSaga, commentSaga];

  yield all(sagas.map((s) => spawn(s)));
}
