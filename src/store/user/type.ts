export interface UserState {
  user: any[] | null;
  loading_user: boolean;
  error_user: null | string;
}
export enum UserActionTypes {
  LOAD_USER_LIST = 'LOAD_USER_LIST',
  LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS',
  LOAD_USER_FAILURE = 'LOAD_USER_FAILURE',
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
