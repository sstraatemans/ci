import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import localeReducer from './reducers/localeReducer';

const reducers = combineReducers({
  localeReducer,
});


const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : (f) => f
));

export default store;
