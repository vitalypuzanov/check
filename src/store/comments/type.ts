import {
  LOAD_COMMENT_LIST,
  LOAD_COMMENT_LIST_SUCCESS,
  LOAD_COMMENT_LIST_FAILURE,
} from './actionTypes';

export interface CommentState {
  data: Comment[] | null | string;
  loading: boolean;
  error: null | string;
}

export interface Comment {
  postId: number;
  id: number | string;
  name: string;
  email: string;
  body: string;
}

export enum CommentActionTypes {
  LOAD_COMMENT_LIST = 'LOAD_COMMENT_LIST',
  LOAD_COMMENT_LIST_SUCCESS = 'LOAD_COMMENT_LIST_SUCCESS',
  LOAD_COMMENT_LIST_FAILURE = 'LOAD_COMMENT_LIST_FAILURE',
}

export interface FetchCommentSuccessPayload {
  data: Comment[];
}

export interface FetchCommenFailurePayload {
  error: string;
}

export interface FetchCommentAction {
  type: typeof LOAD_COMMENT_LIST;
}
export interface FetchCommentSuccessAction {
  type: typeof LOAD_COMMENT_LIST_SUCCESS;
  payload: any;
}
export interface FetchCommentErrorAction {
  type: typeof LOAD_COMMENT_LIST_FAILURE;
  payload: any;
}
export type CommentAction =
  | FetchCommentAction
  | FetchCommentErrorAction
  | FetchCommentSuccessAction;
