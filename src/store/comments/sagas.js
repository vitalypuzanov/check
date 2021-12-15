import {LOAD_COMMENT_LIST,LOAD_COMMENT_LIST_SUCCESS,LOAD_COMMENT_LIST_FAILURE} from './actions';
import {call, apply, takeEvery, put,} from 'redux-saga/effects';

export function* loadComments({payload}) {
    const {id} = payload;
    try {
      const request = yield call(
        fetch,
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      );
      const data = yield apply(request, request.json);
  
      yield put({
        type: LOAD_COMMENT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      yield put({
        type: LOAD_COMMENT_LIST_FAILURE,
        payload: error,
      });
    }
  }


  export default function* commentSaga() {

    yield takeEvery(LOAD_COMMENT_LIST, loadComments);

  }