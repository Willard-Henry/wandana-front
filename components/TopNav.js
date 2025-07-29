// import React, { useState } from "react";
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
// import TabItem from "./TabItem";
// import { useNavigation, useRoute } from "@react-navigation/native";
// import * as ImagePicker from "expo-image-picker";
// import Voice from "@react-native-voice/voice";
// import { BlurView } from "expo-blur";

// const tabs = ["All", "Women", "Men", "Kids", "Curve", "Home"];

// export default function TopNavBar({ activeTab, onTabChange }) {
//   const [searchText, setSearchText] = useState("");
//   const navigation = useNavigation();
//   const route = useRoute();
//   const [localSearchQuery, setLocalSearchQuery] = useState("");

//   const getIconColor = (screen) =>
//     route.name === screen ? "#7F55B1" : "#7F55B1";

//   const handleSearchSubmit = () => {
//     if (localSearchQuery.trim()) {
//       // Navigate to SearchScreen and pass the query
//       navigation.navigate("Search", { initialQuery: localSearchQuery.trim() });
//     }
//   };

//   //const handleSearch = () => {
//   //alert(`Searching for: ${searchText}`);
//   //};
//   const handleVoiceSearch = () => {
//     if (searchText.trim() === "") {
//       Speech.speak("Nothing to search for.");
//     } else {
//       Speech.speak(`Searching for ${searchText}`);
//     }
//   };

//   const handlePickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.canceled) {
//       // Simulate similarity by passing a fixed subcategory
//       navigation.navigate("Category", { suggestedSubcategory: "Casual dress" });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.topRow}>
//         <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
//           <Icon
//             name="mail-outline"
//             size={24}
//             color={getIconColor("Notification")}
//             style={styles.icon}
//           />
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
//           <Icon
//             name="calendar-outline"
//             size={24}
//             color={getIconColor("Cart")}
//             style={styles.icon}
//           />
//         </TouchableOpacity>

//         {/* 🔥 Frosted glass search bar */}
//         <BlurView intensity={50} tint="light" style={styles.searchBar}>
//           <TouchableOpacity onPress={handleSearchSubmit}>
//             <Icon
//               name="search-outline"
//               size={20}
//               color="#7F55B1"
//               style={styles.icon}
//             />
//           </TouchableOpacity>
//           <TextInput
//             placeholder={route.name === "Home" ? "Search" : "Categories"}
//             placeholderTextColor="#888"
//             style={styles.input}
//             value={localSearchQuery}
//             onChangeText={setLocalSearchQuery}
//             returnKeyType="search" // Shows a "Search" button on keyboard
//             onSubmitEditing={handleSearchSubmit}
//           />
//           {route.name !== "Home" && (
//             <>
//               <TouchableOpacity onPress={handlePickImage}>
//                 <Icon
//                   name="camera-outline"
//                   size={22}
//                   color="#7F55B1"
//                   style={{ marginHorizontal: 5 }}
//                 />
//               </TouchableOpacity>
//               {/* <TouchableOpacity onPress={handleVoiceSearch}>
//                 <Icon name="mic-outline" size={24} style={{ marginHorizontal: 2 }} />
//               </TouchableOpacity> */}

//               <TouchableOpacity onPress={handleVoiceSearch}>
//                 <Icon
//                   name="mic-outline"
//                   size={24}
//                   color="#7F55B1"
//                   style={{ marginHorizontal: 2 }}
//                 />
//               </TouchableOpacity>
//             </>
//           )}
//         </BlurView>

//         <TouchableOpacity onPress={() => navigation.navigate("Wishlist")}>
//           <Icon
//             name="heart-outline"
//             size={24}
//             color={getIconColor("Wishlist")}
//             style={styles.icon}
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Category tabs */}
//       {route.name !== "Home" && (
//         <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           style={styles.tabContainer}
//         >
//           {tabs.map((tab) => (
//             <TabItem
//               key={tab}
//               label={tab}
//               isActive={activeTab === tab}
//               onPress={() => onTabChange && onTabChange(tab)}
//             />
//           ))}
//         </ScrollView>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "transparent",
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: "transparent",
//   },
//   topRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 6,
//     marginTop: 15,
//   },
//   icon: {
//     marginHorizontal: 3,
//   },
//   searchBar: {
//     flex: 1,
//     flexDirection: "row",
//     borderRadius: 12,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     alignItems: "center",
//     marginHorizontal: 3,
//     overflow: "hidden",
//     backgroundColor: "rgba(255,255,255,0.1)", // fallback for Android
//     borderWidth: 1,
//     borderColor: "rgba(255,255,255,0.3)",
//   },
//   input: {
//     flex: 1,
//     marginHorizontal: 8,
//     backgroundColor: "transparent",
//     color: "#000",
//   },
//   tabContainer: {
//     marginTop: 5,
//   },
// });

import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import TabItem from "./TabItem";
import { useNavigation, useRoute } from "@react-navigation/native";
import { BlurView } from "expo-blur";
import LanguageModal from "../components/LanguageModal"; // 🔁 Adjust path if needed

const tabs = ["All", "Women", "Men", "Kids", "Curve", "Home"];

export default function TopNavBar({ activeTab, onTabChange }) {
  const [searchText, setSearchText] = useState("");
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const [localSearchQuery, setLocalSearchQuery] = useState("");

  const getIconColor = (screen) =>
    route.name === screen ? "#7F55B1" : "#7F55B1";

  const handleSearchSubmit = () => {
    if (localSearchQuery.trim()) {
      navigation.navigate("Search", { initialQuery: localSearchQuery.trim() });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Icon
            name="mail-outline"
            size={24}
            color={getIconColor("Notification")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Icon
            name="calendar-outline"
            size={24}
            color={getIconColor("Cart")}
            style={styles.icon}
          />
        </TouchableOpacity>

        {/* 🔍 Frosted glass search bar */}
        <BlurView intensity={50} tint="light" style={styles.searchBar}>
          <TouchableOpacity onPress={handleSearchSubmit}>
            <Icon
              name="search-outline"
              size={20}
              color="#7F55B1"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TextInput
            placeholder={route.name === "Home" ? "Search" : "Categories"}
            placeholderTextColor="#888"
            style={styles.input}
            value={localSearchQuery}
            onChangeText={setLocalSearchQuery}
            returnKeyType="search"
            onSubmitEditing={handleSearchSubmit}
          />
        </BlurView>

        {/* 🌐 Language Selector Icon */}
        <TouchableOpacity onPress={() => setLanguageModalVisible(true)}>
          <Icon
            name="globe-outline"
            size={24}
            color="#7F55B1"
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Wishlist")}>
          <Icon
            name="heart-outline"
            size={24}
            color={getIconColor("Wishlist")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      {/* Category Tabs */}
      {route.name !== "Home" && (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabContainer}
        >
          {tabs.map((tab) => (
            <TabItem
              key={tab}
              label={tab}
              isActive={activeTab === tab}
              onPress={() => onTabChange && onTabChange(tab)}
            />
          ))}
        </ScrollView>
      )}

      {/* 🌐 Language Modal */}
      <Modal
        visible={languageModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <LanguageModal onClose={() => setLanguageModalVisible(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "transparent",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 15,
  },
  icon: {
    marginHorizontal: 3,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: "center",
    marginHorizontal: 3,
    overflow: "hidden",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },
  input: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: "transparent",
    color: "#000",
  },
  tabContainer: {
    marginTop: 5,
  },
});

