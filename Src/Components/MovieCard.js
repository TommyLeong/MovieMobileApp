import React from 'react';
import styles from './styles/MovieCardStyle';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Api from '../Services/Api';

const MovieCard = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{width: 'auto', backgroundColor: 'red'}}
        onPress={() => {
          console.log(props.movieName);
        }}>
        <View style={styles.body}>
          <Image
            style={{width: 150, height: 250}}
            source={{
              uri: `${Api.IMAGE_DOMAIN}${props.poster}`,
            }}
          />
          {/* <View style={{width: 200}}> */}
          <Text style={{textAlign: 'center'}}>{props.movieName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MovieCard;
