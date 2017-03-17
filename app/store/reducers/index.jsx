import { combineReducers } from 'redux';
import localeReducer from './localeReducer';
import showsReducer from './showsReducer';

const rootReducer = combineReducers({
  localeReducer,
  showsReducer
});

export default rootReducer;
