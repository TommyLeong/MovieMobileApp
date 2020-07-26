import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  Keyboard,
  Alert,
} from 'react-native';
import * as ApiManager from '../Services/ApiManager';
import styles from './Styles/HomepageStyle';
import MovieCard from '../Components/MovieCard';
import {SearchBar} from 'react-native-elements';
import Loading from '../Components/LoadingComponent';
import {connect} from 'react-redux';
import {getAllMovies} from '../Redux/Actions';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      search: '',
      completeLoading: false,
    };
  }
  componentDidMount() {
    this.getAllMoviesFromAPI();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.movieList && !prevProps.movieList) {
      const newData = this.state.data;
      this.props.movieList.results.map((result) => {
        newData.push(result);
      });
      this.setState((prevState) => ({
        data: newData,
        completeLoading: true,
        page: prevState.page + 1,
      }));
    }
  };

  getAllMoviesFromAPI = () => {
    // const data = await ApiManager.getAllMovies(this.state.page);
    this.props.getAllMovies(this.state.page);
  };

  isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 1500;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  renderMovieList = (movies) => {
    console.log(movies);
    if (movies !== undefined) {
      if (movies.length <= 0) {
        return (
          <View>
            <Text>No movie found</Text>
          </View>
        );
      }
      return movies.map((movie) => {
        return (
          <MovieCard
            poster={movie.poster_path}
            movieName={movie.title}
            movieID={movie.id}
            routing={this.props}
          />
        );
      });
    }
    if (this.props.movieList !== null) {
      return this.renderAlertBox();
    }
  };

  updateSearch = (search) => {
    this.setState({
      search,
    });
  };

  searchMovie = () => {
    this.setState(
      {
        completeLoading: false,
      },
      async () => {
        let data = [];
        if (this.state.search.length > 0) {
          data = await ApiManager.getSearchMovie(this.state.search);
        } else {
          data = await ApiManager.getAllMovies(this.state.page);
        }
        this.setState({
          data: data.results,
          completeLoading: true,
        });
      },
    );
  };

  rennderTitle = () => {
    if (!this.state.search) {
      return <Text style={{fontWeight: 'bold'}}>Current Trending</Text>;
    }
  };

  renderLoading = () => {
    if (!this.state.completeLoading) {
      return <Loading />;
    }
  };

  renderAlertBox = () => {
    Alert.alert(
      'Error',
      'We are sorry, there are some issues with the application. Please try again.',
      [
        {
          text: 'Retry',
          onPress: () => this.getAllMoviesFromAPI(),
        },
      ],
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderLoading()}
        <SearchBar
          lightTheme
          placeholder="Search Movie..."
          onChangeText={this.updateSearch}
          value={this.state.search}
          onSubmitEditing={this.searchMovie}
          onClear={this.getAllMoviesFromAPI}
        />
        <ScrollView
          onScroll={({nativeEvent}) => {
            Keyboard.dismiss();
            if (this.isCloseToBottom(nativeEvent)) {
              this.props.getAllMovies(this.state.page);
            }
          }}
          scrollEventThrottle={400}>
          <View
            style={{
              paddingTop: 5,
              display: 'flex',
              alignItems: 'center',
            }}>
            {this.rennderTitle()}
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {this.renderMovieList(this.state.data)}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = ({general}) => ({
  movieList: general.movieList,
});

export default connect(mapStateToProps, {
  getAllMovies,
})(Homepage);
