import {
  GET_ALL_MOVIES,
  GET_ALL_MOVIES_SUCCESS,
  GET_ALL_MOVIES_FAIL,
} from '../types';
import * as ApiManager from '../../Services/ApiManager';

const getAllMovies = (page) => {
  return async (dispatch) => {
    dispatch({type: GET_ALL_MOVIES});

    const data = await ApiManager.getAllMovies(page);

    if (data) {
      dispatch({
        type: GET_ALL_MOVIES_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: GET_ALL_MOVIES_FAIL,
        payload: data,
      });
    }
  };
};

export {getAllMovies};
