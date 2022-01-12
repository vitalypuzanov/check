import {fetchCommentSuccess, fetchCommentFailure} from './actions';
import {LOAD_COMMENT_LIST} from './actionTypes';
import {call, takeEvery, put} from 'redux-saga/effects';
import {Comment} from './type';
import axios from 'axios';

const getComment = (id?: string) =>
  axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );

export function* loadComments(action: any): Generator {
  try {
    const {id} = action.payload;
    const response: any = yield call(getComment, id);
    yield put(
      fetchCommentSuccess({
        data: response.data,
      }),
    );
  } catch (error) {
    yield put(
      fetchCommentFailure({
        error: 'error',
      }),
    );
  }
}

export default function* commentSaga() {
  yield takeEvery(LOAD_COMMENT_LIST, loadComments);
}
