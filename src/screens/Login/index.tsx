import { 
  Button, Container,ContainerContent, 
  ForgoutPassword, Form,Icon, Input,
  InputContainer,LoginSocial,
  SignupContent,SignupSpanText, SignupText,
  TextButton,TextLoginSocial, TextMissing 
  } from './styles';

import { KeyboardAvoidingView, ScrollView, TouchableOpacity, View} from 'react-native';
import Logo from '../../components/Logo'      
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { auth, authApp } from '../../config/firebase.config';
import { showMessage } from 'react-native-flash-message';

export function Login() {
  const navigation = useNavigation();
  
  const [hide, setHide] = useState(true);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  function toSignup(){
    navigation.navigate('signup');
  }

  function loginSuccess(){
    setEmail('');
    setPassword('');

    showMessage({
      message: "Login Successfully",
      type: "success",
      titleStyle:{fontSize:18},
      duration:1700
    });

    const id =  setTimeout(() => {
      navigation.navigate('home');
    }, 2000);

   return () => clearTimeout(id);
  }

  function emptyFieldError(){
    let description = 'fill in all fields';

    showMessage({
      message: "Login Error",
      description: description,
      type: "default",
      backgroundColor: "#fefefe",
      color:'#ff0000',
      duration:5000,
      titleStyle:{fontSize:18},
      hideOnPress:true,
    });
    
  }

  function loginError(message:string){
    let description = message;

    if(message === 'Firebase: Error (auth/user-not-found).'){
      description = 'user not found';
    } else if(message === 'Firebase: Error (auth/wrong-password).'){
          description = 'wrong password';
    }

    showMessage({
      message: "Login Error",
      description: description,
      type: "default",
      backgroundColor: "#fefefe",
      color:'#ff0000',
      duration:5000,
      titleStyle:{fontSize:18},
      hideOnPress:true,
    });
    
  }

  function toLogin(){
    if(email === '' || password === ''){
      emptyFieldError();
      return;
    }

     auth
      .signInWithEmailAndPassword(authApp,email,password)
      .then(() => loginSuccess())
      .catch(error => loginError(error.message));
  }

  return (
    <Container >
     <KeyboardAvoidingView
      style={{flex:1}}
      behavior='height'  
      keyboardVerticalOffset={30} 
     >
     <ScrollView>
      <ContainerContent>
      <Logo />
      <Form>
        <InputContainer>
          <Icon name="user-alt" size={24} />
          <Input 
            placeholder={'E-mail'}  
            onChangeText={(email:string) => setEmail(email)} 
          />
        </InputContainer>

        <InputContainer>
          <Icon name="lock" size={24} />
          <Input 
           placeholder={'Password'} 
           secureTextEntry={hide} 
           onChangeText={(password:string) => setPassword(password)} 
          />
          <TouchableOpacity onPress={()=> setHide(!hide)} >
            { hide ? <Icon name="eye" size={18} /> 
             : <Icon name="eye-slash" size={18} /> }
          </TouchableOpacity>
        </InputContainer> 

        <Button onPress={toLogin} >
          <TextButton>Login</TextButton>
        </Button>
        <ForgoutPassword>
          <TextMissing>Forgout password?</TextMissing>
        </ForgoutPassword>
      </Form>
      <LoginSocial>
        <TextLoginSocial>Login with Google</TextLoginSocial>
      </LoginSocial>
      <SignupContent>
        <SignupText>Don't have an account?</SignupText>
        <TouchableOpacity>
          <SignupSpanText onPress={toSignup}>
           Register
          </SignupSpanText>
        </TouchableOpacity>
      </SignupContent>
      </ContainerContent>
     </ScrollView>
     </KeyboardAvoidingView>
    </Container>
  );
}