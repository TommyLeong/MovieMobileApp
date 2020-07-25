import NetInfo from '@react-native-community/netinfo';

const deviceHasInternet = async () => {
  return await NetInfo.isConnected.fetch();
};

export {deviceHasInternet};
