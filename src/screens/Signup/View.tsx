import React from 'react';
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

export default function Signup() {

  const {
    submitForm,
    username, 
    toLogin, 
    invalidUsername,
    control,
    errors
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
        
        <Button onPress={submitForm} >
         <TextButton>Signup</TextButton>
        </Button>
       </Form>
       <LoginSocial>
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