import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function LoginScreen({ navigation, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#7f00ff', marginBottom: 8, letterSpacing: 2 }}>
        WANDANA
      </Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Ionicons name="lock-closed" size={16} color="green" style={{ marginRight: 5 }} />
        <Text style={{ fontSize: 12, color: 'green' }}>Your data is protected</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#7f00ff',
          paddingVertical: 10,
          paddingHorizontal: 24,
          borderRadius: 20,
          marginBottom: 24,
        }}
        activeOpacity={0.8}
        // You can add an onPress handler here if needed
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
          Get 20% off your first order
        </Text>
      </TouchableOpacity>

      <Text style={{ alignSelf: 'flex-start', marginLeft: 10 }}>Email or Phone Number</Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          width: '100%',
          maxWidth: 300,
          marginBottom: 16,
          padding: 10,
          borderRadius: 8,
        }}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        placeholder="Enter your email or phone"
      />

      <View style={{ width: '100%', maxWidth: 300, marginBottom: 10 }}>
        <Button title="Continue" onPress={() => onLogin && onLogin()} color="#7f00ff" />
      </View>

      <Text style={{ marginVertical: 10, color: '#888' }}>Or</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 16 }}>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 10,
          marginHorizontal: 5,
        }}>
          <AntDesign name="google" size={20} color="#DB4437" style={{ marginRight: 8 }} />
          <Text style={{ color: '#333' }}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 10,
          marginHorizontal: 5,
        }}>
          <FontAwesome name="facebook" size={20} color="#4267B2" style={{ marginRight: 8 }} />
          <Text style={{ color: '#333' }}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 10,
          marginHorizontal: 5,
        }}>
          <AntDesign name="apple1" size={20} color="#000" style={{ marginRight: 8 }} />
          <Text style={{ color: '#333' }}>Apple</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ marginBottom: 8, color: '#7f00ff', fontWeight: 'bold' }}>Ghana</Text>

      <Text style={{ fontSize: 11, color: '#888', textAlign: 'center', marginHorizontal: 10 }}>
        By continuing, you agree to our{' '}
        <Text style={{ color: '#7f00ff', textDecorationLine: 'underline' }}>Politica de confidentialitate si cookie-uri</Text>
        {' '}and{' '}
        <Text style={{ color: '#7f00ff', textDecorationLine: 'underline' }}>Terms & Conditions</Text>.
      </Text>

      <Text style={{ marginTop: 20 }}>Don't have an account?</Text>
      <View style={{ width: 200, marginTop: 10 }}>
        <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} color="#7f00ff" />
      </View>
    </View>
  );
}