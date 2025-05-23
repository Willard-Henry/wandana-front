// components/TopNavBar.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabItem from './TabItem'; // import the new component

const tabs = ['All', 'Women', 'Lingerie & Sleep', 'Men', 'Shoes', 'Men', 'Bra', 'Jewelry & Acc', 'Curve', 'Home', 'Bags', 'Sports', 'Electronics'];

export default function TopNavBar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.container}>
      {/* Top icons + search */}
      <View style={styles.topRow}>
        <Icon name="mail-outline" size={24} />
        <Icon name="calendar-outline" size={24} style={styles.icon} />
        <View style={styles.searchBar}>
          <Icon name="search-outline" size={20} />
          <TextInput placeholder="Shorts" style={styles.input} />
          <Icon name="camera-outline" size={20} />
        </View>
        <Icon name="heart-outline" size={24} style={styles.icon} />
      </View>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
        {tabs.map((tab, idx) => (
          <TabItem
            key={idx}
            label={tab}
            isActive={activeTab === idx}
            onPress={() => setActiveTab(idx)}
          />
        ))}
      </ScrollView>

      {/* Banner */}
      <View style={styles.bannerWrapper}>
        <Image
          source={{ uri: 'https://example.com/banner.jpg' }}
          style={styles.banner}
        />
        <Image
          source={{ uri: 'https://example.com/card.jpg' }}
          style={styles.cardImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E0F0FF',
    padding: 10,
    
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop:20
  },
  icon: {
    marginHorizontal: 4,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
  },
  tabContainer: {
    marginTop: 10,
  },
  bannerWrapper: {
    marginTop: 10,
    position: 'relative',
  },
  banner: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  cardImage: {
    width: 100,
    height: 130,
    position: 'absolute',
    top: 20,
    right: 20,
    transform: [{ rotate: '-5deg' }],
    borderRadius: 8,
  },
});
