import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAIL
} from '../types';

const getAllMovies = () => {
  return async (dispatch) => {
    dispatch({type: GET_ALL_MOVIES});

    
  };
};

export {getAllMovies};
