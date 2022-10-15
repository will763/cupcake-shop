import React, { useState } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {ADMIN_PASSWORD} from 'react-native-dotenv'

import {Button, Container, ContainerContent, Form, Icon, Information, Input, InputContainer, TextButton, Title} from './styles'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

export function Admin() {
  const navigation = useNavigation();
  const [password,setPassword] = useState('');

  useFocusEffect(
    React.useCallback(() => {
     setPassword('');  
    }, [])
  );

  function loginError(){
    showMessage({
      message: "Invalid Password",
      type: "default",
      backgroundColor: "#fefefe",
      color:'#ff0000',
      duration:5000,
      titleStyle:{fontSize:18},
      hideOnPress:true,
    });
  }

  function toRegisterProduct(){
    if(ADMIN_PASSWORD === password){
      navigation.navigate('RegisterProduct');
      setPassword('');
    } else {
      loginError();
    }
  }

  return (   
    <Container >
     <KeyboardAvoidingView
      style={{flex:1}}
      behavior='height'  
      keyboardVerticalOffset={20} 
     >
     <ScrollView>
     <ContainerContent>
      <Title>Administrator</Title>
      <Information>
        when you arrive at this 
        screen you are faced with a field to
        enter the password to become an administrator,
        when entering the password correctly you will
        be taken to another screen to be able to register
        new products.
      </Information>
      <Form>
       <InputContainer>
        <Icon name="lock" size={24} />
        <Input 
         placeholder='Password' 
         secureTextEntry
         value={password}
         onChangeText={(text:string) => setPassword(text)}
        />
       </InputContainer>
       <Button onPress={toRegisterProduct} disabled={password ? false : true} >
        <TextButton>Login</TextButton>
       </Button>
      </Form>
     </ContainerContent>
     </ScrollView>
     </KeyboardAvoidingView>
    </Container>
  );
}