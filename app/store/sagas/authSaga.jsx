import { put, take, call } from 'redux-saga/effects';
import axios from 'axios';
import * as types from './../actionTypes';
import {authUserSuccess, authUserError} from './../actions';


function checkAuth(creds){
  return axios.post('http://localhost:3000/auth',
    creds
  ).then((d) => {
    return d.data.token;
  });

}

export function* auth(action) {

  try {
    yield* take(types.AUTH_USER_REQUEST);
    //let {username, password} = request;
    const token = yield call(checkAuth, action.user);

    yield put(authUserSuccess(token));
    } catch (error) {
     yield put(authUserError(error));
    }
}
