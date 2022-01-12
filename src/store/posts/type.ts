import {
  LOAD_POST_LIST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
} from './actionTypes';

export interface PostState {
  data: Post[] | null | string;
  loading: boolean;
  error: null | string;
  search: string;
}

export interface Post {
  userId: number;
  id: number | string;
  title: string;
  body: string;
}


export enum PostActionTypes {
  LOAD_POST_LIST = 'LOAD_POST_LIST',
  LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS',
  LOAD_POST_FAILURE = 'LOAD_POST_FAILURE',
  LOAD_FILTER = 'LOAD_FILTER',
}
export interface LoadFilterAction {
  type: PostActionTypes.LOAD_FILTER;
  payload: string;
}

export interface FetchPostSuccessPayload {
  data: Post[];
}

export interface FetchPostFailurePayload {
  error: string;
}

export interface FetchPostAction {
  type: typeof LOAD_POST_LIST;
  payload?: any[] | any;
}
export interface FetchPostSuccessAction {
  type: typeof LOAD_POST_SUCCESS;
  payload: any[] | any;
}
export interface FetchPostErrorAction {
  type: typeof LOAD_POST_FAILURE;
  payload: string | any;
}
export type PostAction =
  | FetchPostAction
  | FetchPostErrorAction
  | FetchPostSuccessAction
  | LoadFilterAction;
