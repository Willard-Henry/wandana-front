
// import React, { useContext } from "react";
// import { View, Text, FlatList, StyleSheet, Animated } from "react-native";
// import { NotificationContext } from "../context/NotificationContext";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// export default function NotificationScreen() {
//   const { events } = useContext(NotificationContext);
//   const getIconName = (title) => {
//     const lower = title.toLowerCase();
//     if (lower.includes("pack")) return "cube-outline";
//     if (lower.includes("picked")) return "package-variant";
//     if (lower.includes("distance")) return "map-marker-distance";
//     if (lower.includes("arrived")) return "check-circle-outline";
//     return "truck-delivery-outline"; // fallback
//   };


//   const renderItem = ({ item, index }) => {
//     const translateY = new Animated.Value(30);
//     const opacity = new Animated.Value(0);

//     Animated.timing(translateY, {
//       toValue: 0,
//       duration: 300,
//       delay: index * 100,
//       useNativeDriver: true,
//     }).start();

//     Animated.timing(opacity, {
//       toValue: 1,
//       duration: 300,
//       delay: index * 100,
//       useNativeDriver: true,
//     }).start();

//     return (
//       <Animated.View
//         style={[
//           styles.card,
//           {
//             transform: [{ translateY }],
//             opacity,
//           },
//         ]}
//       >
//         <Icon name={getIconName(item.title)} size={24} color="#7f00ff" style={{ marginRight: 12 }} />

//         <View style={{ flex: 1 }}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.meta}>
//             {item.date} • {item.time}
//           </Text>
//         </View>
//       </Animated.View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Order Updates</Text>
//       <FlatList
//         data={events.slice().reverse()} // newest on top
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={{ paddingBottom: 30 }}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 20,
//   },
//   card: {
//     flexDirection: "row",
//     backgroundColor: "#f9f9f9",
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//     elevation: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#333",
//   },
//   meta: {
//     fontSize: 12,
//     color: "#888",
//     marginTop: 4,
//   },
// });

//////////////////////////////////////////
/////////////////////////////////////////



// import React, { useContext, useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Animated,
//   RefreshControl,
//   ToastAndroid,
// } from "react-native";
// import { NotificationContext } from "../context/NotificationContext";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// export default function NotificationScreen() {
//   const { events } = useContext(NotificationContext);
//   const [refreshing, setRefreshing] = useState(false);
//   const [prevCount, setPrevCount] = useState(events.length);

//   // Show toast if new notification is added
//   useEffect(() => {
//     if (events.length > prevCount) {
//       ToastAndroid.show("📦 New notification received!", ToastAndroid.SHORT);
//     }
//     setPrevCount(events.length);
//   }, [events]);

//   const onRefresh = () => {
//     setRefreshing(true);

//     // Simulate re-fetching or refreshing logic
//     setTimeout(() => {
//       setRefreshing(false);
//       ToastAndroid.show("🔄 Notifications refreshed", ToastAndroid.SHORT);
//     }, 1000);
//   };

//   const getIconName = (title) => {
//     const lower = title.toLowerCase();
//     if (lower.includes("pack")) return "cube-outline";
//     if (lower.includes("picked")) return "package-variant";
//     if (lower.includes("distance")) return "map-marker-distance";
//     if (lower.includes("arrived")) return "check-circle-outline";
//     return "truck-delivery-outline";
//   };

//   const renderItem = ({ item, index }) => {
//     const translateY = new Animated.Value(30);
//     const opacity = new Animated.Value(0);

//     Animated.timing(translateY, {
//       toValue: 0,
//       duration: 300,
//       delay: index * 100,
//       useNativeDriver: true,
//     }).start();

//     Animated.timing(opacity, {
//       toValue: 1,
//       duration: 300,
//       delay: index * 100,
//       useNativeDriver: true,
//     }).start();

//     return (
//       <Animated.View
//         style={[
//           styles.card,
//           {
//             transform: [{ translateY }],
//             opacity,
//           },
//         ]}
//       >
//         <Icon name={getIconName(item.title)} size={24} color="#7f00ff" style={{ marginRight: 12 }} />
//         <View style={{ flex: 1 }}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.meta}>{item.date} • {item.time}</Text>
//         </View>
//       </Animated.View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Order Updates</Text>

