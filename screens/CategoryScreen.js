import React, { useState, useMemo } from "react";
import { ImagePicker } from "expo-image-picker";
import { Alert } from "react-native";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import TopNav from "../components/TopNav";
import ProductListComponent from "../components/ProductListComponent";

const subcategories = {
  All: [
    "Official dress",
    "Casual dress",
    "Beachwear",
    "Sportswear",
    "Nightwear",
    "Footwear",
    "Bags",
    "Jewelry",
    "Electronics",
    "Furniture",
  ],
  Men: [
    "Men Casual",
    "Men Official",
    "Trousers",
    "Beachware",
    "Footwear",
    "Jewelry",
    "Tops",
    "Bags",
  ],
  Women: [
    "Casual dress",
    "Official dress",
    "Tops",
    "Bags",
    "Jewelry",
    "Footwear",
  ],
  Kids: ["Casual dress", "Tops", "Footwear", "Bags", "Jewelry", "Beachwear"],
  Curve: ["Casual dress", "Tops", "Footwear", "Bags", "Jewelry", "Beachwear"],
  Home: ["Furniture", "Decor", "Kitchenware", "Bedding", "Lighting"],
};

export default function CategoryScreen({ navigation }) {
  const [activeMain, setActiveMain] = useState("All");
  const [activeSub, setActiveSub] = useState(subcategories["All"][0]);

  const currentSubcategories = useMemo(
    () => subcategories[activeMain] || [],
    [activeMain]
  );

  const handleMainChange = (main) => {
    const newSubList = subcategories[main];
    setActiveMain(main);
    setActiveSub(newSubList?.[0] || "");
  };

  const handleImageSearch = async () => {
    try {
      Alert.alert(
        "Choose Image Source",
        "Select an option",
        [
          {
            text: "Camera",
            onPress: async () => {
              const cameraPermission =
                await ImagePicker.requestCameraPermissionsAsync();
              if (cameraPermission.status !== "granted") {
                Alert.alert("Permission required", "Camera access is needed.");
                return;
              }

              const result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              });

              if (
                !result.canceled &&
                result.assets &&
                result.assets.length > 0
              ) {
                handleImageResult(result.assets[0].uri);
                if (
                  !result.canceled &&
                  result.assets &&
                  result.assets.length > 0
                ) {
                  const imageUri = result.assets[0].uri;
                  handleImageResult(imageUri);
                }
              }
            },
          },
          {
            text: "Gallery",
            onPress: async () => {
              const galleryPermission =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
              if (galleryPermission.status !== "granted") {
                Alert.alert("Permission required", "Gallery access is needed.");
                return;
              }

              const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
              });

              if (
                !result.canceled &&
                result.assets &&
                result.assets.length > 0
              ) {
                handleImageResult(result.assets[0].uri);
              }
            },
          },
          { text: "Cancel", style: "cancel" },
        ],
        { cancelable: true }
      );
    } catch (error) {
      console.error("Image Picker Error:", error);
      Alert.alert("Error", "Something went wrong while selecting image");
    }
  };

  const handleImageResult = (uri) => {
    const mockSearchTerm = "dress"; // you can change this to integrate ML image recognition

    const filteredProducts = PRODUCTS.filter(
      (product) =>
        product.name.toLowerCase().includes(mockSearchTerm.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(mockSearchTerm.toLowerCase())
    );

    if (filteredProducts.length > 0) {
      navigation.navigate("SearchResults", {
        products: filteredProducts,
        searchQuery: "Similar to your photo",
        imageSearch: true,
        imageUri: uri,
      });
    } else {
      Alert.alert("No Results", "No similar products found");
    }
  };

  const handleSubChange = (item) => {
    if (item !== activeSub) {
      setActiveSub(item);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <TopNav activeTab={activeMain} onTabChange={handleMainChange} />

      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#eee",
          backgroundColor: "#faf9fd",
          paddingVertical: 8,
          paddingBottom: 12,
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 10,
            alignItems: "center",
          }}
        >
          {currentSubcategories.length > 0 ? (
            currentSubcategories.map((item) => (
              <TouchableOpacity
                key={item}
                onPress={() => handleSubChange(item)}
                style={{
                  paddingVertical: 8,
                  paddingHorizontal: 18,
                  backgroundColor:
                    activeSub === item ? "#7f00ff" : "transparent",
                  borderRadius: 20,
                  marginRight: 10,
                  borderWidth: activeSub === item ? 0 : 1,
                  borderColor: activeSub === item ? "transparent" : "#e0e0e0",
                }}
              >
                <Text
                  style={{
                    color: activeSub === item ? "#fff" : "#7F55B1",
                    fontWeight: activeSub === item ? "bold" : "600",
                    fontSize: 15,
                  }}
                >
                  {item.trim()}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text
              style={{
                paddingHorizontal: 16,
                fontStyle: "italic",
                color: "#aaa",
              }}
            >
              No subcategories found.
            </Text>
          )}
        </ScrollView>
      </View>

      <View style={{ flex: 1 }}>
        <ProductListComponent
          navigation={navigation}
          mainCategory={activeMain}
          subCategory={activeSub}
        />
      </View>
    </View>
  );
}
