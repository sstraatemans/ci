import * as types from "./../actionTypes";

const initialState = {
  locale: 'en'
};

const setLocale = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {searchTerm: action.locale});
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
