// import React from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import { Video } from 'expo-av';
// import wandaVideo from '../src/assets/wandanavideo.mp4'; // adjust path based on where this TrendsNewsScreen.js file is
// import newvideo from '../src/assets/new.mp4'; // adjust path based on where this TrendsNewsScreen.js file is
// import showcaseVideo from '../src/assets/showcase.mp4'; // adjust path based on where this TrendsNewsScreen.js file is

// const screenWidth = Dimensions.get('window').width;

// const trendsData = [
//   {
//     type: 'bigStory',
//     title: '🔥 Hot Trendy',
//     image: 'https://i.pinimg.com/736x/00/2b/a4/002ba4d7ef0907be5f1893457ec32e9c.jpg',
//     button: 'Shop Now'
//   },
//    {
//     type: 'video',
//     title: '🎥 Street Style Highlights',
//     videoUrl:  wandaVideo
//   },
  
//   {
//     type: 'tip',
//     title: '📰 Fashion Accessories',
//     description: 'Light layers add style & warmth , play with textures like denim, cotton & silk.',
//     description: 'One bold accessory can transform your outfit. Think chunky necklaces or standout bags!',
//     image: 'https://i.pinimg.com/1200x/a0/d9/b9/a0d9b9d861a0f9e76fbc69b465da306f.jpg'
//   },
//   {
//     type: 'collection',
//     image: 'https://i.pinimg.com/736x/b8/bc/11/b8bc11c88da1decd9985f25b3bb2c82b.jpg'
//   },
//   {
//     type: 'grid',
//     title: '🛍️ Trending Now: Boho Bags',
//     products: [
//       { id: 1, image: 'https://i.pinimg.com/736x/4f/f5/a5/4ff5a5418e505077ae3381ca9897c5db.jpg' },
//       { id: 2, image: 'https://i.pinimg.com/736x/03/46/09/034609c252eede06886aaeceacb02ca1.jpg' },
//       { id: 3, image: 'https://i.pinimg.com/736x/ec/e7/8d/ece78db148df8fb311ece94bda199aed.jpg' },
//     ]
//   },
 
//   {
//     type: 'collect',
//     title: '🌟 Fashion Tips',
//     image: 'https://i.pinimg.com/1200x/ad/75/b7/ad75b7fa9632d543df0f5d6f1ee6df42.jpg'
//   },

// ];

// export default function TrendsNewsScreen() {
//   const renderItem = ({ item }) => {
//     switch (item.type) {
//       case 'bigStory':
//         return (
//           <TouchableOpacity style={styles.bigStory}>
//             <Image source={{ uri: item.image }} style={styles.bigImage} />
//             <View style={styles.overlay}>
//               <Text style={styles.bigTitle}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//               <TouchableOpacity style={styles.button}>
//                 <Text style={styles.buttonText}>{item.button}</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         );
//       case 'tip':
//         return (
//           <View style={styles.tip}>
//             <Image source={{ uri: item.image }} style={styles.tipImage} />
//             <View style={styles.tipText}>
//               <Text style={styles.tipTitle}>{item.title}</Text>
//               <Text style={styles.tipDesc}>{item.description}</Text>
//             </View>
//           </View>
//         );
//       case 'collection':
//         return (
//           <TouchableOpacity style={styles.collection}>
//             <Image source={{ uri: item.image }} style={styles.collectionImage} />
//             <Text style={styles.collectionTitle}>{item.title}</Text>
//             <Text style={styles.collectionDesc}>{item.description}</Text>
//           </TouchableOpacity>
//         );
//       case 'grid':
//         return (
//           <View style={styles.gridContainer}>
//             <Text style={styles.gridTitle}>{item.title}</Text>
//             <View style={styles.gridRow}>
//               {item.products.map(product => (
//                 <Image
//                   key={product.id}
//                   source={{ uri: product.image }}
//                   style={styles.gridImage}
//                 />
//               ))}
//             </View>
//           </View>
//         );
//       case 'video':
//         return (
//           <View style={styles.videoContainer}>
//             <Text style={styles.videoTitle}>{item.title}</Text>

//            <Video
//   source={
//     typeof item.videoUrl === 'string' || item.videoUrl?.uri
//       ? item.videoUrl
//       : item.videoUrl
//   }
//   rate={1.0}
//   volume={0.0}
//   isMuted={false}
//   resizeMode="cover"
//   shouldPlay
//   useNativeControls
//   isLooping
//   style={styles.video}
// />

//           </View>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <FlatList
//       data={trendsData}
//       renderItem={renderItem}
//       keyExtractor={(_, index) => index.toString()}
//       showsVerticalScrollIndicator={false}
//       contentContainerStyle={{ paddingBottom: 20 }}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   bigStory: {
//     marginBottom: 40,
//     marginTop: 20,
//     borderRadius: 2,
//     overflow: 'hidden',
//   },
//   bigImage: {
//     width: screenWidth - 30,
//     height: 240,
//     marginHorizontal: 15,
//     borderRadius: 12,
//   },
//   overlay: {
//     position: 'absolute',
//     bottom: 15,
//     left: 30,
//   },
//   bigTitle: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginTop: 94,
//   },
//   button: {
//     marginTop: 8,
//     backgroundColor: '#7f00ff',
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600'
//   },
//   tip: {
//     flexDirection: 'row',
//     marginHorizontal: 15,
//     marginBottom: 20,
//     alignItems: 'center'
//   },
//   tipImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 12,
//     marginRight: 12
//   },
//   tipText: {
//     flex: 1,
//   },
//   tipTitle: {
//     fontWeight: 'bold',
//     fontSize: 16
//   },
//   tipDesc: {
//     color: '#555',
//     marginTop: 4
//   },
//   collection: {
//     marginHorizontal: 15,
//     marginBottom: 20
//   },
//   collectionImage: {
//     width: screenWidth - 30,
//     height: 160,
//     borderRadius: 12,
//     marginBottom: 8
//   },
//   collectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   collectionDesc: {
//     color: '#666'
//   },
//   gridContainer: {
//     marginHorizontal: 15,
//     marginBottom: 20
//   },
//   gridTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8
//   },
//   gridRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   gridImage: {
//     width: (screenWidth - 60) / 2,
//     height: 100,
//     borderRadius: 10
//   },
//   videoContainer: {
//     marginHorizontal: 15,
//     marginBottom: 30
//   },
//   videoTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8
//   },
//   video: {
//     width: screenWidth - 50,
//     height: 180,
//     borderRadius: 12
//   }
// });


