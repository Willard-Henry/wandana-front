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

  const filteredProducts = PRODUCTS.filter((product) => {
    const productCategory = product.category?.[lang];
    const productSubcategory = product.subcategory?.[lang];

    const mainCategoryMatch =
      mainCategory === "All" || productCategory === mainCategory;
    const subCategoryMatch = !subCategory || productSubcategory === subCategory;

    return mainCategoryMatch && subCategoryMatch;
  });

  const renderItem = ({ item }) => (
    <View style={styles.productWrapper}>
      <ProductCard
        image={item.image}
        name={item.name?.[lang] || item.name?.en || item.name || ""} // Safely access name, fallback to 'en', then empty string
        price={item.price}
        rating={item.rating}
        tag={item.tag?.[lang] || item.tag?.en || item.tag || ""} // Safely access tag, fallback to 'en', then empty string
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
