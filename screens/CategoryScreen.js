import React from 'react';
import { View, Text } from 'react-native';
import ProductListComponent from '../components/ProductListComponent';

export default function CategoryScreen() {
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Category Screen</Text>
      </View>
      <ProductListComponent />
    </>
  );
}