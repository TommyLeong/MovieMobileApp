import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import * as ApiManager from '../Services/ApiManager';
import axios from 'axios';
import Api from '../Services/Api';
import styles from './Styles/MovieDetailsStyle';
import ActorCard from '../Components/ActorCard';
import {ScrollView} from 'react-native-gesture-handler';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responseActors: {},
      responseDetails: {},
    };
  }

  componentDidMount() {
    const {movieID} = this.props.route.params;
    axios
      .all([
        ApiManager.getMovieActors(movieID),
        ApiManager.getMovieDetails(movieID),
      ])
      .then(
        axios.spread((...responses) => {
          this.setState({
            responseActors: responses[0],
            responseDetails: responses[1],
          });
        }),
      )
      .catch((errors) => {
        console.log(errors);
      });
  }

  renderMovieDetails = () => {
    return (
      <View style={styles.movieInformation}>
        <Text style={[styles.detailsInfoHeader, {fontSize: 20}]}>
          {this.state.responseDetails.original_title}
        </Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text>{this.state.responseDetails.original_language} | </Text>
          <Text>{this.state.responseDetails.runtime} minutes | </Text>
          <Text>{this.state.responseDetails.release_date}</Text>
        </View>
        <Text style={[styles.detailsInfoHeader, {paddingTop: 10}]}>
          Synopsis
        </Text>
        <Text>{this.state.responseDetails.overview}</Text>
      </View>
    );
  };

  renderActors = () => {
    if (this.state.responseActors.cast === undefined) return <View />;

    const allActors = this.state.responseActors.cast;
    return (
      <View style={styles.actorInfomration}>
        <Text style={styles.detailsInfoHeader}>Cast</Text>
        {allActors.map((actor) => {
          return <Text>{actor.name}</Text>;
        })}
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={{width: 'auto', height: 200}}
            source={{
              uri: `${Api.IMAGE_DOMAIN}${this.state.responseDetails.backdrop_path}`,
            }}
          />
          {this.renderMovieDetails()}
          {this.renderActors()}
        </View>
      </ScrollView>
    );
  }
  x;
}

export default MovieDetails;
