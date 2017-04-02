import { fork } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import * as types from "./../actionTypes";
import { selectors } from '../reducers';
import { fetchShowsSaga } from './showsSaga';
import { auth, getAuthorizedUser } from './authSaga';



function* watchAuth() {
  yield* takeEvery(types.AUTH_USER_REQUEST, auth);
}

function* watchAuthInit() {
  yield* takeEvery(types.GET_AUTHORIZEDUSER_REQUEST, getAuthorizedUser);
}

export default function* rootSaga() {
  yield [
    fork(watchAuth),
    fork(watchAuthInit)
  ];
}
