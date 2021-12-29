export interface PostState {
  data: any[] | null;
  loading: boolean;
  error: null | string;
  search: string;
}


export enum PostActionTypes {
  LOAD_POST_LIST = 'LOAD_POST_LIST',
  LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS',
  LOAD_POST_FAILURE = 'LOAD_POST_FAILURE',
}
interface FetchPostAction {
  type: PostActionTypes.LOAD_POST_LIST;
}
interface FetchPostSuccessAction {
  type: PostActionTypes.LOAD_POST_SUCCESS;
  payload: any[];
}
interface FetchPostErrorAction {
  type: PostActionTypes.LOAD_POST_FAILURE;
  payload: string;
}
export type PostAction =
  | FetchPostAction
  | FetchPostErrorAction
  | FetchPostSuccessAction;
