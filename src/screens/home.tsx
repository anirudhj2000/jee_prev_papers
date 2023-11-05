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
import React, {useEffect} from 'react';
import {RootScreenStackProps, MainStackScreenProps} from '../utils/types';
import {colors} from '../utils/colors';
import {ExamYearsData} from '../utils/consts';
import Accordion from '../components/accordion';
import Icon from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}: MainStackScreenProps<'Home'>) => {
  const [refresh, setRefresh] = React.useState(false);
  const [examList, setExamList] = React.useState<Array<any>>([]);

  useEffect(() => {
    setExamList(ExamYearsData);
  }, []);

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
          data={examList}
          style={{height: height * 0.95}}
          keyExtractor={(item, index) => index.toString()}
          stickyHeaderIndices={[0]}
          renderItem={({item, index}) => {
            return (
              <Accordion
                key={index}
                visible={item.visible}
                title={item.year + ' #' + (index + 1)}
                toggleButton={() => {
                  let list = [...examList];
                  list[index].visible = !list[index].visible;
                  setExamList([...list]);
                }}
                sessionsList={item.examSessions}
              />
            );
          }}
          ListHeaderComponent={() => {
            return (
              <View
                style={{
                  height: height * 0.15,
                  zIndex: 10,
                  backgroundColor: colors.backgroundPrimary,
                }}>
                <Image
                  style={{
                    height: height * 0.1,
                    width: width * 0.8,
                    marginHorizontal: '10%',
                    marginTop: '2.5%',
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
