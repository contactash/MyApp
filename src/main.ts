import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import {persistStore} from 'redux-persist';
import rootReducer from './reducers';
import rootSaga from './sagas';

export function configureStore() {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  // mount it on the Store, add any more middlewares to the middleware array
  const middleware = [sagaMiddleware];
  const store = createStore(rootReducer, applyMiddleware(...middleware));

  // then run the saga
  sagaMiddleware.run(rootSaga);
  return store;
}
