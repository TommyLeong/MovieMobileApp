import React, {Component} from 'react';
import {View, Text, SafeAreaView, FlatList, ScrollView} from 'react-native';
import * as ApiManager from '../Services/ApiManager';
import styles from './Styles/HomepageStyle';
import MovieCard from '../Components/MovieCard';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      page: 1,
    };
  }
  async componentDidMount() {
    const data = await ApiManager.getAllMovies(this.state.page);
    this.setState({
      data: data.results,
    });
  }

  renderItem = (movies) => {
    // console.log('item');
    // console.log(item);
    // console.log(item.title);
    // return
    return movies.map((movie) => {
      return <MovieCard poster={movie.poster_path} movieName={movie.title} />;
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.cxntainer}>
        <ScrollView>
          {/* <Text>Hello Homepage</Text> */}
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {/* <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            /> */}
            {this.renderItem(this.state.data)}
          </View>
          {/* <Text>End</Text> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Homepage;
