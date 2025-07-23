

import React from 'react';
import { View, StyleSheet } from 'react-native';
import FadeInView from '../components/FadeInView';
import TopNavBar from '../components/TopNav';
import Banner from '../components/Banner'; // assuming you renamed Banner to this
import ProductListComponent from '../components/ProductListComponent';

export default function HomeScreen({ navigation }) {
  return (
    <FadeInView style={styles.container}>
      {/* Banner with overlaid TopNav */}
      <View style={styles.bannerContainer}>
        <Banner />
        <View style={styles.topNavOverlay}>
          <TopNavBar />
        </View>
      </View>

      {/* Product list starts after */}
      <ProductListComponent navigation={navigation} showBanner={false} />
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer: {
    position: 'relative',
    height: 290, // or whatever your BANNER_HEIGHT is
    backgroundColor: 'transparent', // optional background color
  },
  topNavOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 0,
    marginBottom: 10,
    backgroundColor: 'transparent' // adjust based on your TopNav height
    // ensure it overlays the banner
    // optional: add padding if you want to offset it from top

  },
});
