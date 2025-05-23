import React from 'react';
import { View, Text, ScrollView ,SafeAreaView} from 'react-native';
import TopNav from '../components/TopNav';

export default function HomeScreen() {
  return (
    <>
     <SafeAreaView edges={['top']} style={{ flex: 1 }}>
    <TopNav />
    <Text>Card , Product and API calls</Text>
  </SafeAreaView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
           
      {/* <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false} style={{ width: '100%' }}>
        <View style={{ height: 100, backgroundColor: 'lightblue', margin: 10 }}>
          <Text>Scroll me!</Text>
        </View>
        <View style={{ height: 100, backgroundColor: 'lightgreen', margin: 10 }}>
          <Text>Scroll me too!</Text>
        </View>
        <View style={{ height: 100, backgroundColor: 'lightcoral', margin: 10 }}>
          <Text>Don't forget to scroll me!</Text>
        </View>

      </ScrollView> */}

    </View>
    </>

  );
}
