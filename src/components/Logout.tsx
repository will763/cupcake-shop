import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { authApp } from 'config/firebase.config';
import { signOut } from 'firebase/auth';
import { TouchableOpacity } from 'react-native';
import LogoutError from './LogoutError';

export default function() {
    const navigation = useNavigation();

    function logout() {
       signOut(authApp).then(() => {
            navigation.navigate('login');
        }).catch(() => {
            LogoutError();
        });
    }
    
    return (
        <TouchableOpacity>
          <FontAwesome5 name="sign-out-alt" size={20} color="black" onPress={logout} /> 
        </TouchableOpacity>
    )
}