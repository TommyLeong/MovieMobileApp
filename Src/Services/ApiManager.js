import axios from 'axios';
import AppConfig from '../Configs/AppConfig';
import EnvConfig from 'react-native-config';
import Api from '../Services/Api';
import * as AppEnvCheck from '../Helpers/AppEnvCheck';
import {Alert} from 'react-native';

const httpStatusChecker = (httpStatus) => {
  switch (httpStatus) {
    case 200:
      return true;
    case 401:
      Alert.alert('Unauthorized access. Screenshot this to your developer.');
      return false;
    case 500:
      Alert.alert('Server Error. Screenshot this to your developer.');
      return false;
    default:
      Alert.alert('Unknown Error. Screenshot this to your developer.');
      return false;
  }
};

const getAllMovies = async (page) => {
  const hasInternet = await AppEnvCheck.deviceHasInternet;
  let result = '';
  if (hasInternet) {
    await axios
      .get(
        `https://api.themoviedb.org/` +
          Api.GET_ALL_MOVIES +
          `?api_key=${AppConfig.apiKey}&sort_by=popularity.desc&page=${page}`,
      )
      .then((res) => {
        const is200 = httpStatusChecker(res.status);
        if (is200) {
          const data = res.data;
          result = data;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    Alert.alert(
      'Device has no access to internet. Please try again after connected with Internet.',
    );
  }
  return result;
};

const getAllGenre = async () => {
  let result = '';
  const hasInternet = await AppEnvCheck.deviceHasInternet;
  if (hasInternet) {
    axios
      .get(
        `https://api.themoviedb.org/` +
          Api.GET_GENRE_MOVIE_LIST +
          `?api_key=${AppConfig.apiKey}`,
      )
      .then((res) => {
        const is200 = httpStatusChecker(res.status);
        if (is200) {
          const data = res.data;
          result = data;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    Alert.alert(
      'Device has no access to internet. Please try again after connected with Internet.',
    );
  }
  return result;
};

const getSearchMovie = async (query) => {
  const hasInternet = await AppEnvCheck.deviceHasInternet;
  let result = '';
  if (hasInternet) {
    await axios
      .get(
        `https://api.themoviedb.org/` +
          Api.GET_SEARCH_MOVIE +
          `?api_key=${AppConfig.apiKey}&query=${query}`,
      )
      .then((res) => {
        const is200 = httpStatusChecker(res.status);
        if (is200) {
          const data = res.data;
          result = data;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    Alert.alert(
      'Device has no access to internet. Please try again after connected with Internet.',
    );
  }
  return result;
};

const getMovieActors = async (movieID) => {
  const updatedEndpoint = Api.GET_MOVIE_ACTORS.replace(
    'replaceWithMovieID',
    movieID,
  );
  const hasInternet = await AppEnvCheck.deviceHasInternet;
  let result = '';
  if (hasInternet) {
    await axios
      .get(
        `https://api.themoviedb.org/` +
          updatedEndpoint +
          `?api_key=${AppConfig.apiKey}`,
      )
      .then((res) => {
        const is200 = httpStatusChecker(res.status);
        if (is200) {
          const data = res.data;
          result = data;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    Alert.alert(
      'Device has no access to internet. Please try again after connected with Internet.',
    );
  }
  return result;
};

const getMovieDetails = async (movieID) => {
  const updatedEndpoint = Api.GET_MOVIE_DETAILS.replace(
    'replaceWithMovieID',
    movieID,
  );
  const hasInternet = await AppEnvCheck.deviceHasInternet;
  let result = '';
  if (hasInternet) {
    await axios
      .get(
        `https://api.themoviedb.org/` +
          updatedEndpoint +
          `?api_key=${AppConfig.apiKey}`,
      )
      .then((res) => {
        const is200 = httpStatusChecker(res.status);
        if (is200) {
          const data = res.data;
          result = data;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } else {
    Alert.alert(
      'Device has no access to internet. Please try again after connected with Internet.',
    );
  }
  return result;
};

export {
  getAllMovies,
  getAllGenre,
  getSearchMovie,
  getMovieActors,
  getMovieDetails,
};
