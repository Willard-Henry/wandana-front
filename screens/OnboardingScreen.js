

// import React, { useRef, useState } from 'react';
// import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';

// const { width } = Dimensions.get('window');

// const slides = [
//   {
//     key: '1',
//     title: 'Discover Trends',
//     description: 'Shop the latest fashion trends and exclusive deals.',
//     image: require('../src/assets/onboarding1.png'),
//   },
//   {
//     key: '2',
//     title: 'Fast Delivery',
//     description: 'Get your orders delivered quickly and reliably.',
//     image: require('../src/assets/onboarding2.png'),
//   },
//   {
//     key: '3',
//     title: 'Easy Returns',
//     description: 'Hassle-free returns and responsive support.',
//     image: require('../src/assets/onboarding3.png'),
//   },
// ];

// export default function OnboardingScreen({ onFinish }) {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const [index, setIndex] = useState(0);
//   const flatListRef = useRef(null);

//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     { useNativeDriver: false }
//   );

//   const goToSlide = (slideIndex) => {
//     flatListRef.current.scrollToIndex({ index: slideIndex });
//   };

//   const handleNext = () => {
//     if (index === slides.length - 1) {
//       onFinish(); // Directly call onFinish, no fadeAnim
//     } else {
//       goToSlide(index + 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.FlatList
//         ref={flatListRef}
//         data={slides}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onScroll={handleScroll}
//         onMomentumScrollEnd={e => {
//           const idx = Math.round(e.nativeEvent.contentOffset.x / width);
//           setIndex(idx);
//         }}
//         renderItem={({ item, index: slideIndex }) => {
//           // Parallax for image
//           const inputRange = [
//             (slideIndex - 1) * width,
//             slideIndex * width,
//             (slideIndex + 1) * width,
//           ];
//           const translateX = scrollX.interpolate({
//             inputRange,
//             outputRange: [-40, 0, 40],
//             extrapolate: 'clamp',
//           });
//           // Fade and slide for text
//           const opacity = scrollX.interpolate({
//             inputRange,
//             outputRange: [0, 1, 0],
//             extrapolate: 'clamp',
//           });
//           const translateY = scrollX.interpolate({
//             inputRange,
//             outputRange: [40, 0, -40],
//             extrapolate: 'clamp',
//           });
//           return (
//             <View style={styles.slide}>
//               <Animated.Image
//                 source={item.image}
//                 style={[styles.image, { transform: [{ translateX }] }]}
//               />
//               <Animated.View style={{ width: '100%', alignItems: 'center', opacity, transform: [{ translateY }] }}>
//                 <Text style={styles.title}>{item.title}</Text>
//                 <Text style={styles.desc}>{item.description}</Text>
//               </Animated.View>
//             </View>
//           );
//         }}
//         keyExtractor={item => item.key}
//         extraData={index}
//       />
//       <View style={styles.dots}>
//         {slides.map((_, i) => {
//           const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
//           const scale = scrollX.interpolate({
//             inputRange,
//             outputRange: [1, 1.5, 1],
//             extrapolate: "clamp",
//           });
//           return (
//             <Animated.View
//               key={i}
//               style={[
//                 styles.dot,
//                 { backgroundColor: i === index ? '#7f00ff' : '#ccc', transform: [{ scale }] },
//               ]}
//             />
//           );
//         })}
//       </View>
//       <View style={[styles.buttonRow, { justifyContent: 'center' }]}>
//         <TouchableOpacity style={[styles.button, { width: '80%' }]} onPress={handleNext}>
//           <Text style={styles.buttonText}>
//             {index === slides.length - 1 ? 'Get Started' : 'Next'}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
//   slide: { width, alignItems: 'center', justifyContent: 'center', padding: 30 },
//   image: { width: 220, height: 220, marginBottom: 30, resizeMode: 'contain' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#7f00ff' },
//   desc: {
//     fontSize: 16,
//     color: '#333',
//     textAlign: 'center',
//     marginBottom: 20
//   },
//   dots: {
//     flexDirection: 'row',
//     marginBottom: 30
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     margin: 5
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     width: '80%',
//     marginBottom: 50
//   },
//   button: {
//     backgroundColor: '#7f00ff',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center'
//   },
//   buttonDisabled: {
//     backgroundColor: '#ccc'
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   }
// });



// import React, { use, useRef, useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   Animated,
//   FlatList,
// } from 'react-native';
// import { useTranslation } from 'react-i18next';

// const { width } = Dimensions.get('window');
// const {t} = useTranslation();

// const slides = [
//   {
//     key: '1',
//     title: 'Discover Trends',
//     description: 'Shop the latest fashion trends and exclusive deals.',
//     image: require('../src/assets/onboarding1.png'),
//   },
//   {
//     key: '2',
//     title: 'Fast Delivery',
//     description: 'Get your orders delivered quickly and reliably.',
//     image: require('../src/assets/onboarding2.png'),
//   },
//   {
//     key: '3',
//     title: 'Easy Returns',
//     description: 'Hassle-free returns and responsive support.',
//     image: require('../src/assets/onboarding3.png'),
//   },
// ];

// export default function OnboardingScreen({ onFinish }) {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const flatListRef = useRef(null);
//   const [index, setIndex] = useState(0);

//   const handleScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     { useNativeDriver: false }
//   );

