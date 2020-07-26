import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    paddingTop: 5,
    display: 'flex',
    alignItems: 'center',
  },
  movieListView: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
