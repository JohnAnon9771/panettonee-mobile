/* eslint-disable react/style-prop-object */
import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes';

const App: React.FC = () => (
  <>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    <StatusBar style="auto" />
  </>
);

export default App;
