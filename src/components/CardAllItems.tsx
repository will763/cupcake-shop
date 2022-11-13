import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  id: number
  url:string
}


export default function({id,url}: Props) {
  const [overlay,setOverlay] = useState(false);

  const navigation = useNavigation();

  function handleClick(){
    navigation.navigate('Product',{
      id: id,
    }); 
  }
  
  
  return (
    <Pressable 
     accessibilityLabel='card-wrapper'
     style={style.card} 
     onPressIn={() => setOverlay(true)}
     onPressOut={() => setOverlay(false)}
     onPress={handleClick}
    >
      { overlay ? <View style={style.overlay} /> : null}
      <Image 
       style={style.image} 
       source={{uri:url}}  
       />
    </Pressable>
  )
}

const style = StyleSheet.create({
  card: {
    width:'30%',
    maxWidth:110,
    height:100, 
    marginBottom:15,
    backgroundColor: '#B2BEB5',
    elevation:8,
    borderColor:'#2f2f2f2f',
    borderWidth:1,
    borderRadius: 6,
    marginRight:'3.3%',
  },
  image: {
    width:'100%',
    height:'100%',
    resizeMode:'cover',
    borderRadius:5,
  },
  overlay: {
    position:'absolute' ,
    width:'100%',
    height:'100%',
    borderRadius:5,
    backgroundColor:'black',
    zIndex:1,
    opacity:.4,
  }
})