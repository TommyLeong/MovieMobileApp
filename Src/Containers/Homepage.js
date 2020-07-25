import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  Keyboard,
} from 'react-native';
import * as ApiManager from '../Services/ApiManager';
import styles from './Styles/HomepageStyle';
import MovieCard from '../Components/MovieCard';
import {SearchBar} from 'react-native-elements';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
      search: '',
    };
  }
  async componentDidMount() {
    this.getAllMoviesFromAPI();
  }

  getAllMoviesFromAPI = async () => {
    const data = await ApiManager.getAllMovies(this.state.page);
    this.setState({
      data: data.results,
    });
  };

  renderMovieList = (movies) => {
    if (movies === undefined) return <View />;
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
  };

  updateSearch = (search) => {
    this.setState({
      search,
    });
  };

  searchMovie = async () => {
    let data = [];
    if (this.state.search.length > 0) {
      data = await ApiManager.getSearchMovie(this.state.search);
      console.log(data);
    } else {
      data = await ApiManager.getAllMovies(this.state.page);
    }
    this.setState({
      data: data.results,
    });
  };

  renderTitle = () => {
    if (!this.state.search) {
      return <Text style={{fontWeight: 'bold'}}>Current Trending</Text>;
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          lightTheme
          placeholder="Search Movie..."
          onChangeText={this.updateSearch}
          value={this.state.search}
          onSubmitEditing={this.searchMovie}
          onClear={this.getAllMoviesFromAPI}
        />
        <ScrollView
          onScroll={() => {
            Keyboard.dismiss();
          }}>
          <View
            style={{
              paddingTop: 5,
              display: 'flex',
              alignItems: 'center',
            }}>
            {this.renderTitle()}
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

export default Homepage;
