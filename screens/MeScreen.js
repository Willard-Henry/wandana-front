import React from 'react';
import { View, Text, Button } from 'react-native';

export default function MeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Profile</Text>
      {/* Add profile info, edit button, logout, etc. here */}
    </View>
  );
}