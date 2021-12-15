import {LOAD_USER_LIST, LOAD_USER_FAILURE, LOAD_USER_SUCCESS} from './actions';

const initialPostState = {
  loading_user: true,
  error_user: null,
  user: null,
};
export default function userReducer(state = initialPostState, action) {
  switch (action.type) {
    case LOAD_USER_LIST: {
      return {
        ...state,
        loading_user: false,
        error_user: action.payload,
      };
    }
    // case LOAD_USER_FAILURE: {
    //   return {
    //     ...state,
    //     loading_user: false,
    //     error_user: action.payload,
    //   };
    // }

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
