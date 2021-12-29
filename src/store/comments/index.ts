// import {
//   LOAD_COMMENT_LIST,
//   LOAD_COMMENT_LIST_FAILURE,
//   LOAD_COMMENT_LIST_SUCCESS,
// } from './actions';
import {CommentState, CommentActionTypes, CommentAction} from './type';

const initialDetailsState: CommentState = {
  data: null,
  error: null,
  loading: false,
};

export default function commentReducer(
  state = initialDetailsState,
  action: CommentAction,
) {
  switch (action.type) {
    case CommentActionTypes.LOAD_COMMENT_LIST: {
      return {
        ...state,
        loading: true,
      };
    }

    case CommentActionTypes.LOAD_COMMENT_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    }

    case CommentActionTypes.LOAD_COMMENT_LIST_FAILURE: {
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
