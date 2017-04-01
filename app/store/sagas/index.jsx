import { fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import * as types from "./../actionTypes";
import { selectors } from '../reducers';
import { fetchShowsSaga } from './showsSaga';
import { auth } from './authSaga';



function* watchAuth() {
  yield* takeEvery(types.AUTH_USER_REQUEST, auth);
}

export default function* rootSaga() {
  yield fork(watchAuth);
}
