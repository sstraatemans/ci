import * as types from "./../actionTypes";


const initialState = {
  user: {},
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
  Object.assign(newState, state, {loading: false, token: action.token});
  return newState;
};

const setError = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {loading: false, user: {}});
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
    default:
      return state;
    }
};

export default authReducer;
