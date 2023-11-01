import React from 'react';
import Login from '../screens/login';
import Home from '../screens/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootScreenProps} from '../utils/types';

const MainStack = createNativeStackNavigator<RootScreenProps>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
