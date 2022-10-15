import { createDrawerNavigator } from '@react-navigation/drawer';
import { Contact } from '../../screens/Contact';
import { CustomizeOrder } from '../../screens/CustomizeOrder';
import { Doubts } from '../../screens/Doubts';
import { Home } from '../../screens/Home';
import {Admin} from '../../screens/Admin'

import { FontAwesome } from '@expo/vector-icons'; 

import Logo from '../../components/LogoDrawer'  
import IconContact from '../../components/IconContact'
import IconDoubt from '../../components/IconDoubt';
import IconCupcake from '../../components/IconCupcake';
import IconAdmin from '../../components/IconAdmin'
import DrawerBackground from '../../components/DrawerBackground';

const {Navigator, Screen} = createDrawerNavigator();


export function DrawerRoutes() {
  return (
    <Navigator initialRouteName='Home' screenOptions={{
      headerTitleAlign: 'center',
      headerTransparent:true,
      headerBackground: () => <DrawerBackground /> ,
      headerTitle: () => <Logo />,
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

      <Screen
       name="Admin" 
       component={Admin} 
       options={{
        drawerIcon: () => <IconAdmin /> ,
       }}
      />
    </Navigator>
  );
}