//       {events.length === 0 ? (
//         <View style={styles.emptyContainer}>
//           <Icon name="bell-off-outline" size={60} color="#ccc" />
//           <Text style={styles.emptyText}>No notifications yet</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={events.slice().reverse()}
//           keyExtractor={(item) => item.id}
//           renderItem={renderItem}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//           contentContainerStyle={{ paddingBottom: 30 }}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 20,
//   },
//   card: {
//     flexDirection: "row",
//     backgroundColor: "#f9f9f9",
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//     elevation: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#333",
//   },
//   meta: {
//     fontSize: 12,
//     color: "#888",
//     marginTop: 4,
//   },
//   emptyContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 80,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: "#888",
//     marginTop: 12,
//   },
// });




///////////////////////////////////////////
////////////////////////////////////////////


// import React, { useContext, useEffect, useState, useRef } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Animated,
//   RefreshControl,
//   ToastAndroid,
// } from "react-native";
// import { NotificationContext } from "../context/NotificationContext";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// export default function NotificationScreen() {
//   const { events, addEvent } = useContext(NotificationContext); // make sure `addEvent` is exposed
//   const [refreshing, setRefreshing] = useState(false);
//   const [localEvents, setLocalEvents] = useState([...events]);
//   const counterRef = useRef(events.length + 1);

//   // Simulate new notification every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const fakeEvent = {
//         id: `${Date.now()}`,
//         title: `Package update #${counterRef.current}`,
//         date: new Date().toLocaleDateString(),
//         time: new Date().toLocaleTimeString(),
//       };
//       counterRef.current += 1;
//       setLocalEvents((prev) => [fakeEvent, ...prev]);
//       ToastAndroid.show("📦 New update received!", ToastAndroid.SHORT);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const onRefresh = () => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//       ToastAndroid.show("🔄 Notifications refreshed", ToastAndroid.SHORT);
//     }, 1000);
//   };

//   const getIconName = (title) => {
//     const lower = title.toLowerCase();
//     if (lower.includes("pack")) return "cube-outline";
//     if (lower.includes("picked")) return "package-variant";
//     if (lower.includes("distance")) return "map-marker-distance";
//     if (lower.includes("arrived")) return "check-circle-outline";
//     return "truck-delivery-outline";
//   };

//   const renderItem = ({ item, index }) => {
//     const translateY = useRef(new Animated.Value(30)).current;
//     const opacity = useRef(new Animated.Value(0)).current;

//     useEffect(() => {
//       Animated.parallel([
//         Animated.timing(translateY, {
//           toValue: 0,
//           duration: 300,
//           delay: index * 100,
//           useNativeDriver: true,
//         }),
//         Animated.timing(opacity, {
//           toValue: 1,
//           duration: 300,
//           delay: index * 100,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     }, []);

//     return (
//       <Animated.View
//         style={[
//           styles.card,
//           {
//             transform: [{ translateY }],
//             opacity,
//           },
//         ]}
//       >
//         <Icon
//           name={getIconName(item.title)}
//           size={24}
//           color="#7f00ff"
//           style={{ marginRight: 12 }}
//         />
//         <View style={{ flex: 1 }}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.meta}>
//             {item.date} • {item.time}
//           </Text>
//         </View>
//       </Animated.View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Order Updates</Text>

//       {localEvents.length === 0 ? (
//         <View style={styles.emptyContainer}>
//           <Icon name="bell-off-outline" size={60} color="#ccc" />
//           <Text style={styles.emptyText}>No notifications yet</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={localEvents}
//           keyExtractor={(item) => item.id}
//           renderItem={renderItem}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//           contentContainerStyle={{ paddingBottom: 30 }}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 20,
//   },
//   card: {
//     flexDirection: "row",
//     backgroundColor: "#f9f9f9",
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//     elevation: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#333",
//   },
//   meta: {
//     fontSize: 12,
//     color: "#888",
//     marginTop: 4,
//   },
//   emptyContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 80,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: "#888",
//     marginTop: 12,
//   },
// });

////////////////////////////////////////////////
///////////////////////////////////////////////


// import React, { useContext, useEffect, useState, useRef } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Animated,
//   RefreshControl,
//   ToastAndroid,
// } from "react-native";
// import { NotificationContext } from "../context/NotificationContext";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// export default function NotificationScreen() {
//   const { events, addEvent } = useContext(NotificationContext); // make sure `addEvent` is exposed
//   const [refreshing, setRefreshing] = useState(false);
//   const [localEvents, setLocalEvents] = useState([...events]);
//   const counterRef = useRef(events.length + 1);

