import React from 'react';
import styles from './styles/MovieCardStyle';
import {View, Text, TouchableOpacity, Image} from 'react-native';
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
          <Image style={styles.movieCardImg} source={imagePath} />
          <Text style={styles.movieCardText}>{props.movieName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
