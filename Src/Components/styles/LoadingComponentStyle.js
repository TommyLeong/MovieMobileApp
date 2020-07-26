import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
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
