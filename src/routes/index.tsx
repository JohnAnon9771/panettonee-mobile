import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';

const Stack = createStackNavigator();

export const Routes: React.FC = () => (
  <Stack.Navigator initialRouteName="home">
    <Stack.Screen name="home" component={Home} />
  </Stack.Navigator>
);
