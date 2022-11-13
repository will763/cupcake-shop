import React, { useEffect, useRef, useState } from 'react';
import { Modal, View, StyleSheet, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import LottieView from 'lottie-react-native';


interface Props {
    isVisible: boolean;
    cancel: () => void;
}


export default function({isVisible, cancel}: Props) {
  const [payStatus,setPayStatus] = useState<'pendind' | 'success' | null>();

  function buy(){
    setPayStatus('pendind');

    const id = setTimeout(()=> {
      setPayStatus('success');
      const id = setTimeout(()=> {
        setPayStatus(null);
        cancel();
      },1800);

      return () => clearTimeout(id);
    },2300)

    return () => clearTimeout(id);
  }

  return (
     <Modal visible={isVisible} transparent={true} style={styles.container}>
      <View style={styles.background}>
       <View style={styles.content}>
        <View style={styles.header}>
            <AntDesign 
             style={styles.iconClose} 
             name="close" size={24} 
             color="black" 
             onPress={cancel}
             disabled={payStatus === 'pendind' || payStatus === 'success' ? true : false}
            />
            <Text style={styles.title} >Payment</Text>
        </View>
        <View style={styles.options}>
          { payStatus ?
            payStatus === 'pendind' ?
            <LottieView
              source={require('../assets/icons/load.json')}
              autoPlay={true}
            /> 
            :
           <LottieView
              source={require('../assets/icons/loader.json')}
              autoPlay={true}
              loop={false}
              duration={1000}
            />
            :
            <View style={[styles.options, {backgroundColor: payStatus !== null ? 'white' : "#50C878"}]}>
            <TouchableOpacity accessibilityLabel='payment-credit' onPress={buy} style={styles.fieldOption} >
             <Text style={styles.textOption}>Credit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={buy} style={styles.fieldOption} >
             <Text style={styles.textOption} >Debit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={buy} style={styles.lastFieldOption} >
             <Text style={styles.textOption} >Real</Text>
            </TouchableOpacity>
            </View>
            }
        </View>    
       </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      position:'absolute',
      zIndex: 10,
      top:0 ,
      left:0,
      right:0 ,
      bottom:0 ,
    },
    background: {
      flex:1 ,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:"#303030bf"
    },
    content: {
      width: 238 ,
      height: 212,
      backgroundColor: "white",
      borderRadius: 5,
      borderWidth:1,
      borderColor: "#cacaca",
    },
    header: {
      alignItems:'center',
      justifyContent: 'center',
      height:50,
      borderBottomWidth:1,
      borderBottomColor: "#cacaca",
    },
    title: {
      fontFamily:'Poppins-Medium',
      fontSize:20,
      height:30,
      color:"#303030",
    },
    iconClose: {
      position: "absolute",
      left:10,
    }, 
    options: {
      width:'100%',
      flex:1 ,
      alignItems: "center",
    },
    textOption: {
      color: '#4f4f4f',
      fontSize:16,
      letterSpacing:.4,
      fontFamily:'Roboto-Medium'
    },
    fieldOption: {
      width:'100%',
      flex:1 ,
      justifyContent:'center',
      backgroundColor: "#eaeaea",
      alignItems: "center",
      borderBottomWidth:1,
      borderBottomColor: "#cacaca",
    },
    lastFieldOption: {
      width:'100%',
      flex:1 ,
      justifyContent:'center',
      backgroundColor: "#eaeaea",
      alignItems: "center",
      borderBottomWidth:0,
      borderBottomEndRadius: 5,
      borderBottomStartRadius: 5,
    }

})