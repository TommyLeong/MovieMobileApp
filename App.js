/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Homepage from './Src/Containers/Homepage';
import createStore from './Src/Redux/Reducers';

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
};

export default App;