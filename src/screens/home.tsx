import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import {RootScreenStackProps} from '../utils/types';
import {colors} from '../utils/colors';
import {ExamYearsData} from '../utils/consts';
import Accordion from '../components/accordion';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}: RootScreenStackProps<'Home'>) => {
  const [refresh, setRefresh] = React.useState(false);
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.backgroundPrimary,
        height: height,
        display: 'flex',
        flexDirection: 'column',
      }}>
      <View style={{width: width * 0.95, marginHorizontal: '2.5%'}}>
        <FlatList
          data={ExamYearsData}
          style={{height: height * 0.9}}
          keyExtractor={(item, index) => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <View>
                <Accordion
                  visible={refresh}
                  title={'Title'}
                  description={'Description'}
                  toggleButton={() => {
                    setRefresh(!refresh);
                  }}
                />
              </View>
            );
          }}
          ListHeaderComponent={() => {
            return (
              <View style={{height: height * 0.15, marginTop: '2.5%'}}>
                <Image
                  style={{
                    height: height * 0.1,
                    width: width * 0.8,
                    marginHorizontal: '10%',
                  }}
                  source={require('../assets/logo.png')}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
