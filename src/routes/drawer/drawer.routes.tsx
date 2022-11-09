import { createDrawerNavigator } from '@react-navigation/drawer';
import { Contact } from 'screens/Contact';
import { CustomizeOrder } from 'screens/CustomizeOrder/View';
import { Doubts } from 'screens/Doubts/View';
import { Home } from 'screens/Home/View';
import { Admin } from 'screens/Admin'
import { RegisterProduct } from 'screens/RegisterProduct/View'

import { FontAwesome } from '@expo/vector-icons'; 

import Logo from 'components/LogoDrawer'  
import IconContact from 'components/IconContact'
import IconDoubt from 'components/IconDoubt';
import IconCupcake from 'components/IconCupcake';
import IconAdmin from 'components/IconAdmin'
import DrawerBackground from 'components/DrawerBackground';
import Logout from 'components/Logout';
import { useEffect, useState } from 'react';
import { authApp } from 'config/firebase.config';

const {Navigator, Screen } = createDrawerNavigator();

export function DrawerRoutes() {

  const [ isAdmin, setIsAdmin] = useState(false);

  useEffect(()=> {
    const unsubscriber = authApp.onAuthStateChanged(user => {
      user?.email === process.env.ADMIN_TOKEN ? setIsAdmin(true) : setIsAdmin(false)
    })

    return unsubscriber;
  }, []);


  return (
    <Navigator initialRouteName='Home' screenOptions={{
      headerTitleAlign: 'center',
      headerTransparent:true,
      headerBackground: () => <DrawerBackground /> ,
      headerTitle: () => <Logo />,
      drawerIcon: () => <Logout />
    }} >
      <Screen 
       name="Home" 
       component={Home} 
       options={{
        drawerIcon: () => <FontAwesome name="home" size={35}  color="black" />,
       }}
      />
      <Screen 
       name="Customize Order" 
       component={CustomizeOrder} 
       options={{
        drawerIcon: () => <IconCupcake />,
       }}
      />
      <Screen
       name="Doubts" 
       component={Doubts} 
       options={{
        drawerIcon: () => <IconDoubt />,
       }}
      />
      <Screen
       name="Contact" 
       component={Contact} 
       options={{
        drawerIcon: () => <IconContact />,
       }}
      />

      { isAdmin 
        ? 
         <Screen
          name="Admin" 
          component={RegisterProduct} 
          options={{
            drawerIcon: () => <IconAdmin /> ,
          }}
         />
        : null
      }

    </Navigator>
  );
}