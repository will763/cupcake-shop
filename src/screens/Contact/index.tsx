import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Container, ContainerContent, FieldInfo, FieldText, Information, Title } from './styles';

import CopyArea from '../../components/CopyArea';

export function Contact() {

  return (
    <Container>
     <ScrollView 
      contentContainerStyle={{
        flexGrow:1,
        justifyContent:"center", 
        alignItems:"center"
      }}>
      <ContainerContent>
        <Title>Contact us</Title>
        <Information>
         <FieldInfo>
          <FieldText>example@email.com</FieldText>
          <CopyArea text='example@email.com' type='email' />
         </FieldInfo>
         <FieldInfo>
          <FieldText>xx xx xxxxxxxxx</FieldText>
          <CopyArea text='xx xx xxxxxxxxx' type='number' />
         </FieldInfo>
        </Information>
      </ContainerContent>
     </ScrollView>
    </Container>
  );
}