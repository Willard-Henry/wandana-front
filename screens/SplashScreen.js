import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

export default function SplashScreen({ onFinish }) {
  const scaleAnim = useRef(new Animated.Value(0.7)).current;
  const blinkAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Pop out animation
    Animated.spring(scaleAnim, {
      toValue: 1.2,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 100,
        useNativeDriver: true,
      }).start();
    });

    // Blinking animation (fade in/out loop)
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 0.2,
          duration: 950,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Finish after 2 seconds
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../src/assets/logo.png")}
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleAnim }],
            opacity: blinkAnim,
          },
        ]}
      />
      <Animated.Text style={[styles.text, { opacity: blinkAnim }]}>
        Welcome to WANDANA
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // White for strong contrast
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 30,
  },
  text: {
    color: "#7f00ff",
    fontSize: 28,
    fontWeight: "bold",
  },
});
