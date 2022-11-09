import React from 'react';
import { KeyboardAvoidingView, ScrollView } from 'react-native';
import Comment from 'components/Comment';
import { ProductProps } from '../../routes/stack/stack.routes';
import { Rating } from 'react-native-ratings';
import { Feather } from '@expo/vector-icons'; 
import ModalBuy from 'components/ModalBuy';
import SkeletonLoading from 'components/SkeletonLoading';
import ParagraphSkeleton from 'components/ParagraphSkeleton';
import CommentsSkeleton from 'components/CommentsSkeleton';
import { useProductViewController } from './viewController';
import { IComments } from './types';

import { 
  Button, 
  Container, 
  ContainerComment, 
  ContainerContent, 
  Content, 
  ContentComment, 
  Description, 
  Image, 
  Input, 
  InputComment, 
  InputContainer, 
  Name, 
  SectionName, 
  TextButton, 
  Title 
} from './styles';

export function Product({route}:ProductProps) {

  const { 
    cancelModal, 
    sendComment, 
    showModal, 
    isLoading, 
    data, 
    setShowModal, 
    comment, 
    setComment, 
    isSending,
    comments } = useProductViewController(route.params.id);

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
        readonly={true}
        type='custom'
        tintColor='#F84747'
        fractions={0}
        ratingCount={5}
        imageSize={35}
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
      <InputComment>
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
         disabled={isSending || (!comment) ? true : false}
        />
       </InputContainer>
      </InputComment>
     }
    </KeyboardAvoidingView>
   </Container>
  );
}