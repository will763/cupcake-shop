import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { ContainerContent } from './styles';
import { Container } from './styles';
import uuid from 'react-native-uuid';

import Logo from '../../components/Logo';

import IconCheck from '../../components/IconCheck'
import IconError from '../../components/IconError'

import { Form } from './styles';
import { InputContainer } from './styles';
import { Input } from './styles';
import { Button } from './styles';
import { TextButton } from './styles';
import { LoginSocial } from './styles';
import { TextLoginSocial } from './styles';
import { LoginContent } from './styles';
import { LoginText } from './styles';
import { LoginSpanText } from './styles';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { authApp, auth, db } from '../../config/firebase.config';
import { showMessage } from 'react-native-flash-message';
import { collection, doc, DocumentData, getDocs, setDoc } from 'firebase/firestore';

export function Signup() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();


  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const [matchPassword,setMatchPassword] = useState(false);
  const [showIconPassword, setShowIconPassword] = useState(false);
  const [showIconUsername,setShowIconUsername] = useState(false)

  const [invalidUsername, setInvalidUsername] = useState<string[]>([]);

  useEffect(()=> {
    const getData = async () => {
      const docs = await getDocs(collection(db, "user"));
      const documents: Array<string> = [];
      docs.forEach((doc)=>{
        documents.push(doc.data().username);
      }) 
      
      setInvalidUsername(documents)
     }

     if(isFocused){
      getData();
     }

  }, [isFocused])

  useEffect(()=> {
    if(username.length === 0){
      setShowIconUsername(false);
    } else {
      setShowIconUsername(true);
    }
  }, [username])
     
  useEffect(() => {
    
    if(!password || !confirmPassword){
      setShowIconPassword(false);
      return;
    }

    if(password && confirmPassword){
      setShowIconPassword(true);
      password === confirmPassword ? setMatchPassword(true) : setMatchPassword(false);
    }

  }, [password, confirmPassword])

  useFocusEffect(
    React.useCallback(() => {
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }, [])
  );

  function toLogin(){
    navigation.navigate('login');
  }

  function SignupSuccess(){
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    
    showMessage({
      message: "Successfully Registered",
      type: "success",
      titleStyle:{fontSize:18},
      duration:1700
    });

    const id =  setTimeout(() => {
      navigation.navigate('home');
    }, 2000);

   return () => clearTimeout(id);
  }

  function signupError(message?:string){
     let description = '';

     if(message === 'Firebase: Error (auth/invalid-email).'){
        description = 'invalid email'
      }  else if(message === 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
                description = 'Password should be at least 6 characters';
          }     else if(message === 'Firebase: Error (auth/email-already-in-use).'){
                        description = 'Email already in use'
                }

     showMessage({
      message: "Login Error",
      description: description ? description : 'Something went wrog',
      type: "default",
      backgroundColor: "#fefefe",
      color:'#ff0000',
      duration:5000,
      titleStyle:{fontSize:18},
      hideOnPress:true,
     });
    
  }

  function errorToFillFields(message:string){
    showMessage({
      message: "Signup Error",
      description: message,
      type: "default",
      backgroundColor: "#fefefe",
      color:'#ff0000',
      duration:5000,
      titleStyle:{fontSize:18},
      hideOnPress:true,
    });
  }

  function handleSignup(){
    if(username === '' || email === '' || password === '' || confirmPassword === ''){
      errorToFillFields('fill in all fields');
      return;
    }

    if(password !== confirmPassword) {
      errorToFillFields('passwords must be the same');
      return;
    }

    if(invalidUsername.includes(username)) {
      errorToFillFields('Username already in use');
      return;
    }

    async function create(){
      const myDoc = doc(db, 'user', uuid.v4() as string);
 
      const docData = {
        username: username,
      }

      await setDoc(myDoc, docData).catch(() => signupError());
  }

    auth
      .createUserWithEmailAndPassword(authApp,email, password)
      .then(async () => {
        await create();
        SignupSuccess();
      })
      .catch((error) => signupError(error.message));
  }

  return (
    <Container>
     <KeyboardAvoidingView
      style={{flex:1}}
      behavior='height'  
      keyboardVerticalOffset={30} 
     >
     <ScrollView>
      <ContainerContent>
       <Logo  />
       <Form>
        <InputContainer>
         <Input 
          placeholder={'Username'} 
          value={username} 
          onChangeText={(username:string) => setUsername(username)}
         />
         { showIconUsername ? invalidUsername.includes(username) ? <IconError /> : <IconCheck /> : null }
        </InputContainer>

        <InputContainer>
         <Input 
          placeholder={'E-mail'} 
          value={email} 
          onChangeText={(email:string) => setEmail(email)} 
         />
        </InputContainer>
        
        <InputContainer>
         <Input 
          placeholder={'Password'} 
          value={password} 
          onChangeText={(password:string) => setPassword(password)} />
          {showIconPassword ? matchPassword ? <IconCheck />  : <IconError /> : null}
        </InputContainer>
        
        <InputContainer>
         <Input 
          placeholder={'Confirm Password'} 
          value={confirmPassword}
          onChangeText={(confirmPassword:string) => setConfirmPassword(confirmPassword)}
         />
         {showIconPassword ? matchPassword ? <IconCheck />  : <IconError /> : null}
        </InputContainer>
        <Button onPress={handleSignup} >
         <TextButton>Signup</TextButton>
        </Button>
       </Form>
       <LoginSocial>
        <TextLoginSocial>Login with Google</TextLoginSocial>
      </LoginSocial>
      <LoginContent>
        <LoginText>You already have an account?</LoginText>
        <TouchableOpacity>
          <LoginSpanText onPress={toLogin} >
            Login
          </LoginSpanText>
        </TouchableOpacity>
      </LoginContent>
      </ContainerContent>
     </ScrollView>
     </KeyboardAvoidingView>
    </Container>
  );
}