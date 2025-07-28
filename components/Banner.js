// import React, { useRef, useEffect, useState } from 'react';
// import {
//     View,
//     FlatList,
//     Text,
//     StyleSheet,
//     Dimensions,
//     ImageBackground,
//     TouchableOpacity,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width } = Dimensions.get('window');
// const BANNER_HEIGHT = 260;

// const banners = [
//     {
//         id: '1',
//         title: 'Summer Sale',
//         description: 'Up to 50% off on selected items!',
//         image:
//             'https://img.freepik.com/free-psd/fashion-sale-banner-template_23-2148685205.jpg',
//     },
//     {
//         id: '2',
//         title: 'Flash Deals',
//         description: 'Limited time discounts!',
//         image:
//             'https://img.freepik.com/free-psd/black-friday-super-sale-banner-template_23-2148695762.jpg',
//     },
//     {
//         id: '3',
//         title: 'New Arrivals',
//         description: 'Check out the latest trends.',
//         image:
//             'https://img.freepik.com/free-vector/gradient-fashion-sale-template_23-2148784201.jpg',
//     },
// ];

// const BannerCarousel = () => {
//     const flatListRef = useRef(null);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Auto scroll every 4 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             const nextIndex = (currentIndex + 1) % banners.length;
//             flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
//             setCurrentIndex(nextIndex);
//         }, 4000);

//         return () => clearInterval(interval);
//     }, [currentIndex]);

