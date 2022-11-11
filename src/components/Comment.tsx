import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 


interface Props {
    text: string
}

export default function({text}:Props) {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
       <FontAwesome name="user-circle-o" size={32} color="black" />
      </View>
      <Text style={styles.text} >{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginBottom:20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    photo: {
        alignSelf:'flex-start',
        width:38,
        height:38,
        backgroundColor:'white',
        borderRadius: 100,
        alignItems:'center',
        justifyContent: 'center'
    },
    text: {
        marginLeft:10,
        color:'white' ,
        fontSize:12,
        width:'81%',
        fontFamily:'Poppins-Regular',
        lineHeight:15,
    }
})