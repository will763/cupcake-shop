import React, { useEffect, useState, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import CopySuccess from './CopySuccess'
import CopyDefault from './Copy'
import { showMessage } from 'react-native-flash-message';
import { useFocusEffect } from '@react-navigation/native';

interface Props {
  text:string
  type: 'email' | 'number'
}


export default function({text, type}: Props) {
  const [isCopied,setIsCopied] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = () => setIsCopied(false);

      return () => unsubscribe();
    }, [])
  );

  async function handleCopy(){
    await Clipboard.setStringAsync(text);
    setIsCopied(true);

    const message = type === 'email' ? 'Email Copied To Clipboard' :  'Number Copied To Clipboard'; 

    showMessage({
      type:'info',
      message: message,
      titleStyle:{fontSize:18},
    });
  }

  return (
    <TouchableOpacity accessibilityLabel='container-parent' onPress={handleCopy} >
     { isCopied ? <CopySuccess />
       : <CopyDefault />  }
    </TouchableOpacity>
  );
}