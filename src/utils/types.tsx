import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootScreenProps = {
  Login: undefined;
  Home: undefined;
};

export type RootScreenStackProps<T extends keyof RootScreenProps> =
  NativeStackScreenProps<RootScreenProps, T>;
