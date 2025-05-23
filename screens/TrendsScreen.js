import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import { useState } from 'react';
import TabItem from '../components/TabItem';
import { StyleSheet } from 'react-native';

const tabs = ['All', 'Women', 'Lingerie & Sleep', 'Men', 'Shoes', 'Men', 'Bra', 'Jewelry & Acc', 'Curve', 'Home', 'Bags', 'Sports', 'Electronics'];
export default function TrendsScreen() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <SafeAreaView>
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
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#E0F0FF',
    padding: 10,
    marginTop:60
  }})