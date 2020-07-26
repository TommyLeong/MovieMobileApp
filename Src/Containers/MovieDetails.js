import React, {Component} from 'react';
import {View, Text, Image, FlatList, Alert} from 'react-native';
import * as ApiManager from '../Services/ApiManager';
import axios from 'axios';
import Api from '../Services/Api';
import styles from './Styles/MovieDetailsStyle';
import ActorCard from '../Components/ActorCard';
import {ScrollView} from 'react-native-gesture-handler';
import AppConfig from '../Configs/AppConfig';
import Loading from '../Components/LoadingComponent';
import {ImageCheck} from '../Helpers/ImageCheck';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      responseActors: {},
      responseDetails: {},
      completeLoading: false,
      movieID: '',
    };
  }

  componentDidMount() {
    const {movieID} = this.props.route.params;
    this.setState(
      {
        movieID,
      },
      () => {
        this.fireAPI();
      },
    );
  }

  fireAPI = () => {
    axios
      .all([
        ApiManager.getMovieActors(this.state.movieID),
        ApiManager.getMovieDetails(this.state.movieID),
      ])
      .then(
        axios.spread((...responses) => {
          console.log(responses);
          this.setState({
            responseActors: responses[0],
            responseDetails: responses[1],
            completeLoading: true,
          });
        }),
      )
      .catch((errors) => {
        this.setState(
          {
            completeLoading: true,
          },
          () => {
            this.renderAlertBox();
          },
        );
        console.log(errors);
        console.log(errors);
      });
  };

  renderMovieDetails = () => {
    return (
      <View style={styles.movieInformation}>
        <Text style={[styles.detailsInfoHeader, {fontSize: AppConfig.title}]}>
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
    console.log(allActors);
    return (
      <View style={styles.actorInfomration}>
        <Text style={styles.detailsInfoHeader}>Cast</Text>
        {/* {allActors.map((actor) => {
          return <Text>{actor.name}</Text>;
        })} */}
        <FlatList
          data={allActors}
          renderItem={(actor) => {
            // console.log(actor);
            // return <Text>{actor.item.name}</Text>;
            return <ActorCard actorInfo={actor} />;
          }}
          // keyExtractor={all}
        />
      </View>
    );
  };

  renderLoading = () => {
    if (!this.state.completeLoading) {
      return <Loading />;
    }
  };

  renderAlertBox = () => {
    Alert.alert(
      'Error',
      'We are sorry, there are some issues with the application. Please try again later.',
      [
        {
          text: 'Back',
          onPress: () => {
            this.props.navigation.goBack();
          },
        },
        {
          text: 'Retry',
          onPress: () => console.log(this.fireAPI()),
        },
      ],
    );
  };

  render() {
    const imagePath = ImageCheck(this.state.responseDetails.backdrop_path);

    return (
      <View>
        {this.renderLoading()}
        <ScrollView>
          <View style={styles.container}>
            <Image style={{width: 'auto', height: 200}} source={imagePath} />
            {this.renderMovieDetails()}
            {this.renderActors()}
          </View>
        </ScrollView>
      </View>
    );
  }
  x;
}

export default MovieDetails;
