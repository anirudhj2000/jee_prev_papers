import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootScreenProps = {
  Login: undefined;
  MainStack: {screen: string} | undefined;
};

export type RootScreenStackProps<T extends keyof RootScreenProps> =
  NativeStackScreenProps<RootScreenProps, T>;

export type MainStackProps = {
  Home: undefined;
  Challenges: undefined;
  Profile: undefined;
};

export type MainStackScreenProps<T extends keyof MainStackProps> =
  NativeStackScreenProps<MainStackProps, T>;
