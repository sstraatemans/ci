import { combineReducers } from 'redux';
import localeReducer from './localeReducer';
import showsReducer from './showsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  localeReducer,
  showsReducer,
  authReducer
});

export default rootReducer;