//   // Simulate new notification every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const fakeEvent = {
//         id: `${Date.now()}`,
//         title: `Package update #${counterRef.current}`,
//         date: new Date().toLocaleDateString(),
//         time: new Date().toLocaleTimeString(),
//       };
//       counterRef.current += 1;
//       setLocalEvents((prev) => [fakeEvent, ...prev]);
//       ToastAndroid.show("📦 New update received!", ToastAndroid.SHORT);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const onRefresh = () => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//       ToastAndroid.show("🔄 Notifications refreshed", ToastAndroid.SHORT);
//     }, 1000);
//   };

//   const getIconName = (title) => {
//     const lower = title.toLowerCase();
//     if (lower.includes("pack")) return "cube-outline";
//     if (lower.includes("picked")) return "package-variant";
//     if (lower.includes("distance")) return "map-marker-distance";
//     if (lower.includes("arrived")) return "check-circle-outline";
//     return "truck-delivery-outline";
//   };

//   const renderItem = ({ item, index }) => {
//     const translateY = useRef(new Animated.Value(30)).current;
//     const opacity = useRef(new Animated.Value(0)).current;

//     useEffect(() => {
//       Animated.parallel([
//         Animated.timing(translateY, {
//           toValue: 0,
//           duration: 300,
//           delay: index * 100,
//           useNativeDriver: true,
//         }),
//         Animated.timing(opacity, {
//           toValue: 1,
//           duration: 300,
//           delay: index * 100,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     }, []);

//     return (
//       <Animated.View
//         style={[
//           styles.card,
//           {
//             transform: [{ translateY }],
//             opacity,
//           },
//         ]}
//       >
//         <Icon
//           name={getIconName(item.title)}
//           size={24}
//           color="#7f00ff"
//           style={{ marginRight: 12 }}
//         />
//         <View style={{ flex: 1 }}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.meta}>
//             {item.date} • {item.time}
//           </Text>
//         </View>
//       </Animated.View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Order Updates</Text>

//       {localEvents.length === 0 ? (
//         <View style={styles.emptyContainer}>
//           <Icon name="bell-off-outline" size={60} color="#ccc" />
//           <Text style={styles.emptyText}>No notifications yet</Text>
//         </View>
//       ) : (
//         <FlatList
//           data={localEvents}
//           keyExtractor={(item) => item.id}
//           renderItem={renderItem}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//           contentContainerStyle={{ paddingBottom: 30 }}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 20,
//   },
//   card: {
//     flexDirection: "row",
//     backgroundColor: "#f9f9f9",
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//     elevation: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#333",
//   },
//   meta: {
//     fontSize: 12,
//     color: "#888",
//     marginTop: 4,
//   },
//   emptyContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 80,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: "#888",
//     marginTop: 12,
//   },
// });

/////////////////////////////////////
////////////////////////////////////

// import React, { useContext, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Animated,
//   ToastAndroid,
// } from "react-native";
// import { NotificationContext } from "../context/NotificationContext";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// const sampleMessages = [
//   "Order packed",
//   "Rider picked up your item",
//   "Package en route",
//   "Package near destination",
//   "Package arrived",
// ];

// export default function NotificationScreen() {
//   const { events, addEvent } = useContext(NotificationContext);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const id = String(Date.now());
//       const title = sampleMessages[Math.floor(Math.random() * sampleMessages.length)];
//       const now = new Date();

//       const newEvent = {
//         id,
//         title,
//         date: now.toLocaleDateString(),
//         time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//       };

//       addEvent(newEvent);
//       ToastAndroid.show(`🔔 ${title}`, ToastAndroid.SHORT);
//     }, 5000); // every 5 seconds

//     return () => clearInterval(interval); // cleanup on unmount
//   }, []);

//   const getIconName = (title) => {
//     const lower = title.toLowerCase();
//     if (lower.includes("pack")) return "cube-outline";
//     if (lower.includes("picked")) return "package-variant";
//     if (lower.includes("route")) return "truck-delivery-outline";
//     if (lower.includes("near")) return "map-marker-distance";
//     if (lower.includes("arrived")) return "check-circle-outline";
//     return "bell-outline";
//   };

//   const renderItem = ({ item, index }) => {
//     const translateY = new Animated.Value(30);
//     const opacity = new Animated.Value(0);

