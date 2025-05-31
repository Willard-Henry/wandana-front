import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import TopNav from '../components/TopNav';
import ProductListComponent from '../components/ProductListComponent';
import TabItem from '../components/TabItem';

export default function HomeScreen() {

  return (
    <>
      <SafeAreaView edges={['top']} style={{ flex: 1 }}>
        <TopNav />
        <TabItem />
        <Text>Card , Product and API calls</Text>
      </SafeAreaView>

      <ProductListComponent />



    </>

  );
}
