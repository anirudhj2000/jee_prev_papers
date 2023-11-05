import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  ReduceMotion,
} from 'react-native-reanimated';
// import Icon from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

interface AccordionInterface {
  visible: boolean;
  title: string;
  sessionsList: Array<any>;
  toggleButton: () => void;
}

const Accordion = ({
  visible,
  title,
  toggleButton,
  sessionsList,
}: AccordionInterface) => {
  const sharedValue = useSharedValue(0);
  const [bodyHeightValue, setBodyHeight] = React.useState(0);

  const bodyHeight = useAnimatedStyle(() => {
    return {
      height: interpolate(sharedValue.value, [0, 1], [0, bodyHeightValue]),
    };
  });

  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(sharedValue.value, [0, 1], [0, 90])}deg`,
        },
      ],
    };
  });

  useEffect(() => {
    if (!visible) {
      sharedValue.value = withTiming(0, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        reduceMotion: ReduceMotion.System,
      });
    } else {
      sharedValue.value = withTiming(1, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        reduceMotion: ReduceMotion.System,
      });
    }
  }, [visible]);

  return (
    <View style={styles.subContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.btnStyle}
        onPress={toggleButton}>
        <Text style={styles.title}>{title}</Text>
        <Animated.View style={iconStyle}>
          {/* <Icon name="right" size={30} style={iconStyle} color="#4F8EF7" /> */}
        </Animated.View>
      </TouchableOpacity>

      <Animated.View style={[styles.descStyle, bodyHeight]}>
        <View
          style={styles.bodyContainer}
          onLayout={event => {
            setBodyHeight(event.nativeEvent.layout.height);
          }}>
          {sessionsList.map(item => {
            return (
              <TouchableOpacity
                style={{
                  display: 'flex',
                  paddingHorizontal: '2.5%',
                  paddingVertical: '1%',
                  backgroundColor: '#c7c7c7',
                  marginRight: '2.5%',
                  borderRadius: 16,
                  marginBottom: '2%',
                }}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  subContainer: {
    backgroundColor: 'white',
    paddingHorizontal: '3.5%',
    paddingVertical: '1.5%',
    marginBottom: 6,
    flex: 1,
  },
  svgStyle: {
    width: 20,
    height: 20,
  },
  descStyle: {
    overflow: 'hidden',
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
  bodyContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});
