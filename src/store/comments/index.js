import {
  LOAD_COMMENT_LIST,
  LOAD_COMMENT_LIST_FAILURE,
  LOAD_COMMENT_LIST_SUCCESS,
} from './actions';

const initialDetailsState = {
  id: null,
  data: null,
  error: null,
  loading: false,
};

export default function commentReducer(state = initialDetailsState, action) {
  switch (action.type) {
    case LOAD_COMMENT_LIST: {
      return {
        ...state,
        loading: true,
      };
    }

    case LOAD_COMMENT_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    }

    case LOAD_COMMENT_LIST_FAILURE: {
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
