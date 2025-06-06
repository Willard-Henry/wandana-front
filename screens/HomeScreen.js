import React from 'react';
import { View, Text, ScrollView, SafeAreaView ,ImageBackground} from 'react-native';
import ProductListComponent from '../components/ProductListComponent';
export default function HomeScreen() {

  return (
    <>
       <ImageBackground
      source={{ uri: 'https://img.freepik.com/free-psd/sale-banner-template-design_23-2149198210.jpg?t=st=1749150237~exp=1749153837~hmac=48e4d9899ce196662aa8539b3253aca91da97fd80f2b391fd4ab2ede094c5ccb&w=1380' }} // Replace with your image URL
      style={{ flex: 1 }}
      resizeMode="cover"  
      
      ></ImageBackground>
      <SafeAreaView edges={['middle']} style={{  padding: 10}}>
        
          <View style={{ padding: 1 }}>
            
          </View>
          
            
        <View style={{ flexDirection:' row', alignItems: 'center', justifyContent: 'center', marginright: 90 }}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Hot Picks 🔥</Text>
        </View>
        
      </SafeAreaView>

      <ProductListComponent />



    </>

  );
}
