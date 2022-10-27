import React from 'react';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { ContainerContent } from './styles';
import { Container } from './styles';

import Logo from 'components/Logo';

import IconCheck from 'components/IconCheck'
import IconError from 'components/IconError'

import { 
  Form, 
  InputContainer, 
  Input, 
  Button, 
  TextButton, 
  LoginSocial, 
  TextLoginSocial, 
  LoginContent,
  LoginText, 
  LoginSpanText 
} from './styles';

import useSignupViewController from './viewController';

export default function Signup() {

  const {
    handleSignup,
    username, 
    email, 
    toLogin, 
    password, 
    confirmPassword, 
    setUsername, 
    setEmail, 
    setPassword, 
    setConfirmPassword, 
    invalidUsername, 
    matchPassword, 
    showIconPassword, 
    showIconUsername
  } = useSignupViewController();

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