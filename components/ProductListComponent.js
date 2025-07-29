
// import React from "react";
// import { View, FlatList, StyleSheet, Dimensions } from "react-native";
// import ProductCard from "./ProductCard";
// import Banner from "./Banner";
// import PRODUCTS from "../src/data/products";

// const screenWidth = Dimensions.get("window").width;
// const itemSpacing = 10;
// const numColumns = 2;
// const itemWidth = (screenWidth - itemSpacing * (numColumns + 1)) / numColumns;

// const ProductListComponent = ({
//   navigation,
//   mainCategory = "All",
//   subCategory = "",
//   showBanner = false,
// }) => {
//   const filteredProducts = PRODUCTS.filter(
//     (product) =>
//       (mainCategory === "All" || product.category === mainCategory) &&
//       (!subCategory || product.subcategory === subCategory)
//   );

//   const renderItem = ({ item }) => (
//     <View style={styles.productWrapper}>
//       <ProductCard
//         image={item.image}
//         name={item.name}
//         price={item.price}
//         rating={item.rating}
//         tag={item.tag}
//         onPress={() => navigation.navigate("ProductDetailsScreen", { item })}
//         onPressImage={() =>
//           navigation.navigate("FullImageScreen", { image: item.image })
//         }
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={filteredProducts}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={numColumns}
//         contentContainerStyle={styles.list}
//         columnWrapperStyle={styles.row}
//         showsVerticalScrollIndicator={false}
//         ListHeaderComponent={showBanner ? <Banner /> : null}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: itemSpacing,
//     backgroundColor: "#fefefe",
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   row: {
//     justifyContent: "space-between",
//     marginBottom: itemSpacing,
//   },
//   productWrapper: {
//     width: itemWidth,
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     overflow: "hidden",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.07,
//     shadowRadius: 4,
//     elevation: 3, // Android shadow
//   },
// });

// export default ProductListComponent;

/////////////////////////////////////////
////////////////////////////////////

// import React from "react";
// import { View, FlatList, StyleSheet, Dimensions } from "react-native";
// import { useTranslation } from "react-i18next";
// import ProductCard from "./ProductCard";
// import Banner from "./Banner";
// import PRODUCTS from "../src/data/product1"; // Now using translated product1.js

// const screenWidth = Dimensions.get("window").width;
// const itemSpacing = 10;
// const numColumns = 2;
// const itemWidth = (screenWidth - itemSpacing * (numColumns + 1)) / numColumns;

// const ProductListComponent = ({
//   navigation,
//   mainCategory = "All",
//   subCategory = "",
//   showBanner = false,
// }) => {
//   const { i18n } = useTranslation();
//   const currentLang = i18n.language || 'en';

//   const filteredProducts = PRODUCTS.filter(
//     (product) =>
//       (mainCategory === "All" || product.category?.[currentLang] === mainCategory) &&
//       (!subCategory || product.subcategory?.[currentLang] === subCategory)
//   );

//   const renderItem = ({ item }) => (
//     <View style={styles.productWrapper}>
//       <ProductCard
//         image={item.image}
//         name={item.name?.[currentLang] || item.name.en}
//         price={item.price}
//         rating={item.rating}
//         tag={item.tag?.[currentLang] || item.tag.en}
//         onPress={() => navigation.navigate("ProductDetailsScreen", { item })}
//         onPressImage={() =>
//           navigation.navigate("FullImageScreen", { image: item.image })
//         }
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={filteredProducts}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={numColumns}
//         contentContainerStyle={styles.list}
//         columnWrapperStyle={styles.row}
//         showsVerticalScrollIndicator={false}
//         ListHeaderComponent={showBanner ? <Banner /> : null}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: itemSpacing,
//     backgroundColor: "#fefefe",
//   },
//   list: {
//     paddingBottom: 20,
//   },
//   row: {
//     justifyContent: "space-between",
//     marginBottom: itemSpacing,
//   },
//   productWrapper: {
//     width: itemWidth,
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     overflow: "hidden",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.07,
//     shadowRadius: 4,
//     elevation: 3,
//   },
// });

// export default ProductListComponent;


////////////////////////////////////////
////////////////////////////////////////

import React from "react";
import { View, FlatList, StyleSheet, Dimensions } from "react-native";
import ProductCard from "./ProductCard";
import Banner from "./Banner";
import PRODUCTS from "../src/data/product1"; // 👈 using translated product1.js
import { useTranslation } from "react-i18next"; // 👈 translation hook

const screenWidth = Dimensions.get("window").width;
const itemSpacing = 10;
const numColumns = 2;
const itemWidth = (screenWidth - itemSpacing * (numColumns + 1)) / numColumns;

const ProductListComponent = ({
  navigation,
  mainCategory = "All",
  subCategory = "",
  showBanner = false,
}) => {
  const { i18n } = useTranslation(); // 👈 get current language

  // current language (en, twi, ga, ewe)
  const lang = i18n.language;

  const filteredProducts = PRODUCTS.filter(
    (product) =>
      (mainCategory === "All" || product.category[lang] === mainCategory) &&
      (!subCategory || product.subcategory[lang] === subCategory)
  );

  const renderItem = ({ item }) => (
    <View style={styles.productWrapper}>
      <ProductCard
        image={item.image}
        name={item.name[lang]} // ✅ translated
        price={item.price}
        rating={item.rating}
        tag={item.tag[lang]} // ✅ translated
        onPress={() => navigation.navigate("ProductDetailsScreen", { item })}
        onPressImage={() =>
          navigation.navigate("FullImageScreen", { image: item.image })
        }
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={showBanner ? <Banner /> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: itemSpacing,
    backgroundColor: "#fefefe",
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: itemSpacing,
  },
  productWrapper: {
    width: itemWidth,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default ProductListComponent;