//     Animated.timing(translateY, {
//       toValue: 0,
//       duration: 300,
//       delay: index * 100,
//       useNativeDriver: true,
//     }).start();

//     Animated.timing(opacity, {
//       toValue: 1,
//       duration: 300,
//       delay: index * 100,
//       useNativeDriver: true,
//     }).start();

//     return (
//       <Animated.View
//         style={[
//           styles.card,
//           {
//             transform: [{ translateY }],
//             opacity,
//           },
//         ]}
//       >
//         <Icon
//           name={getIconName(item.title)}
//           size={24}
//           color="#7f00ff"
//           style={{ marginRight: 12 }}
//         />

//         <View style={{ flex: 1 }}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.meta}>
//             {item.date} • {item.time}
//           </Text>
//         </View>
//       </Animated.View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Order Updates</Text>
//       {events.length === 0 ? (
//         <Text style={{ color: "#999", textAlign: "center", marginTop: 100 }}>
//           No notifications yet.
//         </Text>
//       ) : (
//         <FlatList
//           data={[...events].reverse()}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={{ paddingBottom: 30 }}
//           renderItem={renderItem}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 20,
//   },
//   card: {
//     flexDirection: "row",
//     backgroundColor: "#f9f9f9",
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//     elevation: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#333",
//   },
//   meta: {
//     fontSize: 12,
//     color: "#888",
//     marginTop: 4,
//   },
// });


//////////////////////////////////////////
///////////////////////////////////////////////
//////////////////////////////////////////////
/////////////////////////////////////////////



// import React, { useContext, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Animated,
//   ToastAndroid,
// } from "react-native";
// import { NotificationContext } from "../context/NotificationContext";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// // Fallback dummy titles (used in interval demo only)
// const sampleMessages = [
//   "Order packed",
//   "Rider picked up your item",
//   "Package en route",
//   "Package near destination",
//   "Package arrived",
// ];

// export default function NotificationScreen() {
//   const { events, addEvent } = useContext(NotificationContext);

//   useEffect(() => {
//     let notificationCount = 0;

//     const interval = setInterval(() => {
//       if (notificationCount >= 4) {
//         clearInterval(interval); // stop after 4
//         return;
//       }

//       const newEvent = {
//         id: String(Date.now()),
//         title: sampleMessages[Math.floor(Math.random() * sampleMessages.length)],
//         date: new Date().toLocaleDateString(),
//         time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//       };

//       addEvent(newEvent);
//       ToastAndroid.show(`🔔 ${newEvent.title}`, ToastAndroid.SHORT);
//       notificationCount++;
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);


//   // Map title keywords to icon names
//   // const getIconName = (title) => {
//   //   if (!title || typeof title !== "string") return "bell-outline";
//   //   const lower = title.toLowerCase();
//   //   if (lower.includes("pack")) return "cube-outline";
//   //   if (lower.includes("picked")) return "package-variant";
//   //   if (lower.includes("route")) return "truck-delivery-outline";
//   //   if (lower.includes("near")) return "map-marker-distance";
//   //   if (lower.includes("arrived")) return "check-circle-outline";
//   //   return "bell-outline";
//   // };

//   const getIconName = (title) => {
//     if (!title || typeof title !== "string") return "bell-outline";

//     const lower = title.toLowerCase();
//     if (lower.includes("pack")) return "cube-outline";
//     if (lower.includes("picked")) return "package-variant";
//     if (lower.includes("route")) return "truck-delivery-outline";
//     if (lower.includes("near")) return "map-marker-distance";
//     if (lower.includes("arrived")) return "check-circle-outline";

//     return "bell-outline"; // default icon
//   };


//   // Animate each card
//   const renderItem = ({ item, index }) => {
//     const translateY = new Animated.Value(30);
//     const opacity = new Animated.Value(0);

//     Animated.parallel([
//       Animated.timing(translateY, {
//         toValue: 0,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     return (
//       <Animated.View
//         style={[
//           styles.card,
//           {
//             transform: [{ translateY }],
//             opacity,
//           },
//         ]}
//       >
//         <Icon
//           name={getIconName(item?.title)}
//           size={24}
//           color="#7f00ff"
//           style={{ marginRight: 12 }}
//         />

