import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles/LoadingComponentStyle';

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../loadingLottie.json')}
        autoPlay
        loop
        resizeMode="cover"
        style={styles.lottieFile}
      />
    </View>
  );
};

export default LoadingComponent;