//     const renderBanner = ({ item }) => (
//         <TouchableOpacity activeOpacity={0.9}>
//             <ImageBackground
//                 source={{ uri: item.image }}
//                 style={styles.banner}
//                 imageStyle={{ borderRadius: 16 }}
//                 linearBlurRadius={{ radius: 7, alpha: 1 }}
//             >
//                 <LinearGradient
//                     colors={['rgba(0,0,0,0.7)', 'transparent']}
//                     start={{ x: 0, y: 1 }}
//                     end={{ x: 0.8, y: 0 }}
//                     style={styles.gradient}
//                 >
//                     <Text style={styles.title}>{item.title}</Text>
//                     <Text style={styles.description}>{item.description}</Text>
//                 </LinearGradient>
//             </ImageBackground>
//         </TouchableOpacity>
//     );

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 ref={flatListRef}
//                 data={banners}
//                 renderItem={renderBanner}
//                 keyExtractor={(item) => item.id}
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         height: BANNER_HEIGHT,
//         marginTop: 0,
//         marginBottom: 0,
//     },
//     banner: {
//         width: width - 0,
//         height: BANNER_HEIGHT,
//         marginHorizontal: 0,
//         justifyContent: 'flex-end',
//         borderRadius: 10,
//         overflow: 'hidden',
//         blurRadius: 65,
//     },
//     gradient: {
//         padding: 15,
//         borderRadius: 6,
//     },
//     title: {
//         color: '#fff',
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     description: {
//         color: '#eee',
//         fontSize: 14,
//         marginTop: 4,
//     },
// });

// export default BannerCarousel;

//////////////////////////////////////
////////////////////////////////////////

// import React, { useRef, useEffect, useState } from 'react';
// import {
//     View,
//     FlatList,
//     Text,
//     StyleSheet,
//     Dimensions,
//     ImageBackground,
//     TouchableOpacity,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { BlurView } from 'expo-blur';

// const { width } = Dimensions.get('window');
// const BANNER_HEIGHT = 260;

// const banners = [
//     {
//         id: '1',
//         title: 'Summer Sale',
//         description: 'Up to 50% off on selected items!',
//         image:
//             'https://img.freepik.com/free-psd/fashion-sale-banner-template_23-2148685205.jpg',
//     },
//     {
//         id: '2',
//         title: 'Flash Deals',
//         description: 'Limited time discounts!',
//         image:
//             'https://img.freepik.com/free-psd/black-friday-super-sale-banner-template_23-2148695762.jpg',
//     },
//     {
//         id: '3',
//         title: 'New Arrivals',
//         description: 'Check out the latest trends.',
//         image:
//             'https://img.freepik.com/free-vector/gradient-fashion-sale-template_23-2148784201.jpg',
//     },
// ];

// const BannerCarousel = () => {
//     const flatListRef = useRef(null);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const nextIndex = (currentIndex + 1) % banners.length;
//             flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
//             setCurrentIndex(nextIndex);
//         }, 4000);

//         return () => clearInterval(interval);
//     }, [currentIndex]);

//     const renderBanner = ({ item }) => (
//         <TouchableOpacity activeOpacity={0.9}>
//             {/* <ImageBackground
//                 source={{ uri: item.image }}
//                 style={styles.banner}
//                 imageStyle={{ borderRadius: 16 }}
//             >

//                 <BlurView intensity={60} tint="dark" style={styles.topBlur} />

//                 <LinearGradient
//                     colors={['rgba(0,0,0,0.7)', 'transparent']}
//                     start={{ x: 0, y: 1 }}
//                     end={{ x: 0.8, y: 0 }}
//                     style={styles.gradient}
//                 >
//                     <Text style={styles.title}>{item.title}</Text>
//                     <Text style={styles.description}>{item.description}</Text>
//                 </LinearGradient>
//             </ImageBackground> */}

//             <ImageBackground
//                 source={{ uri: item.image }}
//                 style={styles.banner}
//                 imageStyle={{ borderRadius: 16 }}
//             >
//                 {/* Simulated blur using top gradient */}
//                 <LinearGradient
//                     colors={['rgba(0,0,0,0.5)', 'transparent']}
//                     start={{ x: 0.5, y: 0 }}
//                     end={{ x: 0.5, y: 0.4 }}
//                     style={styles.topFade}
//                 />

//                 {/* Bottom gradient for text */}
//                 <LinearGradient
//                     colors={['rgba(0,0,0,0.7)', 'transparent']}
//                     start={{ x: 0, y: 1 }}
//                     end={{ x: 0.8, y: 0 }}
//                     style={styles.gradient}
//                 >
//                     <Text style={styles.title}>{item.title}</Text>
//                     <Text style={styles.description}>{item.description}</Text>
//                 </LinearGradient>
//             </ImageBackground>

//         </TouchableOpacity>
//     );

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 ref={flatListRef}
//                 data={banners}
//                 renderItem={renderBanner}
//                 keyExtractor={(item) => item.id}
//                 horizontal
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         height: BANNER_HEIGHT,
//     },
//     banner: {
//         width: width,
//         height: BANNER_HEIGHT,
//         justifyContent: 'flex-end',
//         borderRadius: 16,
//         overflow: 'hidden',
//     },
//     topBlur: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         height: 80,
//         zIndex: 1,
//     },
//     gradient: {
//         padding: 15,
//         borderRadius: 6,
//         zIndex: 2,
//     },
//     title: {
//         color: '#fff',
//         fontSize: 20,
//         fontWeight: 'bold',
//     },
//     description: {
//         color: '#eee',
//         fontSize: 14,
//         marginTop: 4,
//     },
//     topFade: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         height: 80,
//         zIndex: 1,
//         borderTopLeftRadius: 16,
//         borderTopRightRadius: 16,
//     },

// });

// export default BannerCarousel;

///////////////////////////////////////////
///////////////////////////////////////////

import React, { useRef, useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const BANNER_HEIGHT = 260;

const banners = [
  {
    id: "1",
    title: "Summer Sale",
    description: "Up to 50% off on selected items!",
    image:
      "https://img.freepik.com/free-psd/fashion-sale-banner-template_23-2148685205.jpg",
  },
  {
    id: "2",
    title: "Flash Deals",
    description: "Limited time discounts!",
    image:
      "https://img.freepik.com/free-psd/black-friday-super-sale-banner-template_23-2148695762.jpg",
  },
  {
    id: "3",
    title: "New Arrivals",
    description: "Check out the latest trends.",
    image:
      "https://img.freepik.com/free-vector/gradient-fashion-sale-template_23-2148784201.jpg",
  },
];

const BannerCarousel = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const renderBanner = ({ item }) => (
    <TouchableOpacity activeOpacity={0.9}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.banner}
        imageStyle={{ borderRadius: 16 }}
      >
        {/* Simulated Top Blur Effect */}
        <LinearGradient
          colors={[
            "rgba(0,0,0,0.85)",
            "rgba(0,0,0,0.6)",
            "rgba(0,0,0,0.3)",
            "transparent",
          ]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={styles.topFade}
        />

        {/* Bottom Gradient for Text */}
        <LinearGradient
          colors={["rgba(0,0,0,0.7)", "transparent"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0.8, y: 0 }}
          style={styles.gradient}
        >
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={banners}
        renderItem={renderBanner}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: BANNER_HEIGHT,
  },
  banner: {
    width: width,
    height: BANNER_HEIGHT,
    justifyContent: "flex-end",
    borderRadius: 16,
    overflow: "hidden",
  },
  topFade: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 140, // Tall fade
    zIndex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  gradient: {
    padding: 15,
    zIndex: 2,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "#eee",
    fontSize: 14,
    marginTop: 4,
  },
});

export default BannerCarousel;
