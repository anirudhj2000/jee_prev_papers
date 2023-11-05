import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Challenges from '../screens/challenges';
import Profile from '../screens/profile';
import {MainStackProps} from '../utils/types';
import Icon from 'react-native-vector-icons/Entypo';

const {height, width} = Dimensions.get('window');
const MainAppStack = createBottomTabNavigator<MainStackProps>();

const MainAppStackNavigator = () => {
  return (
    <MainAppStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: height * 0.075,
          marginHorizontal: '5%',
          marginBottom: '2.5%',
          borderRadius: 8,
        },
      }}>
      <MainAppStack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '10%',
                }}>
                <Icon name="open-book" size={size} />
                <Text style={{color: '#000', fontSize: 12}}>Exams</Text>
              </View>
            );
          },
        }}
      />
      <MainAppStack.Screen
        name="Challenges"
        component={Challenges}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '10%',
                }}>
                <Icon name="trophy" size={size} />
                <Text style={{color: '#000', fontSize: 12}}>Challenges</Text>
              </View>
            );
          },
        }}
      />
      <MainAppStack.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused, color, size}) => {
            return (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '10%',
                }}>
                <Icon name="user" size={size} />
                <Text style={{color: '#000', fontSize: 12}}>Profile</Text>
              </View>
            );
          },
        }}
      />
    </MainAppStack.Navigator>
  );
};

export default MainAppStackNavigator;
