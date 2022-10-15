import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { Button, Container, ContainerContent, Description, Form, Input, Subject, TextButton, Title } from './styles';

export function Doubts() {
  const [isSending,setIsSending] = useState(false);
  const [doubtText,setDoubtText] = useState('');

  useFocusEffect(
     React.useCallback(() => {
      setDoubtText('');
    }, [])
  );

  function emptyFieldError(){

    showMessage({
      message: "Doubt Error",
      description: 'fill in the field before submitting',
      type: "default",
      backgroundColor: "#fefefe",
      color:'#ff0000',
      duration:5000,
      titleStyle:{fontSize:18},
      hideOnPress:true,
    }); 
  }

  function success() {
    setIsSending(true);
    
    const id = setTimeout(()=>{
      setIsSending(false);

      if(!doubtText){
       emptyFieldError();
       return;
      }

      showMessage({
       message: "Doubt Sent",
       type: "success",
       titleStyle:{fontSize:18},
       duration:2000
      });

      setDoubtText('');
    }, 2000)

    return () => clearTimeout(id);
  }

  return (
    <Container>
     <Spinner
       visible={isSending}
       textContent={'Loading...'}
       textStyle={{color:'#FFF'}}
     />
     <KeyboardAvoidingView
      style={{flex:1}}
      behavior='height'  
      keyboardVerticalOffset={35} 
     >
     <ScrollView>
      <ContainerContent>
       <Subject>
        <Title>Doubts</Title>
        <Description>
         This screen is intended for
         users who have any doubts about the app. 
         In the field below, describe your question and
          send it to us.
        </Description>
       </Subject>
       <Form>
        <Input
         style={{textAlignVertical:'top'}}
         multiline
         numberOfLines={8}
         maxLength={150}
         placeholder='Enter with your text...'
         onChangeText={(text:string) => setDoubtText(text)}
         value={doubtText}
        />
        <Button onPress={success} >
            <TextButton>Send</TextButton>
        </Button>
       </Form>
      </ContainerContent>
     </ScrollView>
     </KeyboardAvoidingView>
    </Container>
  );
}