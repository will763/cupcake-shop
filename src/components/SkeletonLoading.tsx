import { Props } from '@react-navigation/elements/lib/typescript/src/PlatformPressable';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View , Animated} from 'react-native';

interface SkeletonProps {
  width?: string | number
  height?: string | number
  maxWidth?:string | number
  marginTop?:string | number
  borderRadius?:number
}

export default function({width,height,maxWidth,marginTop, borderRadius}:SkeletonProps){
  const opacity = useRef(new Animated.Value(0.3))

  useEffect(()=>{
   Animated.loop(
    Animated.sequence([
      Animated.timing(opacity.current, {
        toValue:1,
        useNativeDriver:true,
        duration: 500
      }),
      Animated.timing(opacity.current, {
        toValue:1,
        useNativeDriver:true,
        duration: 500
      })
    ])).start();

  }, [opacity])

  return <Animated.View style={[{opacity:opacity.current,width:width ? width : '30%',height: height ? height : 100, maxWidth: maxWidth ? maxWidth : 110, marginTop: marginTop ? marginTop : 0, borderRadius: borderRadius ? borderRadius : 6 }, styles.skeleton]} />
}

const styles = StyleSheet.create({
   skeleton: {
    backgroundColor:'#B2BEB5',
    marginBottom:15,
    elevation:8,
    marginRight:'3.3%'
   }
})