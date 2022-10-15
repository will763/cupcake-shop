import { useFocusEffect, useRoute } from '@react-navigation/native';
import { arrayUnion, collection, doc, DocumentData, DocumentSnapshot, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import Comment from '../../components/Comment';
import { db } from '../../config/firebase.config';
import { ProductProps } from '../../routes/stack/stack.routes';
import { Button, Container, ContainerComment, ContainerContent, Content, ContentComment, Description, Image, Input, InputComment, InputContainer, Name, SectionName, TextButton, Title } from './styles';
import uuid from 'react-native-uuid';

import { Rating } from 'react-native-ratings';
import { Feather } from '@expo/vector-icons'; 
import ModalBuy from '../../components/ModalBuy';
import SkeletonLoading from '../../components/SkeletonLoading';
import ParagraphSkeleton from '../../components/ParagraphSkeleton';
import CommentsSkeleton from '../../components/CommentsSkeleton';
import { showMessage } from 'react-native-flash-message';

interface IComments {
  text: string
}

export function Product({route}:ProductProps) {
  const [data,setData] = useState<DocumentSnapshot<DocumentData>>();
  const [showModal,setShowModal] = useState(false);
  const [isLoading,setIsLoading] = useState(true);
  const [comments,setComments] = useState<IComments[]>([]);
  const [comment,setComment] = useState('');
  const [shouldUpdate,setShouldUpdate] = useState(uuid.v4());
  const {params} = route;

  function cancelModal(){
    setShowModal(false);
  }

  function g(){
    showMessage({
       message: 'Thanks for rating',
       type: "success",
       titleStyle:{fontSize:18},
       duration:2000
      });
  }

  async function sendComment(){
    const commentRef = doc(db, 'product', params?.id as string);
    await updateDoc(commentRef, {
      comments: arrayUnion({
        id: uuid.v4() as string,
        text: comment,
      })
    }).then(()=>{
      setComment('');
      setShouldUpdate(uuid.v4())
    })

  }

  useFocusEffect(
    React.useCallback(() => {
     const getData = async () => {
     const myDoc = doc(db, 'product', params?.id as string);
     const response = await getDoc(myDoc);
     setData(response);
     
     const comments = response.data()?.comments.reverse();
     setComments(comments);
     }
     getData();    
    }, [shouldUpdate])
  );

  useEffect(()=>{
    if(data?.exists()){
     setIsLoading(false);
    }
  }, [data])



  return (
   <Container>
    <KeyboardAvoidingView style={{flex:1}}>
     <ScrollView style={{width:'100%'}}>
      <ContainerContent>
      <ModalBuy isVisible={showModal} cancel={cancelModal} />
      <Content>
      {isLoading ? <SkeletonLoading height={28} width={250} maxWidth={250} /> 
       : <Name>{data?.data()?.name}</Name> }

      {isLoading ? <SkeletonLoading height={147} width={243} maxWidth={245} /> 
       : <Image source={{uri:data?.data()?.url}} resizeMode='stretch' /> }

      {isLoading ? <SkeletonLoading height={35} width={220} maxWidth={250} /> 
       :
      <Rating
        style={{marginTop:12, marginBottom:25}}
        type='custom'
        tintColor='#F84747'
        fractions={0}
        ratingCount={5}
        imageSize={35}
        onFinishRating={g}
      /> }
      {isLoading ? <SkeletonLoading height={28} width={200} maxWidth={250} />
       : <Title>Description</Title> }

      {isLoading ? <ParagraphSkeleton /> 
       : 
      <Description>
        {data?.data()?.description}
      </Description> }
      {isLoading ? <SkeletonLoading marginTop={20} height={45} width={238} maxWidth={250} /> 
       :
       <Button onPress={() => setShowModal(true)}>
        <TextButton>Purchase</TextButton>
       </Button>
      }
      <ContainerComment>
        { isLoading ? <CommentsSkeleton />
          :
          <>
           { data?.data()?.comments.length > 0 ?
             <>
             <SectionName>comments</SectionName>
              <ContentComment>
               {React.Children.toArray(
                 comments.map(({text}:IComments)=>{
                  return <Comment text={text} />
                 })
                )}
              </ContentComment>
              </>
             : null
          }
           </>
        }
      </ContainerComment>
      </Content>
      </ContainerContent>
     </ScrollView>
     {isLoading ? null 
      : 
      <InputComment >
       <InputContainer>
        <Input 
         placeholder='Write a comment...' 
         maxLength={80} 
         onChangeText={(text:string) => setComment(text)}
         value={comment}
         />
        <Feather 
         name="send" 
         size={24} 
         color="black" 
         style={{opacity: comment ? 1 :  .3}} 
         onPress={sendComment}
         disabled={comment ? false : true}
        />
       </InputContainer>
      </InputComment>
     }
    </KeyboardAvoidingView>
   </Container>
  );
}