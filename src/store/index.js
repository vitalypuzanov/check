import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'connected-react-router';
import reducer, {history} from './rootreducer';

// import rootSaga from '../redux/sagas';
import rootSaga from './rootsaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(routerMiddleware(history), sagaMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;
