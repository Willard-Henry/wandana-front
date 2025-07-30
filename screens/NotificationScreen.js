import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Animated,
  ToastAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NotificationContext } from "../context/NotificationContext";

// Demo messages (optional)
const sampleMessages = [
  "Item is being processed to be packaged",
  "The delivery guy has picked up the item",
  "Package is en route",
  "The package is near your location",
  "The package has arrived",
];

export default function NotificationScreen() {
  const { events, addEvent } = useContext(NotificationContext);

  // OPTIONAL: simulate events only for demo
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count >= 5) {
        clearInterval(interval);
        return;
      }

      const message = sampleMessages[count];
      const newEvent = {
        id: String(Date.now()),
        title: message,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      addEvent(newEvent);
      ToastAndroid.show(`🔔 ${message}`, ToastAndroid.SHORT);
      count++;
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 📦 Icon + Color based on title
  const getIconInfo = (title = "") => {
    const lower = title.toLowerCase();

    if (lower.includes("packed") || lower.includes("processing"))
      return { name: "box", color: "#FFA500" }; // orange

    if (lower.includes("picked"))
      return { name: "motorbike", color: "#007bff" }; // blue

    if (lower.includes("route") || lower.includes("en route"))
      return { name: "truck-fast-outline", color: "#17a2b8" }; // cyan

    if (lower.includes("near"))
      return { name: "map-marker-check", color: "#ffc107" }; // yellow

    if (lower.includes("arrived") || lower.includes("delivered"))
      return { name: "home-outline", color: "#28a745" }; // green

    return { name: "bell-ring-outline", color: "#999" }; // fallback
  };

  const renderItem = ({ item, index }) => {
    const translateY = new Animated.Value(30);
    const opacity = new Animated.Value(0);

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        delay: index * 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        delay: index * 100,
        useNativeDriver: true,
      }),
    ]).start();

    const { name: iconName, color: iconColor } = getIconInfo(item?.title);

    return (
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ translateY }],
            opacity,
          },
        ]}
      >
        <Icon
          name={iconName}
          size={24}
          color={iconColor}
          style={{ marginRight: 12 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
            {item?.title || "Untitled Notification"}
          </Text>
          <Text style={styles.meta}>
            {item?.date} • {item?.time}
          </Text>
        </View>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order Updates</Text>

      {events.length === 0 ? (
        <Text style={styles.empty}>No notifications yet.</Text>
      ) : (
        <FlatList
          data={[...events].reverse()}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    marginBottom: 20,
  },
  empty: {
    color: "#999",
    textAlign: "center",
    marginTop: 100,
    fontSize: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  meta: {
    fontSize: 12,
    color: "#888",
    marginTop: 4,
  },
});
