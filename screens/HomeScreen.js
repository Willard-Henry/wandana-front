// import React from 'react';
// import { View, Text, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
// import { Video } from 'expo-av';
// import ProductListComponent from '../components/ProductListComponent';
// import FadeInView from '../components/FadeInView';
// import TopNavBar from '../components/TopNav';

// export default function HomeScreen({ navigation }) {
//   return (

//     <FadeInView>
//       <TopNavBar />
//        <View style={{ flex: 1 }}>
//        <Video
//           source={{
//             uri: '../src/assets/wandanavideo.mp4',
//           }}
//           rate={1.0}
//           volume={1.0}
//           isMuted={true}
//           resizeMode="cover"
//           shouldPlay
//           isLooping
//           style={StyleSheet.absoluteFillObject}
//         />

      

//       <SafeAreaView edges={['middle']} style={{ padding: 45}}>
//         <View style={{ padding: 1 }}></View>
//         <SafeAreaView edges={['middle']} style={{}}>
//           {/* <View style={{ padding: 1 }}></View> */}

//           {/* <View
//             style={{
//               flexDirection: 'row',
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginRight: 0,
//               borderRadius: 20,
//             }}
//           >
//             <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Hot Picks 🔥</Text>
//           </View> */}
//         </SafeAreaView>
//       </SafeAreaView>

//       {/* ✅ Pass navigation here */}
//       <ProductListComponent navigation={navigation} />
// </View>
//     </FadeInView>

//   );
// }


// import React from 'react';
// import { View, SafeAreaView, StyleSheet } from 'react-native';
// import { Video } from 'expo-av';
// import ProductListComponent from '../components/ProductListComponent';
// import FadeInView from '../components/FadeInView';
// import TopNavBar from '../components/TopNav';

// export default function HomeScreen({ navigation }) {
//   return (
//     <FadeInView>
//       <View style={{ flex: 1 }}>
//         {/* Video Background */}
//         <Video
//           source={require('../src/assets/wandanavideo.mp4')}
//           rate={1.0}
//           volume={1.0}
//           isMuted={true}
//           resizeMode="cover"
//           shouldPlay
//           isLooping
//           style={StyleSheet.absoluteFillObject}
//         />

//         {/* Overlay content */}
//         <View style={styles.overlay}>
//           <TopNavBar />
//           <SafeAreaView style={{ flex: 1 }}>
//             <ProductListComponent navigation={navigation} />
//           </SafeAreaView>
//         </View>
//       </View>
//     </FadeInView>
//   );
// }

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: 'transparent', // or 'rgba(255,255,255,0.7)' for semi-transparent
//   },
// });

// import React from 'react';
// import { View, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
// import { Video } from 'expo-av';
// import ProductListComponent from '../components/ProductListComponent';
// import FadeInView from '../components/FadeInView';
// import TopNavBar from '../components/TopNav';

// const { height } = Dimensions.get('window');

// export default function HomeScreen({ navigation }) {
//   return (
//     <FadeInView>
//       <View style={{ flex: 1 }}>
//         {/* Video fills top half */}
//         <View style={{ height: height * 0.5, width: '100%' }}>
//           <Video
//             source={require('../src/assets/wandanavideo.mp4')}
//             rate={1.0}
//             volume={1.0}
//             isMuted={true}
//             resizeMode="cover"
//             shouldPlay
//             isLooping
//             style={StyleSheet.absoluteFillObject}
//           />
//         </View>

//         {/* Overlay content (bottom half) */}
//         <View style={styles.overlay}>
//           <TopNavBar />
//           <SafeAreaView style={{ flex: 1 }}>
//             <ProductListComponent navigation={navigation} />
//           </SafeAreaView>
//         </View>
//       </View>
//     </FadeInView>
//   );
// }

// const styles = StyleSheet.create({
//   overlay: {
//     flex: 1,
//     backgroundColor: 'transparent',
//   },
// });





import React from 'react';
import { View, Text, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
import ProductListComponent from '../components/ProductListComponent';
import FadeInView from '../components/FadeInView';
import TopNavBar from '../components/TopNav';

export default function HomeScreen({ navigation }) {
  return (
    <>
      <TopNavBar />
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/736x/69/80/42/698042753dc96ca3cb4f33296e05ea6b.jpg',
        }}
        style={{ flex: 1 }}
        resizeMode="cover"
      />

      <SafeAreaView edges={['middle']} style={{ padding: 45}}>
        <View style={{ padding: 1 }}></View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 0,
            borderRadius: 20,
            
            
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold' , textAlign: 'center'}}>Hot Picks 🔥</Text>
        </View>
      </SafeAreaView>

      {/* ✅ Pass navigation here */}
      <ProductListComponent navigation={navigation} />
    </>
  );
}