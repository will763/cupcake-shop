import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";

import  Login from 'screens/Login/View'
import  Signup from 'screens/Signup/View'
import { Feedback } from "screens/Feedback/View";
import { RegisterProduct } from "screens/RegisterProduct";
import { Product } from "screens/Product";
import Drawer from '../drawer'

import Logo from 'components/LogoDrawer'  
import React, { useEffect, useState } from "react";
import { authApp } from "config/firebase.config";
import SplashScreen from "components/SplashScreen";

interface ProductParams {
  id: string | number
}

type RootStackParamList = {
  login: undefined
  signup: undefined
  home: undefined
  feedback: undefined
  RegisterProduct: undefined
  Product: ProductParams
};

export type ProductProps = NativeStackScreenProps<RootStackParamList, 'Product'>;

const { Screen, Navigator } = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes(){
  const [isLogged,setIsLogged] = useState<'home' | 'login' | undefined>();

  useEffect(()=> {
    const unsubscriber = authApp.onAuthStateChanged(user => {
      user ? setIsLogged('home') : setIsLogged('login');
    })

    return unsubscriber;
  }, [])

  return isLogged ?  (
    <Navigator 
         initialRouteName={isLogged}
         screenOptions={{
          headerShadowVisible:true,
         }}  
        >
            <Screen
              name="login"
              component={Login}
              options={{
                headerShown:false
              }}
            />

            <Screen
              name="signup"
              component={Signup}
              options={{
                headerShown:false
              }}
            />

            <Screen
              name="home"
              component={Drawer}
              options={{
                headerShown:false
              }}
            />

            <Screen
              name="feedback"
              component={Feedback}
              options={{
                headerTitleAlign:'center',
                headerTitle: () => <Logo />,
              }}
            />

            <Screen
              name="RegisterProduct"
              component={RegisterProduct}
              options={{
                headerTitleAlign:'center',
                headerTitle: () => <Logo />,
              }}
            />

            <Screen
              name="Product"
              component={Product}
              options={{
                headerTitleAlign:'center',
                headerTitle: () => <Logo />,
              }}
            />
        </Navigator>
  ) : <SplashScreen />
}