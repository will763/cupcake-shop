import React from 'react';
import { Controller } from 'react-hook-form';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { useDoubtViewController } from './viewController';

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

export function Doubts() {

  const { isSending, submitForm, control } = useDoubtViewController();

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
      </ContainerContent>
     </ScrollView>
     </KeyboardAvoidingView>
    </Container>
  );
}