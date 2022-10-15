import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  Easing,
} from 'react-native-reanimated';


export default function(){

  const rotation = useSharedValue(0);
 
  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1
    );
    return () => cancelAnimation(rotation);
  }, []);


  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);

  return (
      <View>
        <Animated.View style={[styles.spinner, animatedStyles]} />
      </View>
    )
}

const styles = StyleSheet.create({
  constainer: {
    flex:1 ,
    backgroundColor:'blue'
  },
  spinner: {
    height: 40,
    width: 40,
    borderRadius: 30,
    borderWidth: 7,
    borderTopColor: '#f0f',
    borderRightColor: '#f5f5f5',
    borderBottomColor: '#f5f5f5',
  },
});

