import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import Setting from './Settings';
import Login from './Login';
import Splash from './Splash';
import Signup from './Signup';
import HomeMain from './HomeMain';

export type RootStackParamsList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  HomeMain: undefined;
  // Home: undefined;
  // Setting: {
  //   name: string;
  //   email: string;
  // };
};

const Stack = createStackNavigator<RootStackParamsList>();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        /> */}
        {/* <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: '',
          }}
        /> */}
        <Stack.Screen
          name="HomeMain"
          component={HomeMain}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Setting" component={Setting} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
