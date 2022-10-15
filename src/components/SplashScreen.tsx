import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Modal, StyleSheet, View } from 'react-native';

export default function() {
  return (
    <>
    <StatusBar backgroundColor='#fff' translucent />
    <Modal style={styles.container}>
      <View style={styles.background}>
        <Image style={styles.tinyLogo} source={require('../../assets/favicon.png')} resizeMode='cover' />
      </View>
    </Modal>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      position:'absolute',
      top:0 ,
      left:0,
      right:0 ,
      bottom:0 ,
    },
    background: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
    tinyLogo: {
      width:60,
      height:60
    }
})