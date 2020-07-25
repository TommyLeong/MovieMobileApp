import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppConfig from '../Configs/AppConfig';

import Homepage from '../Containers/Homepage';
import MovieDetails from '../Containers/MovieDetails';
import ActorProfile from '../Containers/ActorProfile';

const Stack = createStackNavigator();

const ChatFlow = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator name="movie">
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: AppConfig.themeColor,
            },
          }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: AppConfig.themeColor,
            },
          }}
        />

        <Stack.Screen
          name="ActorProfile"
          component={ActorProfile}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: AppConfig.themeColor,
            },
          }}
          //   options={{title: 'Group Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainStackNavigator = () => {
  return ChatFlow();
};

export default MainStackNavigator;
