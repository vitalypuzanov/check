import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import postReducer from './posts/index';
import commentReducer from './comments/index';

export const history = createBrowserHistory();

const initial = {};

export function appReducer(state = initial, action) {
  return state;
}

const rootReducer = combineReducers({
  comment: commentReducer,
  post: postReducer,
  app: appReducer,
  router: connectRouter(history),
});

export default rootReducer;
