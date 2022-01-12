import {
  call,
  apply,
  takeEvery,
  put,
  take,
  fork,
  all,
  takeLatest,
} from 'redux-saga/effects';

import {LOCATION_CHANGE} from 'connected-react-router';
import {LOAD_POST_SUCCESS, LOAD_POST_LIST, LOAD_FILTER} from './actionTypes';
import {Post} from './type';
import {fetchPostSuccess, fetchPostFailure} from './actions';

import axios from 'axios';
import {AxiosResponse} from 'axios';

const getPost = () =>
  axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

export function* loadPostsList() {
  try {
    const response: AxiosResponse<Post[]> = yield call(getPost);
    yield put(
      fetchPostSuccess({
        data: response.data,
      }),
    );
  } catch (error) {
    yield put(
      fetchPostFailure({
        error: 'error',
      }),
    );
  }
}

export function* loadFilteredPost({payload}: any): Generator {
  const {search} = payload;
  const request: any = yield call(
    fetch,
    `https://jsonplaceholder.typicode.com/posts?userId=${search}`,
  );
  const data = yield apply(request, request.json, []);
  yield put({type: LOAD_POST_SUCCESS, payload: data});
}

export function* loadPostsOnRouteEnter(): Generator {
  while (true) {
    const action: any = yield take(LOCATION_CHANGE);
    if (action.payload.location.pathname === '/') {
      yield put({
        type: LOAD_POST_LIST,
      });
    }
  }
}

export default function* postSaga() {
  yield fork(loadPostsOnRouteEnter);
  yield all([takeLatest(LOAD_POST_LIST, loadPostsList)]);
  yield takeEvery(LOAD_FILTER, loadFilteredPost);
}

