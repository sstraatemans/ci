import { fork } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import * as types from "./../actionTypes";
import { selectors } from '../reducers';
import { fetchShowsSaga } from './showsSaga';
import actions from '../actions';


// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
function* watchFetchShows() {
  yield* takeLatest(types.FETCH_SHOWS_REQUEST, fetchShowsSaga);
}

export default function* rootSaga() {
  yield fork(watchFetchShows);
}
