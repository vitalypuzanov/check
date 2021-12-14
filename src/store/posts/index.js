import {
  LOAD_POST_LIST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  LOAD_USER_LIST,
  LOAD_USER_SUCCESS,
  LOAD_FILTER,
} from './actions';
import {LOAD_USER_DETAILS} from '../comments/actions';


const initialPostState = {
  loading: true,
  search: '',
  error: null,
  data: null,
  loading_user: true,
  error_user: null,
  user: null,
};
export default function postReducer(state = initialPostState, action) {
  switch (action.type) {
    case LOAD_POST_LIST: {
      // const { search} = action.payload;
      return {
        ...state,
        loading: true,
        // search,
      };
    }
    case LOAD_FILTER: {
      const {search} = action.payload;
      return {
        ...state,
        loading: false,
        search,
      };
    }
    case LOAD_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }

    case LOAD_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case LOAD_USER_LIST: {
      return {
        ...state,
        loading_user: false,
        error_user: action.payload,
      };
    }

    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        loading_user: false,
        user: action.payload,
      };
    }

    default:
      return state;
  }
}

export const getCommentCreator = () => ({type: LOAD_USER_DETAILS});
