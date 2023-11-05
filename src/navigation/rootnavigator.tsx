import React from 'react';
import Login from '../screens/login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootScreenProps} from '../utils/types';
import MainAppStackNavigator from './mainStack';
import {colors} from '../utils/colors';

const MainStack = createNativeStackNavigator<RootScreenProps>();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.backgroundPrimary,
        },
      }}>
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="MainStack" component={MainAppStackNavigator} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
