import {
  LOAD_USER_LIST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from './actionTypes';

export interface UserState {
  user: User[] | null;
  loading_user: boolean;
  error_user: null | string;
}

export interface User {
  id?: string | number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
    stree: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}

export enum UserActionTypes {
  LOAD_USER_LIST = 'LOAD_USER_LIST',
  LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS',
  LOAD_USER_FAILURE = 'LOAD_USER_FAILURE',
}

export interface FetcUserSuccessPayload {
  user: User[];
}

export interface FetchUserFailurePayload {
  error: string;
}

export interface FetchUsertAction {
  type: typeof LOAD_USER_LIST;
  payload?: any[];
}
export interface FetchUserSuccessAction {
  type: typeof LOAD_USER_SUCCESS;
  payload: any[] | any;
}
export interface FetchUserErrorAction {
  type: typeof LOAD_USER_FAILURE;
  payload: string | any;
}
interface FetchUsersAction {
  type: UserActionTypes.LOAD_USER_LIST;
}
interface FetchUsersSuccessAction {
  type: UserActionTypes.LOAD_USER_SUCCESS;
  payload: any[];
}
interface FetchUsersErrorAction {
  type: UserActionTypes.LOAD_USER_FAILURE;
  payload: string;
}
export type UserAction =
  | FetchUsersAction
  | FetchUsersErrorAction
  | FetchUsersSuccessAction;
