import {PostState, PostActionTypes, PostAction} from './type';
import {LOAD_COMMENT_LIST} from '../comments/actionTypes';

const initialPostState: PostState = {
  loading: true,
  search: '',
  error: null,
  data: '',
};
export default function postReducer(
  state = initialPostState,
  action: PostAction,
) {
  switch (action.type) {
    case PostActionTypes.LOAD_POST_LIST: {
      return {
        ...state,
        loading: true,
      };
    }
    case PostActionTypes.LOAD_FILTER: {
      return {
        ...state,
        loading: false,
        search: action.payload,
      };
    }
    case PostActionTypes.LOAD_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }

    case PostActionTypes.LOAD_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}

export const getCommentCreator = () => ({type: LOAD_COMMENT_LIST});
