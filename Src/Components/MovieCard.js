import React from 'react';
import styles from './styles/MovieCardStyle';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Api from '../Services/Api';
import {ImageCheck} from '../Helpers/ImageCheck';

const MovieCard = (props) => {
  const navigation = props.routing.navigation;
  const imagePath = ImageCheck(props.poster);
  return (
    <View style={styles.container} key={props.movieID}>
      <TouchableOpacity
        style={{width: 'auto'}}
        onPress={() => {
          navigation.navigate('MovieDetails', {movieID: props.movieID});
        }}>
        <View style={styles.body}>
          <Image style={{width: 150, height: 250}} source={imagePath} />
          <Text
            style={{
              textAlign: 'center',
              paddingTop: 5,
              color: 'rgba(57, 58, 63, 1)',
              fontWeight: '400',
            }}>
            {props.movieName}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