//   const handleNext = () => {
//     if (index === slides.length - 1) {
//       onFinish(); // Trigger the callback to move past onboarding
//     } else {
//       flatListRef.current.scrollToIndex({ index: index + 1 });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.FlatList
//         ref={flatListRef}
//         data={slides}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.key}
//         onScroll={handleScroll}
//         onMomentumScrollEnd={(e) => {
//           const idx = Math.round(e.nativeEvent.contentOffset.x / width);
//           setIndex(idx);
//         }}
//         getItemLayout={(data, i) => ({
//           length: width,
//           offset: width * i,
//           index: i,
//         })}
//         renderItem={({ item, index: slideIndex }) => {
//           const inputRange = [
//             (slideIndex - 1) * width,
//             slideIndex * width,
//             (slideIndex + 1) * width,
//           ];

//           const translateX = scrollX.interpolate({
//             inputRange,
//             outputRange: [-40, 0, 40],
//             extrapolate: 'clamp',
//           });

//           const opacity = scrollX.interpolate({
//             inputRange,
//             outputRange: [0, 1, 0],
//             extrapolate: 'clamp',
//           });

//           const translateY = scrollX.interpolate({
//             inputRange,
//             outputRange: [30, 0, -30],
//             extrapolate: 'clamp',
//           });

//           return (
//             <View style={styles.slide}>
//               <Animated.Image
//                 source={item.image}
//                 style={[styles.image, { transform: [{ translateX }] }]}
//               />
//               <Animated.View style={{ opacity, transform: [{ translateY }] }}>
//                 <Text style={styles.title}>{item.title}</Text>
//                 <Text style={styles.description}>{item.description}</Text>
//               </Animated.View>
//             </View>
//           );
//         }}
//       />

//       {/* Dots */}
//       <View style={styles.dotsContainer}>
//         {slides.map((_, i) => {
//           const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
//           const scale = scrollX.interpolate({
//             inputRange,
//             outputRange: [1, 1.5, 1],
//             extrapolate: 'clamp',
//           });

//           return (
//             <Animated.View
//               key={i}
//               style={[
//                 styles.dot,
//                 {
//                   backgroundColor: i === index ? '#7f00ff' : '#ccc',
//                   transform: [{ scale }],
//                 },
//               ]}
//             />
//           );
//         })}
//       </View>

//       {/* Next Button */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={handleNext}>
//           <Text style={styles.buttonText}>
//             {index === slides.length - 1 ? 'Get Started' : 'Skip'}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   slide: {
//     width,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 30,
//   },
//   image: {
//     width: 240,
//     height: 240,
//     marginBottom: 30,
//     resizeMode: 'contain',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#7f00ff',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     color: '#444',
//     textAlign: 'center',
//     paddingHorizontal: 10,
//   },
//   dotsContainer: {
//     flexDirection: 'row',
//     marginTop: 20,
//     marginBottom: 30,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     marginHorizontal: 6,
//   },
//   buttonContainer: {
//     width: '80%',
//     marginBottom: 50,
//   },
//   button: {
//     backgroundColor: '#7f00ff',
//     paddingVertical: 14,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Animated,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');

export default function OnboardingScreen({ onFinish }) {
  const { t } = useTranslation();

  const slides = [
    { key: '1', titleKey: 'onboarding.title1', descriptionKey: 'onboarding.description1', image: require('../src/assets/onboarding1.png') },
    { key: '2', titleKey: 'onboarding.title2', descriptionKey: 'onboarding.description2', image: require('../src/assets/onboarding2.png') },
    { key: '3', titleKey: 'onboarding.title3', descriptionKey: 'onboarding.description3', image: require('../src/assets/onboarding3.png') },
  ];

  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [index, setIndex] = useState(0);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const handleNext = () => {
    if (index === slides.length - 1) {
      onFinish();
    } else {
      flatListRef.current.scrollToIndex({ index: index + 1 });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.key}
        onScroll={handleScroll}
        onMomentumScrollEnd={(e) => {
          const idx = Math.round(e.nativeEvent.contentOffset.x / width);
          setIndex(idx);
        }}
        getItemLayout={(data, i) => ({
          length: width,
          offset: width * i,
          index: i,
        })}
        renderItem={({ item, index: slideIndex }) => {
          const inputRange = [
            (slideIndex - 1) * width,
            slideIndex * width,
            (slideIndex + 1) * width,
          ];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-40, 0, 40],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          });

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [30, 0, -30],
            extrapolate: 'clamp',
          });

          return (
            <View style={styles.slide}>
              <Animated.Image
                source={item.image}
                style={[styles.image, { transform: [{ translateX }] }]}
              />
              <Animated.View style={{ opacity, transform: [{ translateY }] }}>
                <Text style={styles.title}>{t(item.titleKey)}</Text>
                <Text style={styles.description}>{t(item.descriptionKey)}</Text>
              </Animated.View>
            </View>
          );
        }}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {slides.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={i}
              style={[
                styles.dot,
                {
                  backgroundColor: i === index ? '#7f00ff' : '#ccc',
                  transform: [{ scale }],
                },
              ]}
            />
          );
        })}
      </View>

      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {index === slides.length - 1 ? t('onboarding.getStarted') : t('onboarding.skip')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7f00ff',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#7f00ff',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
