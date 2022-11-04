import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { ContainerContent } from './styles';
import { Container } from './styles';

import Logo from 'components/Logo';
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
import { Controller } from 'react-hook-form';

WebBrowser.maybeCompleteAuthSession();

export default function Signup() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: process.env.CLIENT_ID_KEY,
  });

  const {
    submitForm,
    username, 
    toLogin, 
    invalidUsername,
    control,
    errors,
    isSignupping,
    useSignupWithGoogle
  } = useSignupViewController();

  useSignupWithGoogle(response)

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

        <Controller
          control={control}
            name='username'
            render={({ field: { onChange, value } }) => (
             <InputContainer>
                <Input 
                  placeholder={'Username'} 
                  value={value} 
                  onChangeText={onChange}
                />
                {((errors.username) || (invalidUsername.includes(username))) && <IconError />}
              </InputContainer>
            )}
        />

        <Controller
          control={control}
            name='email'
            render={({ field: { onChange, value } }) => (
             <InputContainer>
              <Input 
               keyboardType="email-address"
               placeholder={'Email'} 
               value={value} 
               onChangeText={onChange} 
              />
              {errors.email && <IconError />}
             </InputContainer>
            )}
        />

        <Controller
          control={control}
            name='password'
            render={({ field: { onChange, value } }) => (
             <InputContainer>
               <Input 
                 placeholder='Password' 
                 value={value} 
                 onChangeText={onChange} 
                 secureTextEntry={true}
               />   
               {errors.password && <IconError />}       
             </InputContainer>
            )}
        />

        <Controller
          control={control}
            name='confirmPassword'
            render={({ field: { onChange, value } }) => (
             <InputContainer>
              <Input 
                placeholder={'Confirm Password'} 
                value={value}
                onChangeText={onChange}
                secureTextEntry={true}
              />
              {errors.confirmPassword && <IconError />}  
             </InputContainer>
            )}
        />
        
        <Button onPress={submitForm}  disabled={isSignupping} >
         <TextButton>Signup</TextButton>
        </Button>
       </Form>
       <LoginSocial onPress={() => { promptAsync() }} disabled={!request}>
        <TextLoginSocial>Login with Google</TextLoginSocial>
      </LoginSocial>
      <LoginContent>
        <LoginText>You already have an account?</LoginText>
        <TouchableOpacity>
          <LoginSpanText onPress={toLogin}>
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