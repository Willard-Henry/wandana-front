
import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
} from 'react-native';
import ProductCard from './ProductCard';
import Banner from './Banner';
import PRODUCTS from '../src/data/products';

const screenWidth = Dimensions.get('window').width;
const itemSpacing = 10;
const numColumns = 2;
const itemWidth = (screenWidth - itemSpacing * (numColumns + 1)) / numColumns;

<<<<<<< HEAD
const ProductListComponent = ({ navigation, mainCategory = 'All', subCategory = '', cardStyle, imageSize }) => {
=======
const ProductListComponent = ({ navigation, mainCategory = 'All', subCategory = '', showBanner = false }) => {
>>>>>>> 2203a3d8e840c4bb9a77e022f68f3c7c2014198f
    const filteredProducts = PRODUCTS.filter(product =>
        (mainCategory === 'All' || product.category === mainCategory) &&
        (!subCategory || product.subcategory === subCategory)
    );

    // const renderItem = ({ item }) => (
    //     <View style={styles.productWrapper}>
    //         <ProductCard
    //             image={item.image}
    //             name={item.name}
    //             price={item.price}
    //             rating={item.rating}
    //             tag={item.tag}
    //             onPress={() => navigation.navigate('ProductDetailsScreen', { item })}
    //             onPressImage={() => navigation.navigate('FullImageScreen', { image: item.image })}
    //         />
    //     </View>
    // );
const renderItem = ({ item }) => (
    <View style={styles.productWrapper}>
        <ProductCard
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
            tag={item.tag}
            onPress={() => navigation.navigate('ProductDetailsScreen', { item })}
            onPressImage={() => navigation.navigate('FullImageScreen', { image: item.image })}
            
             navigation={navigation}
  imageSize={imageSize}
  cardStyle={cardStyle}
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
<<<<<<< HEAD
                  navigation={navigation}
        cardStyle={cardStyle}
        imageSize={imageSize}
=======
                ListHeaderComponent={showBanner ? <Banner /> : null}
>>>>>>> 2203a3d8e840c4bb9a77e022f68f3c7c2014198f
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: itemSpacing,
        backgroundColor: '#fefefe',
    },
    list: {
        paddingBottom: 10,
        paddingBottom: 20,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: itemSpacing,
    },
    productWrapper: {
        width: itemWidth,
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 4,
        elevation: 3, // Android shadow
    },
});

export default ProductListComponent;
