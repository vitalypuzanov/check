import {
  LOAD_USER_LIST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from './actionTypes';

import {
  FetcUserSuccessPayload,
  FetchUserFailurePayload,
  FetchUsertAction,
  FetchUserSuccessAction,
  FetchUserErrorAction,
} from './type';

export const fetchUserRequest = (): FetchUsertAction => ({
  type: LOAD_USER_LIST,
});

export const fetchUserSuccess = (
  payload: FetcUserSuccessPayload,
): FetchUserSuccessAction => ({
  type: LOAD_USER_SUCCESS,
  payload,
});

export const fetchUserFailure = (
  payload: FetchUserFailurePayload,
): FetchUserErrorAction => ({
  type: LOAD_USER_FAILURE,
  payload,
});
