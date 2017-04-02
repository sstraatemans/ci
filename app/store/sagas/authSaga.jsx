import { put, take, call } from 'redux-saga/effects';
import axios from 'axios';
import * as types from './../actionTypes';
import {authUserSuccess, authUserError, requestAuthorizedUserAction, successAuthorizedUserAction} from './../actions';


function checkAuth(creds){
  return axios.post('http://localhost:3000/auth',
    creds
  ).then((d) => {
    return d.data.token;
  });
}

function getAuthorizedUserAPI(){
  return axios.get('http://localhost:3000/api/v1/users/me'
  ).then((d) => {
    return d.data;
  });
}

export function* auth(action) {
  try {
    yield* take(types.AUTH_USER_REQUEST);
    const token = yield call(checkAuth, action.user);
    if(token){
      yield put(authUserSuccess(token));
      yield put(requestAuthorizedUserAction());
    }

  } catch (error) {
  yield put(authUserError(error));
  }
}


export function* getAuthorizedUser(){
  try {
    yield* take(types.GET_AUTHORIZEDUSER_REQUEST);
    let token = localStorage.getItem("token");
    if(token){
      const user = yield call(getAuthorizedUserAPI);
      yield put(successAuthorizedUserAction(user));
    }
  } catch (error) {
   yield put(authUserError(error));
  }
}
