import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {RootScreenStackProps} from '../utils/types';
import AuthButton from '../components/authButton';
import {colors} from '../utils/colors';

const {height, width} = Dimensions.get('window');

const Login = ({navigation}: RootScreenStackProps<'Login'>) => {
  return (
    <SafeAreaView
      style={{
        height: height,
        backgroundColor: colors.backgroundPrimary,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{height: height * 0.15}}>
        <Image
          style={{height: height * 0.15, width: width}}
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: width * 0.8,
            marginVertical: '5%',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 1,
              borderBottomWidth: 1,
              borderColor: colors.lightGrey,
              width: '35%',
            }}
          />
          <Text style={{color: colors.lightGrey, fontStyle: 'italic'}}>
            Login with
          </Text>
          <View
            style={{
              height: 1,
              borderBottomWidth: 1,
              borderColor: colors.lightGrey,
              width: '35%',
            }}
          />
        </View>
        <View style={{width: width * 0.8}}>
          <AuthButton
            source={require('../assets/googlelogo.png')}
            title={'Sign in with google'}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
