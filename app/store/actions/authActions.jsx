import * as types from "./../actionTypes";

export function authUser (credentials) {
  return {
    type: types.AUTH_USER_REQUEST,
    user: credentials
  };
}

export function authUserSuccess (user) {
  return {
    type: types.AUTH_USER_SUCCESS,
    user
  };
}

export function authUserError (err) {
  return {
    type: types.AUTH_USER_ERROR,
    err
  };
}
