import { useFocusEffect } from '@react-navigation/native';
import { collection, DocumentData, getDocs, orderBy, query} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import CardAllItems from '../../components/CardAllItems';
import FeedbackButton from '../../components/FeedbackButton';
import SkeletonLoading from '../../components/SkeletonLoading';
import { db } from '../../config/firebase.config';
import { Container, ContainerAll, ContainerContent, ContainerTrending, ContentAll, ContentTrending, Title } from './styles';

export function Home() {
  const [allItems, setAllItems] = useState<Array<DocumentData>>([]);
  const [trendingItems, setTrendingItems] = useState<Array<DocumentData>>([]);
  const [isReady,setIsReady] = useState(false);

  const skeleton = new Array(9).fill(<SkeletonLoading />);
  
  useFocusEffect(
    React.useCallback(() => {
     const getData = async () => {
      const getAllProduct = query(collection(db, "product"),orderBy("create_at", "desc"));
    
      const docs = await getDocs(getAllProduct);
      const documents: Array<DocumentData> = [];
      docs.forEach((doc)=>{
        documents.push(doc);
      });

      setAllItems(documents);
      
      const trending = documents.sort((a,b) => b.data().ratings.length - a.data().ratings.length )
                                .slice(0,3);
      setTrendingItems(trending); 
     }
     getData();    
    }, [])
  );

  useEffect(()=>{
    if(allItems && trendingItems){
      const id = setTimeout(()=> {
       setIsReady(true);
      }, 2000);

      return () => clearTimeout(id);
    }

  },[allItems,trendingItems])

  return ( 
      <Container>
       <FeedbackButton />
       <ScrollView>
       <ContainerContent>
        <ContainerTrending>
         {isReady ? <Title>trending...</Title>
           : <SkeletonLoading width={'45%'} maxWidth={145} height={25}  />}
        <ContentTrending>
         { isReady ?
          React.Children.toArray(
           trendingItems.map(doc => {
            return <CardAllItems  id={doc.id} url={doc.data().url} />
           })
         )
         :
          React.Children.toArray(
           skeleton.slice(0,3).map(item => {
            return item;
           })
         )
        }
        </ContentTrending>
       </ContainerTrending>
       <ContainerAll>
        {isReady ? <Title >list all of products...</Title>
          : <SkeletonLoading width={'55%'} height={25} maxWidth={180}  />}
        <ContentAll>
         {isReady ?
          React.Children.toArray(
           allItems.map(doc => {
            return <CardAllItems  id={doc.id} url={doc.data().url} />
           })
         )
         :
          React.Children.toArray(
           skeleton.map(item => {
            return item;
           })
         )
        }
        </ContentAll>
       </ContainerAll>
      </ContainerContent>
     </ScrollView>
    </Container>
  )}