import {call, apply, takeEvery, put, take, fork} from 'redux-saga/effects';
import {LOCATION_CHANGE} from 'connected-react-router'
import {LOAD_USER_LIST,LOAD_USER_SUCCESS} from './actions'


export function* loadUserList() {
  const request = yield call(
    fetch,
    'https://jsonplaceholder.typicode.com/users',
  );
  const data = yield apply(request, request.json);
  yield put({type: LOAD_USER_SUCCESS, payload: data});
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

export default function* userSaga() {
  yield fork(loadUsersOnRouteEnter);
  yield takeEvery(LOAD_USER_LIST, loadUserList);
  
}
