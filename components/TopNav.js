// components/TopNavBar.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabItem from './TabItem'; // import the new component
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Voice from '@react-native-voice/voice';

const tabs = ['All', 'Women', 'Men', 'Curve', 'Home', 'Kids', 'Beauty'];

export default function TopNavBar() {

  const [activeTab, setActiveTab] = useState(0);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText);
    } else {
      // You can add your search logic here or navigate to a search results screen
      alert(`Searching for: ${searchText}`);
    }
  };
  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // Do something with the selected image
      alert('Image selected!');
      // You can also set it to state if you want to display it
      // setImage(result.assets[0].uri);
    }
  };
  const handleVoiceSearch = async () => {
    try {
      await Voice.start('en-US');
      Voice.onSpeechResults = (event) => {
        const text = event.value[0];
        setSearchText(text);
        handleSearch();
      };
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Icon name="mail-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon name="calendar-outline" size={24} style={styles.icon} />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <TouchableOpacity onPress={handleSearch}>
            <Icon name="search-outline" size={20} />
          </TouchableOpacity>
          <TextInput placeholder="Categories" style={styles.input} value={searchText} onChangeText={setSearchText} />
          <TouchableOpacity onPress={handlePickImage}>
            <Icon name="camera-outline" size={22} marginHorizontal={5} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleVoiceSearch}>
            <Icon name="mic-outline" size={24} marginHorizontal={2} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <Icon name="voice-outline" size={24} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <Icon name="heart-outline" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>



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
    marginTop: 20
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



});
