
 import React, { useState } from 'react';
 import { View, Text, TouchableOpacity,FlatList } from 'react-native';
 import ProductListComponent from '../components/ProductListComponent';
import TabItem from '../components/TabItem';
import TopNav from '../components/TopNav';

const subcategories = [
  'Official dress',
  'Casual dress',
  'Beachwear',
  ' Sportswear',
  'Nightwear',
  'Footwear',
  'Bags',
  'Jewelry',
  'Electronics',
  ' Furniture'

];

export default function CategoryScreen() {
  const [selected, setSelected] = useState(subcategories[0]);
  return (

     <View style={{ flex: 1 }}>
      <TopNav />
      <View style={{ flex:1, flexDirection:'row' }}>
       <View style={{ width: '26%', backgroundColor: '#f0f0f0', paddingVertical: 10 }}>
        <FlatList
            data={subcategories}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelected(item)}
                style={{
                  paddingVertical: 4,
                  paddingHorizontal: 1,
                  backgroundColor: selected === item ? '#333' : 'transparent',
                  borderRadius: 8,
                  marginBottom: 8,
                  marginTop:20
                }}
              >
                <Text style={{ color: selected === item ? '#fff' : '#333', fontWeight: 'bold' }}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />

      </View>
    
      <View style={{ flex: 1, padding:0,backgroundColor:'white'}}>
      <ProductListComponent />
      
       </View>
     </View>
      <TabItem />
      
    </View>
    
  
  );
}


