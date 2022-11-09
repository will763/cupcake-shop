import React from 'react';
import { 
  KeyboardAvoidingView, 
  ScrollView, 
  TouchableWithoutFeedback, 
  Keyboard 
} from 'react-native';

import IconCamera from 'components/IconCamera'
import Spinner from 'react-native-loading-spinner-overlay/lib';
import UploadSpinner from 'components/UploadSpinner';

import { 
  BtnSubmit, 
  BtnText, 
  Container, 
  ContainerContent, 
  Form, 
  Input,
  InputContainer, 
  InputPhoto, 
  InputPhotoText, 
  InputTitle, 
  Title 
} from './styles';
import { useRegisterProductController } from './viewController';
import { Controller } from 'react-hook-form';

export function RegisterProduct() {

  const { 
    isSaving,
    isSaveImage, 
    pickImage, 
    submitForm, 
    control } = useRegisterProductController();

  return (
     <Container>
     <Spinner
       visible={isSaving}
       textContent={'Loading...'}
       textStyle={{color:'#FFF'}}
     />
     <UploadSpinner uploading={isSaveImage} />
     <KeyboardAvoidingView
      style={{flex:1}}
      behavior='height'  
      keyboardVerticalOffset={28} 
     >
     <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <ScrollView>
       <ContainerContent>
        <Title>Register new products</Title>
        <Form>
          <Controller
            control={control}
            name='nameProduct'
            render={({ field: { onChange, value } }) => (
              <InputContainer>
               <InputTitle>Product's name</InputTitle>
               <Input 
                 value={value} 
                 onChangeText={onChange} 
               />
              </InputContainer>
            )}
          />
          <Controller
            control={control}
            name='descriptionProduct'
            render={({ field: { onChange, value } }) => (
              <InputContainer>
                <InputTitle>Description of product</InputTitle>
                <Input
                  style={{textAlignVertical:'top',paddingTop:8, height:151}}
                  multiline
                  numberOfLines={20}
                  maxLength={200}
                  value={value} 
                  onChangeText={onChange} 
                />
              </InputContainer>
            )}
          />
         <InputContainer>
          <InputTitle>Please select a photo.</InputTitle>
          <InputPhoto onPress={pickImage} >
           <IconCamera />
           <InputPhotoText>Select Photo</InputPhotoText>
          </InputPhoto>
         </InputContainer>
         <BtnSubmit onPress={submitForm} disabled={isSaving} >
          <BtnText>SUBMIT</BtnText>
         </BtnSubmit>
        </Form>
       </ContainerContent>
      </ScrollView>
     </TouchableWithoutFeedback>      
     </KeyboardAvoidingView>
     </Container>
  );
}