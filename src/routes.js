import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import TestarCamera from './screens/TestarCamera';
import TestarCalendario from './screens/TestarCalendario';
import TestarGraficos from './screens/TestarGraficos';
import TestFormLogin from './screens/TestFormLogin';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TestarCamera" component={TestarCamera} />
        <Stack.Screen name="TestarCalendario" component={TestarCalendario} />
        <Stack.Screen name="TestarGraficos" component={TestarGraficos} />
        <Stack.Screen name="TestFormLogin" component={TestFormLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
