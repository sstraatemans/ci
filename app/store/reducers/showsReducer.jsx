import * as types from "./../actionTypes";


const initialState = {
  shows: []
};

const setShows = (state, action) => {
  const newState = {};
  Object.assign(newState, state, {shows: action.shows});
  return newState;
};

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
      case types.FETCH_SHOWS_SUCCESS:
        return setShows(state, action);
      default:
        return state;
    }
};

export default showsReducer;
