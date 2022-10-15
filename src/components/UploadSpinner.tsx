import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';

interface Props {
    uploading: boolean;
}

export default function({uploading}:Props) {
  return (
    <Modal transparent={true} visible={uploading}  style={styles.container} >
      <View style={styles.background} >
       <Progress.Pie progress={1} indeterminate={uploading} size={140}  />
      </View>
     </Modal>
  );
}

const styles = StyleSheet.create({
    container: {
      position:'absolute', 
      zIndex:2, 
      top:0, 
      right:0, 
      left:0, 
      bottom:0
    },
    background: {
      position:'absolute',
      backgroundColor:'#0000003f',
      alignItems:'center',
      justifyContent:'center', 
      top:0, 
      right:0, 
      left:0, 
      bottom:0,
      zIndex:3, 
    },
})