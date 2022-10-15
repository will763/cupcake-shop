import { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, Text, TextInput } from 'react-native';
import { BtnSubmit, BtnText, Container, ContainerContent, ContainerInput, ContainerInputDate, Form, Input, InputTitle, TextDate, Title } from './styles';

import uuid from 'react-native-uuid';

import IconCalendar from '../../components/IconCalendar'
import { showMessage } from 'react-native-flash-message';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';

export function Feedback() {
  const [date, setDate] = useState(new Date());

  const [name,setName] = useState('')
  const [testedWorked,setTestedWorked] = useState('')
  const [testedNotWorked,setTestedNotwork] = useState('')
  const [untested,setUntested] = useState('')

  const [isSending,setIsSending] = useState(false);
  
  const onChange = (event:DateTimePickerEvent, date: Date | undefined ) => {
    date && setDate(date);
  };

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: 'date',
    });
  };

  function successfulSending(){
    showMessage({
       message: 'Success',
       description: "Your feedback has been sent successfully",
       type: "success",
       titleStyle:{fontSize:18},
       duration:2000
      });

    setName('');
    setTestedWorked('');
    setTestedNotwork('');
    setUntested('');

  }

  function verifyEmptyFields(){
    if(name.length === 0 || testedWorked.length === 0
       || testedNotWorked.length === 0 || untested.length === 0 ) {
        showMessage({
         message: "Error",
         description: 'fill in all the fields before submitting',
         type: "default",
         backgroundColor: "#fefefe",
         color:'#ff0000',
         duration:5000,
         titleStyle:{fontSize:18},
         hideOnPress:true,
        });

        return true
    }
  }

  function errorToCreate(){
    showMessage({
         message: "Something went wrong",
         type: "default",
         backgroundColor: "#fefefe",
         color:'#ff0000',
         duration:5000,
         titleStyle:{fontSize:18},
         hideOnPress:true,
        });
  }

   async function create(){
    const myDoc = doc(db, 'feedback', uuid.v4() as string);
 
    const docData = {
      name: name,
      date: serverTimestamp(),
      tested_Worked: testedWorked,
      tested_and_not_worked: testedNotWorked,
      untested: untested,
    }

    await setDoc(myDoc, docData)
     .then(() => successfulSending())
     .catch(()=> errorToCreate());
  }

  function sendFeedback(){
    if(verifyEmptyFields()){
      return;
    }

    setIsSending(true);

    const id = setTimeout(async ()=>{
      await create();
      setIsSending(false);
    },1800)

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
     behavior='height'  
     keyboardVerticalOffset={180} >
     <ScrollView>
      <ContainerContent >
        <Title>Feedback</Title>
        <Form>
         <ContainerInput>
          <InputTitle>Name</InputTitle>
          <Input 
           placeholder='your name...' 
           value={name}
           onChangeText={(text:string) => setName(text)}
          />
         </ContainerInput>
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
         <ContainerInput>
          <InputTitle>What tested and worked</InputTitle>
          <Input
           style={{textAlignVertical:'top',paddingTop:8, height:163}}
           multiline
           numberOfLines={20}
           maxLength={180}
           placeholder='functionality description...'
           value={testedWorked}
           onChangeText={(text:string) => setTestedWorked(text)}
          />
         </ContainerInput>
          <ContainerInput>
           <InputTitle>What Tried and Didn't Work</InputTitle>
           <Input
            style={{textAlignVertical:'top',paddingTop:8, height:163}}
            multiline
            numberOfLines={20}
            maxLength={180}
            placeholder='description of functionality and what should be fixed...'
            value={testedNotWorked}
            onChangeText={(text:string) => setTestedNotwork(text)}
           />
         </ContainerInput>
         <ContainerInput>
          <InputTitle>Untested functionality</InputTitle>
          <Input
           style={{textAlignVertical:'top',paddingTop:8, height:163}}
           multiline
           numberOfLines={20}
           maxLength={180}
           placeholder='Untested functionality either because it was missing or the functionality exists in the project but has not been realized.'
           value={untested}
           onChangeText={(text:string) => setUntested(text)}
          />
         </ContainerInput>
         <BtnSubmit onPress={sendFeedback} >
          <BtnText>SUBMIT</BtnText>
         </BtnSubmit>
        </Form>
      </ContainerContent>
     </ScrollView>
     </KeyboardAvoidingView>
    </Container>
  );
}