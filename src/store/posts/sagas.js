import {call, apply, takeEvery, put, take, fork} from 'redux-saga/effects';
import {LOCATION_CHANGE} from 'connected-react-router';
import {LOAD_POST_SUCCESS, LOAD_POST_LIST, LOAD_FILTER} from './actions';

export function* loadPostsList(search) {
  const request = yield call(
    fetch,
    'https://jsonplaceholder.typicode.com/posts',
  );
  const data = yield apply(request, request.json);
  yield put({type: LOAD_POST_SUCCESS, payload: data});
}

export function* loadFilteredPost({payload}) {
  const {search} = payload;
  const request = yield call(
    fetch,
    `https://jsonplaceholder.typicode.com/posts?userId=${search}`,
  );
  const data = yield apply(request, request.json);
  yield put({type: LOAD_POST_SUCCESS, payload: data});
}

export function* loadPostsOnRouteEnter() {
  while (true) {
    const action = yield take(LOCATION_CHANGE);
    if (action.payload.location.pathname === '/') {
      yield put({
        type: LOAD_POST_LIST,
      });
    }
  }
}

export default function* postSaga() {
  yield fork(loadPostsOnRouteEnter);
  yield takeEvery(LOAD_POST_LIST, loadPostsList);
  yield takeEvery(LOAD_FILTER, loadFilteredPost);
}
