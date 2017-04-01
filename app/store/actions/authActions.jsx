import * as types from "./../actionTypes";

export function authUser (credentials) {
  return {
    type: types.AUTH_USER_REQUEST,
    user: credentials
  };
}

export function authUserSuccess (token) {
  //save token in localStorage
  localStorage.setItem("token", token);
  return {
    type: types.AUTH_USER_SUCCESS,
    token
  };
}

export function authUserError (err) {
  return {
    type: types.AUTH_USER_ERROR,
    err
  };
}
