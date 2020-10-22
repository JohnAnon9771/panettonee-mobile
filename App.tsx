/* eslint-disable global-require */
/* eslint-disable react/style-prop-object */
import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '@shopify/restyle';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes';
import { theme } from './src/styles';

const App: React.FC = () => {
  const [loaded] = useFonts({
    'Roboto-thin': require('./src/assets/fonts/Roboto/Roboto-Thin.ttf'),
    'Roboto-regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-medium': require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
    'Roboto-black': require('./src/assets/fonts/Roboto/Roboto-Black.ttf'),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
};

export default App;
