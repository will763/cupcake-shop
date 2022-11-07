import React from 'react';
import { Controller } from 'react-hook-form';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { useCustomizeOrderViewController } from './viewController';

import { 
  Button, 
  Container, 
  ContainerContent, 
  Description, 
  Form, 
  Input, 
  Subject, 
  TextButton, 
  Title 
} from './styles';

export function CustomizeOrder() {

  const { control, isSending, submitForm } = useCustomizeOrderViewController();

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
          <Controller
            control={control}
            name='text'
            render={({ field: { onChange, value } }) => (
              <Input
                style={{textAlignVertical:'top'}}
                multiline
                numberOfLines={8}
                maxLength={150}
                placeholder='Enter with your text...'
                onChangeText={onChange}
                value={value}
              />
            )}
          />
         <Button onPress={submitForm} disabled={isSending} >
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