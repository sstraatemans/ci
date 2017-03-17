import * as types from "./../actionTypes";

export function FetchShows () {
  return {
    type: types.FETCH_SHOWS_REQUEST
  };
}

export function FetchShowsSuccess (shows) {
  return {
    type: types.FETCH_SHOWS_SUCCESS,
    shows
  };
}
