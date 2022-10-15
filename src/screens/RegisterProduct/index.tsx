import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Image, View,Text, Modal} from 'react-native';
import { BtnSubmit, BtnText, Container, ContainerContent, Form, Input, InputContainer, InputPhoto, InputPhotoText, InputTitle, Title } from './styles';

import IconCamera from '../../components/IconCamera'
import { showMessage } from 'react-native-flash-message';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import UploadSpinner from '../../components/UploadSpinner';
import { useFocusEffect } from '@react-navigation/native';

export function RegisterProduct() {
  const [isSaving, setIsSaving] = useState(false);
  const [isSaveImage,setIsSaveImage] = useState(false);
  const [image,setImage] = useState('');
  const [nameProduct,setNameProduct] = useState('');
  const [descriptionProduct,setDescriptionProduct] = useState('');

  function verifyEmptyFields(){
    if(nameProduct === '' || descriptionProduct === '' || image === '' ) {
      
        showMessage({
         message: "Error",
         description: 'fill in all the fields and select a photo before submitting',
         type: "default",
         backgroundColor: "#fefefe",
         color:'#ff0000',
         duration:7000,
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

  function successfulSending(){
    showMessage({
       message: 'Success',
       description: "Product registered successfully",
       type: "success",
       titleStyle:{fontSize:18},
       duration:2000
      });

    setImage('');
    setNameProduct('');
    setDescriptionProduct('');
  }

  const pickImage = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,

    });
    
    if (!result.cancelled) {
      setIsSaveImage(true);
      setImage(result.uri);
    
      const id = setTimeout(() => {
        setIsSaveImage(false);
      }, 1500);

      return () => clearTimeout(id);
    }
  };

  const uploadImage = async () => {
    const response = await fetch(image);
    const blob = await response.blob();

    const fileRef = ref(getStorage(), uuid.v4() as string);
    await uploadBytes(fileRef, blob);

    const url = await getDownloadURL(fileRef);
    return url;
  }

  async function createProduct() {
    const myDoc = doc(db, 'product', uuid.v4() as string);

    const url = await uploadImage();

    const docData = {
      name: nameProduct,
      description: descriptionProduct,
      url: url,
      ratings: [],
      comments: [],
      create_at: serverTimestamp(),
    }

    await setDoc(myDoc, docData)
     .then(() => successfulSending())
     .catch(()=> errorToCreate());
  }

  async function saveProduct(){
    if(verifyEmptyFields()){
      return;
    }

    setIsSaving(true);

    const id = setTimeout(async ()=>{
      await createProduct();
      setIsSaving(false);
    },1800)

    return () => clearTimeout(id);
  
  }

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
      keyboardVerticalOffset={150} 
     >
     <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <ScrollView>
       <ContainerContent>
        <Title>Register new products</Title>
        <Form>
         <InputContainer>
          <InputTitle>Product's name</InputTitle>
          <Input 
           value={nameProduct} 
           onChangeText={(text:string) => setNameProduct(text)} 
          />
         </InputContainer>
         <InputContainer>
          <InputTitle>Description of product</InputTitle>
          <Input
           style={{textAlignVertical:'top',paddingTop:8, height:151}}
           multiline
           numberOfLines={20}
           maxLength={200}
           value={descriptionProduct} 
           onChangeText={(text:string) => setDescriptionProduct(text)} 
          />
         </InputContainer>
         <InputContainer>
          <InputTitle>Please select a photo.</InputTitle>
          <InputPhoto onPress={pickImage} >
           <IconCamera />
           <InputPhotoText>Select Photo</InputPhotoText>
          </InputPhoto>
         </InputContainer>
         <BtnSubmit onPress={saveProduct} disabled={isSaving} >
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