import * as types from "./../actionTypes";
import Cookie from 'js-cookie';

const initialState = {
  locale: Cookie.get('locale') || 'en',
  messages: {}
};

const setLocale = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {locale: action.locale, messages: action.messages});
  return newState;
};

const localeReducer = (state = initialState, action) => {

  switch (action.type) {
      case types.SET_LOCALE:
        return setLocale(state, action);
      default:
        return state;
    }
};

export default localeReducer;
