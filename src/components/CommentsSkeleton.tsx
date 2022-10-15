import React from 'react';
import { StyleSheet, View } from 'react-native';
import SkeletonLoading from './SkeletonLoading';

export default function() {
  return (
    <View>
      <SkeletonLoading height={25} maxWidth={140} width={140} />
      <View style={{marginTop:20}}>
        <View style={styles.ContainerComment} >
         <View style={styles.Photo}>
         <SkeletonLoading height={40} width={40} borderRadius={100} />
         </View>
         <View>
         <SkeletonLoading height={20} width={200} maxWidth={200} />
         <SkeletonLoading height={20} width={200} maxWidth={200} />
         </View>
        
        </View>
        <View style={styles.ContainerComment} >
         <View style={styles.Photo}>
         <SkeletonLoading height={40} width={40} borderRadius={100} />
         </View>
         <View>
         <SkeletonLoading height={20} width={200} maxWidth={200} />
         <SkeletonLoading height={20} width={200} maxWidth={200} />
         </View>
        </View>
        <View style={styles.ContainerComment} >
         <View style={styles.Photo}>
         <SkeletonLoading height={40} width={40}  borderRadius={100} />
         </View>
         <View>
         <SkeletonLoading height={20} width={200} maxWidth={200} />
         <SkeletonLoading height={20} width={200} maxWidth={200} />
         </View>
        </View>
        <View style={styles.ContainerComment} >
         <View style={styles.Photo} >
         <SkeletonLoading height={40} width={40} borderRadius={100} />
         </View>
         <View>
         <SkeletonLoading height={20} width={200} maxWidth={200} />
         <SkeletonLoading height={20} width={200} maxWidth={200} />
         </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    ContainerComment: {
      flexDirection: 'row',
      alignItems:'center',
      marginBottom: 25
    },
    Photo: {
      alignSelf:'flex-start'
    }
})