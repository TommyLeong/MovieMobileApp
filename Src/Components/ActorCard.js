import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles/ActorCardStyle';
import Api from '../Services/Api';
import {ImageCheck} from '../Helpers/ImageCheck';

const ActorCard = (props) => {
  const {item} = props.actorInfo;
  const imagePath = ImageCheck(item.profile_path);
  const roleName = item.character ? item.character : 'N/A';
  return (
    <View style={styles.container}>
      <View style={styles.actorCardBody}>
        <Image style={{width: 100, height: 150}} source={imagePath} />
        <View style={styles.actorCardBodyDetails}>
          <Text style={styles.actorCardBodyTitle}>Actor Name</Text>
          <Text>{item.name}</Text>

          <Text style={styles.actorCardBodyTitle}>Role Name</Text>
          <Text>{roleName}</Text>
        </View>
      </View>
    </View>
  );
};

export default ActorCard;
