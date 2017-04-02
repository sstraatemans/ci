import { put, take, call } from 'redux-saga/effects';
import axios from 'axios';
import * as types from './../actionTypes';
import {authUserSuccess, authUserError, userGetMe} from './../actions';


function checkAuth(creds){
  return axios.post('http://localhost:3000/auth',
    creds
  ).then((d) => {
    return d.data.token;
  });
}

function getMe(){
  return axios.get('http://localhost:3000/api/v1/users/me'
  ).then((d) => {
    return d.data;
  });
}

export function* auth(action) {

  try {
    yield* take(types.AUTH_USER_REQUEST);
    const token = yield call(checkAuth, action.user);
    yield put(authUserSuccess(token));

    const user = yield call(getMe);
    console.log(user);
    yield put(userGetMe(user));


  } catch (error) {
  yield put(authUserError(error));
  }
}
