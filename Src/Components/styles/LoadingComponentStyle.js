import {StyleSheet} from 'react-native';
import AppConfig from '../../Configs/AppConfig';

export default StyleSheet.create({
  container: {
    height: AppConfig.mobileHeight,
    width: AppConfig.mobileWidth,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 1,
    position: 'absolute',
  },
  lottieFile: {
    alignSelf: 'center',
    height: 100,
    width: 100,
    zIndex: 1,
  },
});
