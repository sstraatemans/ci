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
  if(!token){
    return {
      type: types.AUTH_USER_ERROR,
      token
    };
  }
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

export function requestAuthorizedUserAction () {
  let token = localStorage.getItem("token");
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return {
    type: types.GET_AUTHORIZEDUSER_REQUEST,
    token
  };
}

export function successAuthorizedUserAction (user) {
  return {
    type: types.GET_AUTHORIZEDUSER_SUCCESS,
    user
  };
}

export function authLogoutAction() {
  localStorage.removeItem("token");
  return {
    type: types.LOGOUT_AUTHORIZEDUSER
  };
}
