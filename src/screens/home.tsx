import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {RootScreenStackProps} from '../utils/types';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}: RootScreenStackProps<'Home'>) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
