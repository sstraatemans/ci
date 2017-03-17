import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleware),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
));

sagaMiddleware.run(rootSaga);
export default store;
