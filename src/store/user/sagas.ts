import {call, takeEvery, put, take, fork} from 'redux-saga/effects';
import {LOCATION_CHANGE} from 'connected-react-router';
import {LOAD_USER_LIST} from './actionTypes';
import axios from 'axios';
import {AxiosResponse} from 'axios';
import {User} from './type';
import {fetchUserSuccess, fetchUserFailure} from './actions';

const getUser = () =>
  axios.get<User[]>('https://jsonplaceholder.typicode.com/users');

export function* loadUserList() {
  try {
    const response: AxiosResponse<User[]> = yield call(getUser);
    yield put(
      fetchUserSuccess({
        user: response.data,
      }),
    );
  } catch (error) {
    yield put(fetchUserFailure({error: 'error'}));
  }
}

export function* loadUsersOnRouteEnter(): Generator {
  while (true) {
    const action: any = yield take(LOCATION_CHANGE);

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
