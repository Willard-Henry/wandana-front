import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, StyleSheet } from 'react-native';

export default function SplashScreen({ onFinish }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(onFinish, 1200);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/logo.png')} // Replace with your logo
        style={[styles.logo, { opacity: fadeAnim }]}
      />
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Welcome to SHEIN
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#7f00ff', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 120, height: 120, marginBottom: 30 },
  text: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
});