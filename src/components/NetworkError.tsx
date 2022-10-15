import React from 'react';
import { View } from 'react-native';

import LottieView from 'lottie-react-native';

export default function() {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <LottieView
        source={require('../assets/icons/112949-no-internet-connection.json')}
        autoPlay={true}
        style={{width:200,height:300}}
       /> 
    </View>
  );
}