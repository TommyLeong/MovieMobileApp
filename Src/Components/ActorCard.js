import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles/ActorCardStyle';
import Api from '../Services/Api';

const ActorCard = (props) => {
  const {item} = props.actorInfo;
  return (
    <View style={styles.container}>
      <View style={styles.actorCardBody}>
        <Image
          style={{width: 100, height: 150}}
          source={{
            uri: `${Api.IMAGE_DOMAIN}${item.profile_path}`,
          }}
        />
        <View style={styles.actorCardBodyDetails}>
          <Text style={styles.actorCardBodyTitle}>Actor Name</Text>
          <Text>{item.name}</Text>

          <Text style={styles.actorCardBodyTitle}>Role Name</Text>
          <Text>{item.character}</Text>
        </View>
      </View>
    </View>
  );
};

export default ActorCard;
