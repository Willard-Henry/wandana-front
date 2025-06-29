// import React, { useRef, useState } from 'react';
// import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity, Animated } from 'react-native';

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

//   const handleButtonPress = () => {
//     if (index === slides.length - 1) {
//       onFinish();
//     } else {
//       flatListRef.current.scrollToIndex({ index: index + 1 });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
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
//         renderItem={({ item }) => (
//           <View style={styles.slide}>
//             <Image source={item.image} style={styles.image} />
//             <Text style={styles.title}>{item.title}</Text>
//             <Text style={styles.desc}>{item.description}</Text>
//           </View>
//         )}
//         keyExtractor={item => item.key}
//         extraData={index}
//       />
//       <View style={styles.dots}>
//         {slides.map((_, i) => (
//           <View
//             key={i}
//             style={[
//               styles.dot,
//               { backgroundColor: i === index ? '#7f00ff' : '#ccc' },
//             ]}
//           />
//         ))}
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
//         <Text style={styles.buttonText}>
//           {index === slides.length - 1 ? 'Get Started' : 'Skip'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
//   slide: { width, alignItems: 'center', justifyContent: 'center', padding: 30 },
//   image: { width: 220, height: 220, marginBottom: 30, resizeMode: 'contain' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#7f00ff' },
//   desc: { fontSize: 16, color: '#333', textAlign: 'center', marginBottom: 20 },
//   dots: { flexDirection: 'row', marginBottom: 30 },
//   dot: { width: 10, height: 10, borderRadius: 5, margin: 5 },
//   button: { backgroundColor: '#7f00ff', padding: 14, borderRadius: 8, width: '80%', alignItems: 'center', marginBottom: 35 },
//   buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
// });







import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Dimensions, TouchableOpacity, Animated } from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Discover Trends',
    description: 'Shop the latest fashion trends and exclusive deals.',
    image: require('../src/assets/onboarding1.png'),
  },
  {
    key: '2',
    title: 'Fast Delivery',
    description: 'Get your orders delivered quickly and reliably.',
    image: require('../src/assets/onboarding2.png'),
  },
  {
    key: '3',
    title: 'Easy Returns',
    description: 'Hassle-free returns and responsive support.',
    image: require('../src/assets/onboarding3.png'),
  },
];

export default function OnboardingScreen({ onFinish }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const goToSlide = (slideIndex) => {
    flatListRef.current.scrollToIndex({ index: slideIndex });
  };

  const handleNext = () => {
    if (index === slides.length - 1) {
      onFinish();
    } else {
      goToSlide(index + 1);
    }
  };

  const handleBack = () => {
    if (index > 0) {
      goToSlide(index - 1);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onMomentumScrollEnd={e => {
          const idx = Math.round(e.nativeEvent.contentOffset.x / width);
          setIndex(idx);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
        extraData={index}
      />
      <View style={styles.dots}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: i === index ? '#7f00ff' : '#ccc' },
            ]}
          />
        ))}
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, index === 0 && styles.buttonDisabled]}
          onPress={handleBack}
          disabled={index === 0}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {index === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  slide: { width, alignItems: 'center', justifyContent: 'center', padding: 30 },
  image: { width: 220, height: 220, marginBottom: 30, resizeMode: 'contain' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#7f00ff' },
  desc: { fontSize: 16, color: '#333', textAlign: 'center', marginBottom: 20 },
  dots: { flexDirection: 'row', marginBottom: 30 },
  dot: { width: 10, height: 10, borderRadius: 5, margin: 5 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginBottom: 50 },
  button: { backgroundColor: '#7f00ff', padding: 12, borderRadius: 8, width: '48%', alignItems: 'center' },
  buttonDisabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});