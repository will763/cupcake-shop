import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, ScrollView, Text, TextInput, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import LoaderSpin from '../../components/LoaderSpin';
import { Button, Container, ContainerContent, Description, Form, Input, Subject, TextButton, Title } from './styles';

export function CustomizeOrder() {

  const [isSending,setIsSending] = useState(false);
  const [orderText,setOrderText] = useState('');

  useFocusEffect(
    React.useCallback(() => {
     setOrderText('');
    }, [])
  );

  function emptyFieldError(){

    showMessage({
      message: "Order Error",
      description: 'fill in the field before submitting',
      type: "default",
      backgroundColor: "#fefefe",
      color:'#ff0000',
      duration:5000,
      titleStyle:{fontSize:18},
      hideOnPress:true,
    });
    
  }


  function sendOrder(){
    setIsSending(true);
    
    const id = setTimeout(()=>{
      setIsSending(false);

      if(!orderText){
       emptyFieldError();
       return;
      }

      showMessage({
       message: "Order Placed Successfully",
       type: "success",
       titleStyle:{fontSize:18},
       duration:2000
      });

      setOrderText('');
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
        <Title>Customize Order</Title>
        <Description>
         In the field below, enter how you
         would like your cupcake to be 
         made and click send, so we can
         evaluate your order.
        </Description>
        <Form>
         <Input
          style={{textAlignVertical:'top'}}
          multiline
          numberOfLines={8}
          maxLength={150}
          placeholder='Enter with your text...'
          onChangeText={(text:string) => setOrderText(text)}
          value={orderText}
         />
         <Button onPress={sendOrder} >
            <TextButton>Send</TextButton> 
         </Button>
        </Form>
       </Subject>
      </ContainerContent>
     </ScrollView>
     </KeyboardAvoidingView>
    </Container>
  );
}