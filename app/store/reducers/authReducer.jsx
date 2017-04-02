import * as types from "./../actionTypes";


const initialState = {
  user: null,
  token: "",
  loading: false
};

const setRequest = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loading: true});
  return newState;
};

const setSuccess = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loading: true, token: action.token});
  return newState;
};

const setError = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loading: false, user: {}});
  return newState;
};

const setUser = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loading: false, user: action.user});
  return newState;
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_USER_REQUEST:
      return setRequest(state, action);
    case types.AUTH_USER_SUCCESS:
      return setSuccess(state, action);
    case types.AUTH_USER_ERROR:
      return setError(state, action);
    case types.USER_ME:
      return setUser(state, action);
    default:
      return state;
    }
};

export default authReducer;
