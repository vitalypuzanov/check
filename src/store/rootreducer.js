import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import postReducer from './posts/index';
import commentReducer from './comments/index';
import userReducer from './user';

export const history = createBrowserHistory();

const initial = {};

export function appReducer(state = initial, action) {
  return state;
}

const rootReducer = combineReducers({
  user: userReducer,
  comment: commentReducer,
  post: postReducer,
  router: connectRouter(history),
});

export default rootReducer;
