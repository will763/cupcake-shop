import React from 'react';
import { StyleSheet, View } from 'react-native';
import SkeletonLoading from './SkeletonLoading';

export default function() {
  return (
    <View accessibilityLabel='parent-skeleton' style={styles.container}>
     <SkeletonLoading height={10} width={250} maxWidth={250} />
     <SkeletonLoading height={10} width={250} maxWidth={250} />
     <SkeletonLoading height={10} width={240} maxWidth={250} />
     <SkeletonLoading height={10} width={230} maxWidth={250} />
     <SkeletonLoading height={10} width={180} maxWidth={250} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:115,
        alignItems:'center',
    }
})