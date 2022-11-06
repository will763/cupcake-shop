import React from 'react';
import { useHomeViewController } from './viewController';
import { ScrollView } from 'react-native';
import CardAllItems from 'components/CardAllItems';
import FeedbackButton from 'components/FeedbackButton';
import SkeletonLoading from 'components/SkeletonLoading';

import { 
  Container, 
  ContainerAll, 
  ContainerContent, 
  ContainerTrending, 
  ContentAll, 
  ContentTrending, 
  Title 
} from './styles';

export function Home() {
  const { isReady,
          allItems,
          trendingItems 
        } = useHomeViewController();

  const skeleton = new Array(9).fill(<SkeletonLoading />);

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