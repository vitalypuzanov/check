import {
  LOAD_COMMENT_LIST,
  LOAD_COMMENT_LIST_SUCCESS,
  LOAD_COMMENT_LIST_FAILURE,
} from './actionTypes';

import {
  FetchCommentSuccessPayload,
  FetchCommenFailurePayload,
  FetchCommentAction,
  FetchCommentSuccessAction,
  FetchCommentErrorAction,
} from './type';

export const fetchCommentRequest = (): FetchCommentAction => ({
  type: LOAD_COMMENT_LIST,
});

export const fetchCommentSuccess = (
  payload: FetchCommentSuccessPayload,
): FetchCommentSuccessAction => ({
  type: LOAD_COMMENT_LIST_SUCCESS,
  payload,
});

export const fetchCommentFailure = (
  payload: FetchCommenFailurePayload,
): FetchCommentErrorAction => ({
  type: LOAD_COMMENT_LIST_FAILURE,
  payload,
});
