import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAIL
} from '../types';

const INITIAL_STATE = {
  movieList: null,
};

export default (state, action) => {
  let currentState = state;
  if (state == null) {
    currentState = INITIAL_STATE;
  }

  switch (action.type) {
    case GET_ALL_MOVIES:
      return {
        ...currentState,
        movieList: null,
      };

    case GET_ALL_MOVIES_SUCCESS:
      return {
        ...currentState,
        movieList: action.payload,
      };

    case GET_ALL_MOVIES_FAIL:
      return {
        ...currentState,
        movieList: action.payload,
      };

    default:
      return currentState;
  }
};
