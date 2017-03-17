import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as types from './../actionTypes';


function getShows(){
  return axios.get('http://localhost:3000/shows').then((d) => {
    return d.data;
  });
}

export function* fetchShowsSaga({ payload }) {
  try {
    const shows = yield call(getShows);
    yield put({ type: types.FETCH_SHOWS_SUCCESS, shows });
  } catch (error) {
    yield put({ type: 'FETCH_SHOWS_ERROR', error });
  }
}
