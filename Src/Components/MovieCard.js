import React from 'react';
import styles from './styles/MovieCardStyle';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Api from '../Services/Api';

const MovieCard = (props) => {
  const navigation = props.routing.navigation;
  return (
    <View style={styles.container} key={props.key}>
      <TouchableOpacity
        style={{width: 'auto', backgroundColor: 'red'}}
        onPress={() => {
          navigation.navigate('MovieDetails');
        }}>
        <View style={styles.body}>
          <Image
            style={{width: 150, height: 250}}
            source={{
              uri: `${Api.IMAGE_DOMAIN}${props.poster}`,
            }}
          />
          <Text style={{textAlign: 'center'}}>{props.movieName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
