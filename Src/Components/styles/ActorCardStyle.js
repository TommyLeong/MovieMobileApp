import {StyleSheet} from 'react-native';
import AppConfig from '../../Configs/AppConfig';

export default StyleSheet.create({
  container: {
    backgroundColor: AppConfig.themeColor,
    marginTop: 5,
  },
  actorCardBody: {
    display: 'flex',
    flexDirection: 'row',
  },
  actorCardBodyDetails: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
  actorCardBodyTitle: {
    paddingTop: 15,
    textAlign: 'left',
    fontWeight: '500',
    fontSize: AppConfig.subtitle,
  },
});
