import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text } from 'react-native';

import IconCalendar from 'components/IconCalendar'
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { useFeedbackViewController } from './viewController';

import { 
  BtnSubmit, 
  BtnText, 
  Container, 
  ContainerContent, 
  ContainerInput, 
  ContainerInputDate, 
  Form, 
  Input, 
  InputTitle, 
  TextDate, 
  Title 
} from './styles';
import { Controller } from 'react-hook-form';

export function Feedback() {

  const { isSending, showDatePicker, submitForm, control, date } = useFeedbackViewController();

  return (
    <Container>
     <Spinner
       visible={isSending}
       textContent={'Loading...'}
       textStyle={{color:'#FFF'}}
     />
     <KeyboardAvoidingView 
     behavior='height'  
     keyboardVerticalOffset={180} >
     <ScrollView>
      <ContainerContent >
        <Title>Feedback</Title>
        <Form>
          <Controller
            control={control}
            name='name'
            render={({ field: { onChange, value } }) => (
              <ContainerInput>
                <InputTitle>Name</InputTitle>
                <Input 
                 placeholder='your name...' 
                 value={value}
                 onChangeText={onChange}
                />
              </ContainerInput>
            )}
          />
         <ContainerInput >
          <InputTitle>Test date</InputTitle>
          <ContainerInputDate onPress={showDatePicker}>
            <TextDate>
              <Text style={{fontSize:20,color:'#4f4f4f'}}>
                {date.toLocaleDateString()}
              </Text>
            </TextDate>
            <IconCalendar/>
          </ContainerInputDate>
         </ContainerInput>

         <Controller
          control={control}
          name='testedWorked'
          render={({ field: { onChange, value } }) => (
            <ContainerInput>
             <InputTitle>What tested and worked</InputTitle>
             <Input
              style={{textAlignVertical:'top',paddingTop:8, height:163}}
              multiline
              numberOfLines={20}
              maxLength={180}
              placeholder='functionality description...'
              value={value}
              onChangeText={onChange}
             />
            </ContainerInput>
          )}
         />
         
         <Controller
          control={control}
          name='testedNotWorked'
          render={({ field: { onChange, value } }) => (
            <ContainerInput>
             <InputTitle>What Tried and Didn't Work</InputTitle>
             <Input
              style={{textAlignVertical:'top',paddingTop:8, height:163}}
              multiline
              numberOfLines={20}
              maxLength={180}
              placeholder='description of functionality and what should be fixed...'
              value={value}
              onChangeText={onChange}
             />
            </ContainerInput>
          )}
         />

         <Controller
          control={control}
          name='untested'
          render={({ field: { onChange, value } }) => (
            <ContainerInput>
              <InputTitle>Untested functionality</InputTitle>
              <Input
                style={{textAlignVertical:'top',paddingTop:8, height:163}}
                multiline
                numberOfLines={20}
                maxLength={180}
                placeholder='Untested functionality either because it was missing or the functionality exists in the project but has not been realized.'
                value={value}
                onChangeText={onChange}
              />
            </ContainerInput>
          )}
         />
         <BtnSubmit onPress={submitForm} disabled={isSending} >
          <BtnText>SUBMIT</BtnText>
         </BtnSubmit>
        </Form>
      </ContainerContent>
     </ScrollView>
     </KeyboardAvoidingView>
    </Container>
  );
}