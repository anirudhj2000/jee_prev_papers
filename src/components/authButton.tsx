import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface AuthButtonInterface {
  title: string;
  source: ImageSourcePropType;
  onPress: () => void;
}

const AuthButton = ({title, source, onPress}: AuthButtonInterface) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '3.5%',
        borderRadius: 8,
      }}>
      <Image source={source} style={{height: 24, width: 24}} />
      <Text style={{fontSize: 14, marginLeft: '5%'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
