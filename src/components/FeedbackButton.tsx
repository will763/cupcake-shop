import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import IconComments from './IconComments';

export default function() {
  const navigation = useNavigation();


  function toFeedback(){
    navigation.navigate('feedback')
  }


  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={toFeedback}
    >
      <IconComments />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    zIndex:2,
    elevation:8,
    bottom:30,
    right:30,
    backgroundColor: '#00FFFF',
    width:64, 
    height:64,
    borderRadius: 100,
    alignItems:'center',
    justifyContent: 'center'
  }
});