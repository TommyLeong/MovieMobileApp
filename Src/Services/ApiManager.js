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

const getAllMovie = async () => {
  const hasInternet = await AppEnvCheck.deviceHasInternet;
  if (hasInternet) {
    axios
      .get(
        EnvConfig.DOMAIN_URL +
          Api.GET_MOVIE_LIST +
          `?api_key=${AppConfig.apiKey}`,
      )
      .then((res) => {
        const is200 = httpStatusChecker(res.status);
        if (is200) {
          const data = res.data;
          console.log(data);
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
};

export {getAllMovie};
