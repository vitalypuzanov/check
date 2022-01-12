import {
  LOAD_POST_LIST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
} from './actionTypes';

import {
  FetchPostAction,
  FetchPostSuccessAction,
  FetchPostErrorAction,
  FetchPostSuccessPayload,
  FetchPostFailurePayload,
} from './type';

export const fetchPostRequest = (): FetchPostAction => ({
  type: LOAD_POST_LIST,
});

export const fetchPostSuccess = (
  payload: FetchPostSuccessPayload,
): FetchPostSuccessAction => ({
  type: LOAD_POST_SUCCESS,
  payload,
});

export const fetchPostFailure = (
  payload: FetchPostFailurePayload,
): FetchPostErrorAction => ({
  type: LOAD_POST_FAILURE,
  payload,
});


