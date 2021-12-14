import {call, apply, takeEvery, put, take, fork} from 'redux-saga/effects';
import {LOCATION_CHANGE} from 'connected-react-router';
import {
  LOAD_POST_SUCCESS,
  LOAD_POST_LIST,
  LOAD_USER_LIST,
  LOAD_USER_SUCCESS,
  LOAD_FILTER,
} from '../../reducers/posts/actions';
import {
  LOAD_USER_DETAILS_SUCCESS,
  LOAD_USER_DETAILS_FAILURE,
  LOAD_USER_DETAILS,
} from '../../reducers/comments/actions';

export function* loadComments({payload}) {
  const {id} = payload;
  try {
    const request = yield call(
      fetch,
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );
    const data = yield apply(request, request.json);

    yield put({
      type: LOAD_USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: LOAD_USER_DETAILS_FAILURE,
      payload: error,
    });
  }
}

export function* loadUserList() {
  const request = yield call(
    fetch,
    'https://jsonplaceholder.typicode.com/users',
  );
  const data = yield apply(request, request.json);
  yield put({type: LOAD_USER_SUCCESS, payload: data});
}

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

export function* loadUsersOnRouteEnter() {
  while (true) {
    const action = yield take(LOCATION_CHANGE);
    if (action.payload.location.pathname === '/') {
      yield put({
        type: LOAD_USER_LIST,
      });
    }
  }
}

export default function* postSaga() {
  yield fork(loadPostsOnRouteEnter);
  yield takeEvery(LOAD_POST_LIST, loadPostsList);
  yield fork(loadUsersOnRouteEnter);
  yield takeEvery(LOAD_USER_LIST, loadUserList);
  yield takeEvery(LOAD_USER_DETAILS, loadComments);
  yield takeEvery(LOAD_FILTER, loadFilteredPost);
}