import React from 'react';
import { View,SafeAreaView, Text, FlatList, TouchableOpacity, Image, Linking, StyleSheet } from 'react-native';

const trends = [
  {
    id: '1',
    title: '10 Summer Fashion Trends for 2025',
    imageUrl: 'https://i.pinimg.com/1200x/0b/33/8d/0b338d31f2299998b1276244d7f1b832.jpg',
    link: 'https://www.vogue.co.uk/article/spring-summer-2025-fashion-trends?utm_source=chatgpt.com',
  },
  {
    id: '2',
    title: 'How to Style Your Office Outfits',
    imageUrl: 'https://i.pinimg.com/736x/a4/e2/06/a4e206bd64ad845fa25e131b861af337.jpg',
    link: 'https://www.elle.com/fashion/',
  },
  {
    id: '3',
    title: 'Wearing a Dress Over Skinny Jeans Is the Easiest Way to Jump on the Boho Trend This Summer',
    imageUrl: 'https://media.glamour.com/photos/68793dc00513628ed2c70990/16:9/w_1920,c_limit/2175525877',
    link: 'https://www.glamour.com/story/how-to-wear-a-dress-over-skinny-jeans?utm_source=chatgpt.com',
  },
   {
    id: '4',
    title: 'Mood-Boosting Color Fashion',
    imageUrl: 'https://i.pinimg.com/736x/e4/fb/87/e4fb877486cfcc0961a7da81c716fd03.jpg',
    link: 'https://www.harpersbazaar.com/fashion/fashion-trends-2025',
  },
   {
    id: '5',
    title: 'Top fashion trends for 2025: A look into the Future',
    description:'With a combination of predicted data from Heuritech for Spring/Summer 2025, insights from a fashion analyst, and inspiration drawn from recent runway shows, we can identify the top 10 forecasted key trends expected to make waves in 2025.',
    imageUrl: 'https://i.pinimg.com/736x/ff/47/fd/ff47fd1b7b33cae5cdff015f46673cac.jpg',
    link: 'https://heuritech.com/fashion-trends-2025/?utm_source=chatgpt.com',
  },
   {
    id: '6',
    title: 'These fashion trends will dominate 2025, according to top celebrity stylists',
    imageUrl: 'https://i.pinimg.com/736x/50/0e/ef/500eeff82dcd196245046a641f49d092.jpg',
    link: 'https://pagesix.com/2025/02/26/style/the-top-2025-fashion-trends-according-to-celebrity-stylists/?utm_source=chatgpt.com',
  },
   {
    id: '7',
    title: 'Listen Up, Fashion People—These Are the Only 4 (Very Pretty) Trends You Need to Know From Couture Week',
    imageUrl: 'https://i.pinimg.com/736x/7e/75/3e/7e753e5d8972927f804ac58fa7a06317.jpg',
    link: 'https://www.whowhatwear.com/fashion/runway/paris-couture-fashion-week-july-2025-trends?utm_source=chatgpt.com',
  },
   {
    id: '8',
    title: '7 Key Summer 2025 Fashion Trends You Need to Know Now',
    imageUrl: 'https://i.pinimg.com/736x/a1/b7/77/a1b7772669b52895e84b75da25ee805e.jpg',
    link: 'https://www.glamour.com/story/2025-fashion-trends?utm_source=chatgpt.com',
  },
   {
    id: '9',
    title: 'Fashion Week',
    imageUrl: 'https://i.pinimg.com/736x/2e/6e/ac/2e6eac9f3e8e85955cd45f23fb388832.jpg',
    link: 'https://www.instyle.com/sofia-vergara-corset-top-flared-jeans-11774613?utm_source=chatgpt.com',
  },
   {
    id: '10',
    title: 'Trending Bags You Need This Year',
    imageUrl: 'https://i.pinimg.com/736x/00/2b/a4/002ba4d7ef0907be5f1893457ec32e9c.jpg',
    link: 'https://harpersbazaar.com/top-bags-2025',
  },
   {
    id: '11',
    title: '12 Modern Ways to Wear Y2K Trends',
    imageUrl: 'https://www.instyle.com/thmb/Pp5-OClmAnDd64SzytW7o7Pp9N0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/071725-y2k-fashion-91cfc27cb6e34b4aaa2ed74be78f18c8.jpg',
    link: 'https://www.instyle.com/how-to-wear-y2k-fashion-in-2025-11772272?utm_source=chatgpt.com',
  },

];

export default function TrendScreen() {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => openLink(item.link)}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>🔥 Fashion Trends</Text>
      <FlatList
        data={trends}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 180,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
   header: {
    fontSize: 30,
    fontWeight: '700',
    padding: 16,
    textAlign: 'center',
    marginTop: 30,
    backgroundColor: 'transparent',
    
    color: '#111',
  },
});



