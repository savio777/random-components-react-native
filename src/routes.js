import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import TestarCamera from './screens/TestarCamera';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TestarCamera" component={TestarCamera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
