export interface CommentState {
  data: any[] | null;
  loading: boolean;
  error: null | string;
}

export enum CommentActionTypes {
  LOAD_COMMENT_LIST = 'LOAD_COMMENT_LIST',
  LOAD_COMMENT_LIST_SUCCESS = 'LOAD_COMMENT_LIST_SUCCESS',
  LOAD_COMMENT_LIST_FAILURE = 'LOAD_COMMENT_LIST_FAILURE',
}
interface FetchCommentAction {
  type: CommentActionTypes.LOAD_COMMENT_LIST;
}
interface FetchCommentSuccessAction {
  type: CommentActionTypes.LOAD_COMMENT_LIST_SUCCESS;
  payload: any[];
}
interface FetchCommentErrorAction {
  type: CommentActionTypes.LOAD_COMMENT_LIST_FAILURE;
  payload: string;
}
export type CommentAction =
  | FetchCommentAction
  | FetchCommentErrorAction
  | FetchCommentSuccessAction;
