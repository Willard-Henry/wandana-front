// screens/SearchScreen.js
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import productsData from "../src/data/products";
import { ThemeContext } from "../ThemeContext";

export default function SearchScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { darkTheme } = useContext(ThemeContext);

  const initialQuery = route.params?.initialQuery || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define theme colors for a consistent look
  const primaryColor = "#7f00ff";
  const darkGrey = "#333333";
  const lightGreyBorder = "#ddd";
  const placeholderColor = "#999";

  const containerBg = darkTheme ? "#1a1a1a" : "#f5f5f5";
  const cardBg = darkTheme ? "#2a2a2a" : "#ffffff";
  const textColor = darkTheme ? "#ffffff" : darkGrey;
  const inputBg = darkTheme ? "#333333" : "#f9f9f9";
  const borderColor = darkTheme ? "#444444" : "#e8e8e8";
  const subTextColor = darkTheme ? "#cccccc" : "#666666";

  // Search Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      if (searchQuery.trim() === "") {
        setFilteredProducts([]);
        setLoading(false);
        return;
      }

      const lowerCaseQuery = searchQuery.toLowerCase();

      const results = productsData.filter((product) => {
        // Search by name
        if (
          product.name &&
          product.name.toLowerCase().includes(lowerCaseQuery)
        ) {
          return true;
        }
        // Search by category
        if (
          product.category &&
          product.category.toLowerCase().includes(lowerCaseQuery)
        ) {
          return true;
        }
        // Search by subcategory
        if (
          product.subcategory &&
          product.subcategory.toLowerCase().includes(lowerCaseQuery)
        ) {
          return true;
        }
        // Search by tags
        if (product.tag && product.tag.toLowerCase().includes(lowerCaseQuery)) {
          return true;
        }
        return false;
      });

      setFilteredProducts(results);
      setLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fixed: Pass the entire product object instead of just productId
  const renderProductItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.productItem,
        { backgroundColor: cardBg, borderColor: borderColor },
      ]}
      onPress={() =>
        navigation.navigate("ProductDetailsScreen", { item: item })
      }
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={[styles.productName, { color: textColor }]}>
          {item.name}
        </Text>
        <Text style={[styles.productPrice, { color: primaryColor }]}>
          GHS {item.price.toFixed(2)}
        </Text>
        <Text style={[styles.productCategory, { color: subTextColor }]}>
          {item.category} ({item.subcategory})
        </Text>
        <Text style={[styles.productRating, { color: subTextColor }]}>
          Rating: {item.rating} ★
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: containerBg }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Header */}
      <View style={[styles.header, { backgroundColor: cardBg }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color={textColor} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: textColor }]}>
          Search Products
        </Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Search Input */}
      <TextInput
        style={[
          styles.searchInput,
          {
            backgroundColor: inputBg,
            borderColor: borderColor,
            color: textColor,
          },
        ]}
        placeholder="Search by name, category, or tag..."
        placeholderTextColor={placeholderColor}
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoCapitalize="none"
      />

      {/* Search Results */}
      {loading ? (
        <View style={styles.statusContainer}>
          <ActivityIndicator size="large" color={primaryColor} />
          <Text style={[styles.statusText, { color: subTextColor }]}>
            Searching...
          </Text>
        </View>
      ) : filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={renderProductItem}
          contentContainerStyle={styles.resultsList}
        />
      ) : searchQuery.trim() !== "" ? (
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, { color: subTextColor }]}>
            No products found for "{searchQuery}".
          </Text>
        </View>
      ) : (
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, { color: subTextColor }]}>
            Start typing to search for products.
          </Text>
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#eee",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchInput: {
    height: 50,
    marginHorizontal: 15,
    marginVertical: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
  },
  resultsList: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
    resizeMode: "cover",
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 3,
  },
  productCategory: {
    fontSize: 14,
    marginBottom: 3,
  },
  productRating: {
    fontSize: 13,
    fontStyle: "italic",
  },
  statusContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  statusText: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
});
