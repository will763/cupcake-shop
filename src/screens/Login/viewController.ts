import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { showMessage } from "react-native-flash-message";
import useLoginViewModel from "./viewModels";


const useLoginViewController = () => {
  const navigation = useNavigation();

  const { newLogin } = useLoginViewModel();

  const [hide, setHide] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function toSignup() {
    navigation.navigate('signup');
  }

  function loginSuccess() {
    setEmail('');
    setPassword('');

    showMessage({
      message: "Login Successfully",
      type: "success",
      titleStyle: { fontSize: 18 },
      duration: 1700
    });

    const id = setTimeout(() => {
      navigation.navigate('home');
    }, 2000);

    return () => clearTimeout(id);
  }

  function loginError(message: string) {
    type ObjectKey = keyof typeof loginErrorTypes;

    const loginErrorTypes = {
      "fields are empty": 'fill in all fields',
      "Firebase: Error (auth/user-not-found).": 'user not found',
      "Firebase: Error (auth/wrong-password).": 'wrong password',
    }

    showMessage({
      message: "Login Error",
      description: loginErrorTypes[message as ObjectKey] ?? "something went wrong",
      type: "default",
      backgroundColor: "#fefefe",
      color: '#ff0000',
      duration: 5000,
      titleStyle: { fontSize: 18 },
      hideOnPress: true,
    });

  }

  function login() {
    if (email === '' || password === '') {
      loginError('fields are empty')
      return;
    }

    newLogin(email, password)
      .then(() => loginSuccess())
      .catch(({ message }) => loginError(message))
  }


  return {
    hide,
    email,
    password,
    setHide,
    setEmail,
    setPassword,
    toSignup,
    login
  }
}

export default useLoginViewController;