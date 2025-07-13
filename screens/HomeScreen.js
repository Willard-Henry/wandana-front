import React from 'react';
import { View, Text, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import ProductListComponent from '../components/ProductListComponent';
import FadeInView from '../components/FadeInView';
import TopNavBar from '../components/TopNav';

export default function HomeScreen({ navigation }) {
  return (

    <FadeInView>
      <TopNavBar />
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/736x/69/80/42/698042753dc96ca3cb4f33296e05ea6b.jpg',
        }}
        style={{ flex: 1 }}
        resizeMode="cover"
      />

      <SafeAreaView edges={['middle']} style={{}}>
        {/* <View style={{ padding: 1 }}></View> */}

        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 90,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Hot Picks 🔥</Text>
        </View> */}
      </SafeAreaView>

      {/* ✅ Pass navigation here */}
      <ProductListComponent navigation={navigation} />

    </FadeInView>

  );
}