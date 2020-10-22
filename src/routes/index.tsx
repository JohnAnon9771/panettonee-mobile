import React from 'react';

import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { theme } from '../styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabBottom: React.FC = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      showLabel: false,
      activeTintColor: theme.colors.primary,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Revenue"
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="book-open" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Shopping"
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="shopping-bag" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Bookmarks"
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => (
          <Feather name="bookmark" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Recommendations"
      component={Home}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons
            name="notifications-none"
            size={size + 4}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export const Routes: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Home" component={TabBottom} />
    <Stack.Screen name="Details" component={Home} />
  </Stack.Navigator>
);