//         <View style={{ flex: 1 }}>
//           <Text style={styles.title}>{item?.title || "Untitled Notification"}</Text>
//           <Text style={styles.meta}>
//             {item?.date} • {item?.time}
//           </Text>
//         </View>
//       </Animated.View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Order Updates</Text>
//       {events.length === 0 ? (
//         <Text style={{ color: "#999", textAlign: "center", marginTop: 100 }}>
//           No notifications yet.
//         </Text>
//       ) : (
//         <FlatList
//           data={[...events].reverse()}
//           keyExtractor={(item) => item.id}
//           contentContainerStyle={{ paddingBottom: 30 }}
//           renderItem={renderItem}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 20,
//   },
//   card: {
//     flexDirection: "row",
//     backgroundColor: "#f9f9f9",
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//     elevation: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#333",
//   },
//   meta: {
//     fontSize: 12,
//     color: "#888",
//     marginTop: 4,
//   },
// });



///////////////////////////////////////////////////
//////////////////////////////////////////////////
/////////////////////////////////////////////////


// import React, { useContext, useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   Animated,
//   ToastAndroid,
// } from "react-native";
// import { NotificationContext } from "../context/NotificationContext";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// // Demo fallback notifications
// const sampleMessages = [
//   "Order packed",
//   "Rider picked up your item",
//   "Package en route",
//   "Package near destination",
//   "Package arrived",
// ];

// export default function NotificationScreen() {
//   const { events, addEvent } = useContext(NotificationContext);
//   const countRef = useRef(0); // persist demo counter across renders

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (countRef.current >= 4) {
//         clearInterval(interval);
//         return;
//       }

//       const now = new Date();
//       const id = `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
//       const title = sampleMessages[Math.floor(Math.random() * sampleMessages.length)];

//       const newEvent = {
//         id,
//         title,
//         date: now.toLocaleDateString(),
//         time: now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
//         source: "demo",
//       };

//       addEvent(newEvent);
//       ToastAndroid.show(`🔔 ${title}`, ToastAndroid.SHORT);
//       countRef.current++;
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const getIconName = (title) => {
//     if (!title || typeof title !== "string") return "bell-outline";
//     const lower = title.toLowerCase();
//     if (lower.includes("pack")) return "cube-outline";
//     if (lower.includes("picked")) return "package-variant";
//     if (lower.includes("route")) return "truck-delivery-outline";
//     if (lower.includes("near")) return "map-marker-distance";
//     if (lower.includes("arrived")) return "check-circle-outline";
//     return "bell-outline";
//   };

//   const renderItem = ({ item, index }) => {
//     const translateY = new Animated.Value(30);
//     const opacity = new Animated.Value(0);

//     Animated.parallel([
//       Animated.timing(translateY, {
//         toValue: 0,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }),
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 300,
//         delay: index * 100,
//         useNativeDriver: true,
//       }),
//     ]).start();

//     return (
//       <Animated.View
//         style={[
//           styles.card,
//           {
//             transform: [{ translateY }],
//             opacity,
//           },
//         ]}
//       >
//         <Icon
//           name={getIconName(item?.title)}
//           size={24}
//           color="#7f00ff"
//           style={{ marginRight: 12 }}
//         />
//         <View style={{ flex: 1 }}>
//           <Text style={styles.title}>{item?.title || "Untitled Notification"}</Text>
//           <Text style={styles.meta}>
//             {item?.date} • {item?.time}
//           </Text>
//         </View>
//       </Animated.View>
//     );
//   };

//   const sortedEvents = [...events].reverse(); // Show newest first

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Order Updates</Text>
//       {sortedEvents.length === 0 ? (
//         <Text style={styles.emptyText}>No notifications yet.</Text>
//       ) : (
//         <FlatList
//           data={sortedEvents}
//           keyExtractor={(item, index) => item?.id || index.toString()}
//           contentContainerStyle={{ paddingBottom: 30 }}
//           renderItem={renderItem}
//         />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: "700",
//     color: "#333",
//     marginBottom: 20,
//   },
//   card: {
//     flexDirection: "row",
//     backgroundColor: "#f9f9f9",
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//     elevation: 1,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: "#333",
//   },
//   meta: {
//     fontSize: 12,
//     color: "#888",
//     marginTop: 4,
//   },
//   emptyText: {
//     color: "#999",
//     textAlign: "center",
//     marginTop: 100,
//     fontSize: 14,
//   },
// });


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
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
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
          <Text style={styles.title}>{item?.title || "Untitled Notification"}</Text>
          <Text style={styles.meta}>{item?.date} • {item?.time}</Text>
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
