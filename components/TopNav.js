// components/TopNavBar.js
import React, {useState,useEffect} from 'react';
import {View,TextInput,Image,ScrollView,StyleSheet,TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import TabItem from './TabItem'; // import the new component
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Voice from '@react-native-voice/voice';

const tabs = ['All', 'Women',  'Men', 'Curve', 'Home', 'Kids', 'Beauty'];

export default function TopNavBar() {
  const [activeTab, setActiveTab] = useState(0);
  const navigation = useNavigation(); 
const [searchText, setSearchText] = useState('');
  const [voiceResult, setVoiceResult] = useState('');


const handleSearch = () => {
  alert(`Searching for: ${searchText}`);
};
 
   const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      // You can now use result.assets[0].uri for your scan/match logic
      alert('Image selected! (Implement scan logic here)');
      // Example: navigate to a scan results screen or process the image
    }
  };
//voice search here
useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (event) => {
    if (event.value && event.value.length > 0) {
      setSearchText(event.value[0]);
      setVoiceResult(event.value[0]);
      alert(`You said: ${event.value[0]}`);
    }
  };

  const handleVoiceSearch = async () => {
    try {
      setVoiceResult('');
      await Voice.start('en-US');
    } catch (e) {
      alert('Voice search failed: ' + e.message);
    }
  };



  return (
    <View style={styles.container}>
      {/* Top icons + search */}
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
          <TextInput placeholder="Categories" style={styles.input} value={searchText} onChangeText={setSearchText}/>
          <TouchableOpacity onPress={handlePickImage}>
      <Icon name="camera-outline" size={22} marginHorizontal={5} />
          </TouchableOpacity>
         <TouchableOpacity onPress={handleVoiceSearch}>
        <Icon name="mic-outline" size={24} marginHorizontal={2} />
      </TouchableOpacity>
        </View>
       <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <Icon name="heart-outline" size={24} style={styles.icon} />
        </TouchableOpacity>
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
    marginTop: 40
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
