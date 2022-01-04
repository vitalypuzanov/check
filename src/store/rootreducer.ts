import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import postReducer from './posts/index';
import commentReducer from './comments/index';
import userReducer from './user';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  user: userReducer,
  comment: commentReducer,
  post: postReducer,
  router: connectRouter(history),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
