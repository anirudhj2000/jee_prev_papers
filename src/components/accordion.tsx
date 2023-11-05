import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  ReduceMotion,
} from 'react-native-reanimated';

interface AccordionInterface {
  visible: boolean;
  title: string;
  description: string;
  toggleButton: () => void;
}

const Accordion = ({
  visible,
  title,
  description,
  toggleButton,
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
        duration: 1000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
        reduceMotion: ReduceMotion.System,
      });
    } else {
      sharedValue.value = withTiming(1, {
        duration: 1000,
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
          <Image
            source={require('../assets/googlelogo.png')}
            style={{height: 24, width: 24}}
          />
        </Animated.View>
      </TouchableOpacity>

      <Animated.View style={[styles.descStyle, bodyHeight]}>
        <View
          style={styles.bodyContainer}
          onLayout={event => {
            setBodyHeight(200);
          }}>
          <Text>{description}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  btnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  subContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    marginBottom: 6,
    flex: 1,
    borderRadius: 10,
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
  },
  bodyContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    paddingBottom: 20,
  },
});
