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
  Object.assign(newState, state, {loading: false, user: null});
  return newState;
};

const getAuthorizedRequest = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loading: true, token: action.token});
  return newState;
};

const getAuthorizedSuccess = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loading: false, user:action.user});
  return newState;
};

const getAuthorizedError = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loading: false, user:null});
  return newState;
};

const logout = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loading: false, user:null, token: null});
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

    case types.GET_AUTHORIZEDUSER_REQUEST:
      return getAuthorizedRequest(state, action);
    case types.GET_AUTHORIZEDUSER_SUCCESS:
      return getAuthorizedSuccess(state, action);
    case types.GET_AUTHORIZEDUSER_ERROR:
      return getAuthorizedError(state, action);
    case types.LOGOUT_AUTHORIZEDUSER:
      return logout(state, action);


    default:
      return state;
    }
};

export default authReducer;
