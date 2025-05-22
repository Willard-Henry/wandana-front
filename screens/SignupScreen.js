import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Simple validation example (optional)
  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      alert('Please fill all fields');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Navigate to Welcome screen after successful registration
    navigation.replace('Welcome');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#7f00ff', marginBottom: 10 }}>
        Hi, New Friend!
      </Text>
      <Text style={{ fontSize: 16, color: '#333', marginBottom: 24, textAlign: 'center' }}>
        Set your password to create a Wandana account
      </Text>

      <Text style={{ alignSelf: 'flex-start', marginLeft: 10, marginBottom: 4 }}>Email </Text>
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
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={{ alignSelf: 'flex-start', marginLeft: 10, marginBottom: 4 }}>Password</Text>
      <View style={{ width: '100%', maxWidth: 300, marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            borderRadius: 8,
          }}
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          placeholder="Create a password"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ marginLeft: -35, padding: 8 }}>
          <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <Text style={{ alignSelf: 'flex-start', marginLeft: 10, marginBottom: 4 }}>Confirm Password</Text>
      <View style={{ width: '100%', maxWidth: 300, marginBottom: 8, flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            borderRadius: 8,
          }}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          placeholder="Confirm your password"
          secureTextEntry={!showConfirm}
        />
        <TouchableOpacity onPress={() => setShowConfirm(!showConfirm)} style={{ marginLeft: -35, padding: 8 }}>
          <Ionicons name={showConfirm ? 'eye' : 'eye-off'} size={20} color="#888" />
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 12, color: '#888', marginBottom: 16 }}>
        8 characters minimum, at least one letter, at least one number
      </Text>

      <View style={{ width: '100%', maxWidth: 300, marginBottom: 16 }}>
        <Button title="Register" color="#7f00ff" onPress={handleRegister} />
      </View>

      <Text style={{ marginTop: 10 }}>Already have an account?</Text>
      <View style={{ width: 200, marginTop: 10 }}>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} color="#7f00ff" />
      </View>
    </View>
  );
}