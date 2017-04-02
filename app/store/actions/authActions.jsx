import * as types from "./../actionTypes";
import axios from 'axios';

export function authUser (credentials) {
  return {
    type: types.AUTH_USER_REQUEST,
    user: credentials
  };
}

export function authUserSuccess (token) {
  //save token in localStorage
  localStorage.setItem("token", token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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

export function userGetMe (user) {
  return {
    type: types.USER_ME,
    user: user
  };

}
