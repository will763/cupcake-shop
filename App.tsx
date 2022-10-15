import 'react-native-gesture-handler';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';

import THEME from './src/screens/theme'
import { View, StatusBar } from 'react-native';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Routes } from './src/routes/stack';
import FlashMessage from 'react-native-flash-message';
import NetworkError from './src/components/NetworkError';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./src/assets/fonts/roboto/Roboto-Bold.ttf'),
    'Poppins-Regular': require('./src/assets/fonts/poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./src/assets/fonts/poppins/Poppins-Bold.ttf'),
    'Poppins-Medium' : require('./src/assets/fonts/poppins/Poppins-Medium.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/roboto/Roboto-Medium.ttf'),
  });

  const {isConnected} = useNetInfo();

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }



  return (
      <>
       { isConnected ?  
         <ThemeProvider theme={THEME}>
          <StatusBar backgroundColor='black'   />
          <View style={{flex:1}} onLayout={onLayoutRootView}>
           <Routes  />
          </View>
          <FlashMessage statusBarHeight={StatusBar.currentHeight} position="top" />
         </ThemeProvider>
         : 
         <NetworkError />
       } 
      </> 
  )

}