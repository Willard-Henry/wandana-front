// // import React from 'react';
// // import { View, FlatList, StyleSheet } from 'react-native';
// // import ProductCard from './ProductCard';
// // import FullImageScreen from '../screens/FullImageScreen';
// // const PRODUCTS = [
// //     {
// //         id: '1',
// //         name: 'Ladies Official Dress',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://s.alicdn.com/@sc04/kf/H86323f72edd0495d8ac47e1627b2a67en.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '2',
// //         name: 'Floral Midi Dress',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://m.media-amazon.com/images/I/511TjqLpmnL._AC_UY1000_.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '3',
// //         name: 'Ladies Winter Suit',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/736x/db/a0/8d/dba08df2d10beda558ae1b74b5c165e7.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '4',
// //         name: 'Ladies Dress',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/736x/7c/cb/db/7ccbdb5a00ff80a216fed28716193a4b.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '5',
// //         name: 'Men Winter Suit',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/736x/3a/d5/1f/3ad51f42260bd0eb7559b8423991459e.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '6',
// //         name: 'Men Outfit',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/736x/b8/bb/78/b8bb78484c51e9faaa9bf1a770b8af44.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '7',
// //         name: 'Men Official Dress',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/736x/43/8a/02/438a02f2a8a17fef42031c2cce2a748e.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '8',
// //         name: 'Men Casual Dress',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/736x/cc/9c/45/cc9c45c7e87de35252628b585d7e11da.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '9',
// //         name: 'Kids Dress',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/736x/0f/f0/57/0ff057dc39321586f93bfdd57fa68bd9.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '10',
// //         name: 'Kids Wear',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/originals/cc/4c/97/cc4c97be955f795b6e37390cf38f04ce.png',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '11',
// //         name: 'Floral kid Dress',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/originals/94/5f/1b/945f1b79f7f43c52d79b0cba580dda8d.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '12',
// //         name: 'Floral kid Dress',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/736x/0e/f2/10/0ef2106ec2a61e3361b2cd60054ad14a.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '13',
// //         name: 'Floral kid Dress',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/736x/99/c7/49/99c749a7edd2fab6e05fa1130b110c86.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '14',
// //         name: 'Floral kid Dress',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/736x/c2/ca/32/c2ca32bdf456b52001ef8f013871ad47.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '15',
// //         name: 'Women Dress',
// //         price: 29.99,
// //         rating: 4.5,
// //         image: 'https://i.pinimg.com/736x/c6/aa/2a/c6aa2a0763aa947e1d56ee959c2f3941.jpg',
// //         tag: 'Bestseller',
// //     },
// //     {
// //         id: '16',
// //         name: 'Women Dress',
// //         price: 19.99,
// //         rating: 4.2,
// //         image: 'https://i.pinimg.com/736x/ae/8c/24/ae8c24bd917712e87f84aaf89f0e4cee.jpg',
// //         tag: 'New',
// //     },
// //     {
// //         id: '17',
// //         name: 'Women Dress',
// //         price: 39.99,
// //         rating: 4.8,
// //         image: 'https://i.pinimg.com/736x/52/33/37/523337b11e778a52550d0b945f05d36d.jpg',
// //         tag: 'Hot',
// //     },
// //     {
// //         id: '18',
// //         name: 'Women Dress',
// //         price: 49.99,
// //         rating: 4.7,
// //         image: 'https://i.pinimg.com/736x/c2/84/88/c284883b92b2269e2d078bb97dac3407.jpg',
// //         tag: 'Hot',
// //     },
// //     {
// //         id: '19',
// //         name: 'Women Dress',
// //         price: 49.99,
// //         rating: 4.7,
// //         image: 'https://i.pinimg.com/736x/fc/38/8e/fc388e7b9afcae28cb887011d005419d.jpg',
// //         tag: 'Hot',
// //     },

// //     {
// //         id: '21',
// //         name: 'Women Watch',
// //         price: 49.99,
// //         rating: 4.7,
// //         image: 'https://i.pinimg.com/736x/c7/03/bf/c703bf38c9f8312d5d0b120a7a35f778.jpg',
// //         tag: 'Hot',
// //     },
// //     {
// //         id: '22',
// //         name: 'Women Watch',
// //         price: 49.99,
// //         rating: 4.7,
// //         image: 'https://i.pinimg.com/736x/17/29/41/172941d3ca891217fe60db522dd98c17.jpg',
// //         tag: 'Hot',
// //     },
// //     {
// //         id: '23',
// //         name: 'Kids Sandals',
// //         price: 49.99,
// //         rating: 4.7,
// //         image: 'https://i.pinimg.com/736x/1a/08/af/1a08af0988f697e0155e42a712253453.jpg',
// //         tag: 'Hot',
// //     },
// //     {
// //         id: '24',
// //         name: 'Kids Shoe',
// //         price: 49.99,
// //         rating: 4.7,
// //         image: 'https://i.pinimg.com/736x/3d/8d/ca/3d8dcaef6782a64fe8755a2547aa7d77.jpg',
// //         tag: 'Hot',
// //     },
// //     {
// //         id: '25',
// //         name: 'Ladies Heels',
// //         price: 49.99,
// //         rating: 4.7,
// //         image: 'https://i.pinimg.com/736x/e1/d8/de/e1d8dee83c90f22acad9cb82512dae4b.jpg',
// //         tag: 'Hot',
// //     },
// //     {
// //         id: '26',
// //         name: 'Women Handbag',
// //         price: 59.99,
// //         rating: 4.6,
// //         image: 'https://i.pinimg.com/736x/b4/cd/97/b4cd973530edea6925da69c2f57ac6bc.jpg',
// //         tag: 'Super',
// //     },
// //     {
// //         id: '27',
// //         name: 'Women Handbag',
// //         price: 59.99,
// //         rating: 4.6,
// //         image: 'https://i.pinimg.com/736x/68/3c/50/683c506e48c8ebce8419281bcb719268.jpg',
// //         tag: 'Super',
// //     },
// // ];
// // const ProductListComponent = ({ navigation }) => {
// //     const renderItem = ({ item }) => (
// //         <ProductCard
// //             image={item.image}
// //             name={item.name}
// //             price={item.price}
// //             rating={item.rating}
// //             tag={item.tag}
// //             onPress={() => navigation.navigate("ProductDetailsScreen", { item })}
// //             onPressImage={() => navigation.navigate("FullImageScreen", { image: item.image })}
// //         />
// //     );

// //     return (
// //         <View style={styles.container}>
// //             <FlatList
// //                 data={PRODUCTS}
// //                 renderItem={renderItem}
// //                 keyExtractor={(item) => item.id.toString()}
// //                 numColumns={2}
// //                 contentContainerStyle={styles.list}
// //                 columnWrapperStyle={styles.row}
// //                 showsVerticalScrollIndicator={false}
// //                 initialNumToRender={10}
// //                 maxToRenderPerBatch={10}
// //                 windowSize={5}
// //                 bounces={false}
// //                 overScrollMode='never'
// //             />
// //         </View>
// //     );
// // };


// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         paddingHorizontal: 10,

// //         width: '100%',
// //         height: 10,

// //     },
// //     list: {
// //         paddingBottom: 10,
// //     },
// //     row: {
// //         justifyContent: 'space-between',
// //         alignItems: 'flex-start', // or 'center'
// //         justifyContent: 'right',
// //     },
// // });

// // export default ProductListComponent;

// //////////////////////////////////
// //////////////////////////////////

// import React from 'react';
// import { View, FlatList, StyleSheet } from 'react-native';
// import ProductCard from './ProductCard';

// const PRODUCTS = [
//     {
//         id: '1',
//         name: 'Ladies Official Dress',
//         category: 'Women',
//         subcategory: 'Official dress',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://s.alicdn.com/@sc04/kf/H86323f72edd0495d8ac47e1627b2a67en.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '2',
//         name: 'Floral Mini Dress',
//         category: 'Women',
//         subcategory: 'Casual dress',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://m.media-amazon.com/images/I/511TjqLpmnL._AC_UY1000_.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '3',
//         name: 'Ladies Winter Suit',
//         category: 'Women',
//         subcategory: 'Official dress',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/736x/db/a0/8d/dba08df2d10beda558ae1b74b5c165e7.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '4',
//         name: 'Ladies Dress',
//         category: 'Women',
//         subcategory: 'Casual dress',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/736x/7c/cb/db/7ccbdb5a00ff80a216fed28716193a4b.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '5',
//         name: 'Men Winter Suit',
//         category: 'Men',
//         subcategory: 'Men Official',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/736x/3a/d5/1f/3ad51f42260bd0eb7559b8423991459e.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '6',
//         name: 'Men Outfit',
//         category: 'Men',
//         subcategory: 'Men Casual',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/736x/b8/bb/78/b8bb78484c51e9faaa9bf1a770b8af44.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '7',
//         name: 'Men Official Dress',
//         category: 'Men',
//         subcategory: 'Men Official',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/736x/43/8a/02/438a02f2a8a17fef42031c2cce2a748e.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '8',
//         name: 'Men Casual Dress',
//         category: 'Men',
//         subcategory: 'Men Casual',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/736x/cc/9c/45/cc9c45c7e87de35252628b585d7e11da.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '9',
//         name: 'Kids Dress',
//         category: 'Kids',
//         subcategory: 'Casual dress',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/736x/0f/f0/57/0ff057dc39321586f93bfdd57fa68bd9.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '10',
//         name: 'Kids Wear',
//         category: 'Kids',
//         subcategory: 'Casual dress',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/originals/cc/4c/97/cc4c97be955f795b6e37390cf38f04ce.png',
//         tag: 'Bestseller',
//     },
//     {
//         id: '11',
//         name: 'Floral kid Dress',
//         category: 'Kids',
//         subcategory: 'Casual dress',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/originals/94/5f/1b/945f1b79f7f43c52d79b0cba580dda8d.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '12',
//         name: 'Floral kid Dress',
//         category: 'Kids',
//         subcategory: 'Casual dress',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/736x/0e/f2/10/0ef2106ec2a61e3361b2cd60054ad14a.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '13',
//         name: 'Floral kid Dress',
//         category: 'Kids',
//         subcategory: 'Casual dress',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/736x/99/c7/49/99c749a7edd2fab6e05fa1130b110c86.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '14',
//         name: 'Floral kid Dress',
//         category: 'Kids',
//         subcategory: 'Beachwear',
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/736x/c2/ca/32/c2ca32bdf456b52001ef8f013871ad47.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '15',
//         name: 'Women Dress',
//         category: 'Women',
//         subcategory: 'Casual dress', // as requested
//         price: 29.99,
//         rating: 4.5,
//         image: 'https://i.pinimg.com/736x/c6/aa/2a/c6aa2a0763aa947e1d56ee959c2f3941.jpg',
//         tag: 'Bestseller',
//     },
//     {
//         id: '16',
//         name: 'Women Dress',
//         category: 'Women',
//         subcategory: 'Casual dress', // as requested
//         price: 19.99,
//         rating: 4.2,
//         image: 'https://i.pinimg.com/736x/ae/8c/24/ae8c24bd917712e87f84aaf89f0e4cee.jpg',
//         tag: 'New',
//     },
//     {
//         id: '17',
//         name: 'Women Dress',
//         category: 'Women',
//         subcategory: 'Casual dress', // as requested
//         price: 39.99,
//         rating: 4.8,
//         image: 'https://i.pinimg.com/736x/52/33/37/523337b11e778a52550d0b945f05d36d.jpg',
//         tag: 'Hot',
//     },
//     {
//         id: '18',
//         name: 'Women Dress',
//         category: 'Women',
//         subcategory: 'Casual dress', // as requested
//         price: 49.99,
//         rating: 4.7,
//         image: 'https://i.pinimg.com/736x/c2/84/88/c284883b92b2269e2d078bb97dac3407.jpg',
//         tag: 'Hot',
//     },
//     {
//         id: '19',
//         name: 'Hand Bag',
//         category: 'Women',
//         subcategory: 'Bags', // as requested
//         price: 49.99,
//         rating: 4.7,
//         image: 'https://i.pinimg.com/736x/fc/38/8e/fc388e7b9afcae28cb887011d005419d.jpg',
//         tag: 'Hot',
//     },
//     {
//         id: '21',
//         name: 'Women Watch',
//         category: 'Women',
//         subcategory: 'Jewelry',
//         price: 49.99,
//         rating: 4.7,
//         image: 'https://i.pinimg.com/736x/c7/03/bf/c703bf38c9f8312d5d0b120a7a35f778.jpg',
//         tag: 'Hot',
//     },
//     {
//         id: '22',
//         name: 'Women Watch',
//         category: 'Women',
//         subcategory: 'Jewelry',
//         price: 49.99,
//         rating: 4.7,
//         image: 'https://i.pinimg.com/736x/17/29/41/172941d3ca891217fe60db522dd98c17.jpg',
//         tag: 'Hot',
//     },
//     {
//         id: '23',
//         name: 'Kids Sandals',
//         category: 'Kids',
//         subcategory: 'Footwear',
//         price: 49.99,
//         rating: 4.7,
//         image: 'https://i.pinimg.com/736x/1a/08/af/1a08af0988f697e0155e42a712253453.jpg',
//         tag: 'Hot',
//     },
//     {
//         id: '24',
//         name: 'Kids Shoe',
//         category: 'Kids',
//         subcategory: 'Footwear',
//         price: 49.99,
//         rating: 4.7,
//         image: 'https://i.pinimg.com/736x/3d/8d/ca/3d8dcaef6782a64fe8755a2547aa7d77.jpg',
//         tag: 'Hot',
//     },
//     {
//         id: '25',
//         name: 'Ladies Heels',
//         category: 'Women',
//         subcategory: 'Footwear',
//         price: 49.99,
//         rating: 4.7,
//         image: 'https://i.pinimg.com/736x/e1/d8/de/e1d8dee83c90f22acad9cb82512dae4b.jpg',
//         tag: 'Hot',
//     },
//     {
//         id: '26',
//         name: 'Women Handbag',
//         category: 'Women',
//         subcategory: 'Bags',
//         price: 59.99,
//         rating: 4.6,
//         image: 'https://i.pinimg.com/736x/b4/cd/97/b4cd973530edea6925da69c2f57ac6bc.jpg',
//         tag: 'Super',
//     },
//     {
//         id: '27',
//         name: 'Women Handbag',
//         category: 'Women',
//         subcategory: 'Bags',
//         price: 59.99,
//         rating: 4.6,
//         image: 'https://i.pinimg.com/736x/68/3c/50/683c506e48c8ebce8419281bcb719268.jpg',
//         tag: 'Super',
//     },
// ];

// const ProductListComponent = ({ navigation, mainCategory = "All", subCategory = "" }) => {
//     const filteredProducts = PRODUCTS.filter(product =>
//         (mainCategory === "All" || product.category === mainCategory) &&
//         (!subCategory || product.subcategory === subCategory)
//     );

//     const renderItem = ({ item }) => (
//         <ProductCard
//             image={item.image}
//             name={item.name}
//             price={item.price}
//             rating={item.rating}
//             tag={item.tag}
//             onPress={() => navigation.navigate("ProductDetailsScreen", { item })}
//             onPressImage={() => navigation.navigate("FullImageScreen", { image: item.image })}
//         />
//     );

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={filteredProducts}
//                 renderItem={renderItem}
//                 keyExtractor={(item) => item.id.toString()}
//                 numColumns={2}
//                 contentContainerStyle={styles.list}
//                 columnWrapperStyle={styles.row}
//                 showsVerticalScrollIndicator={false}
//                 initialNumToRender={10}
//                 maxToRenderPerBatch={10}
//                 windowSize={5}
//                 bounces={false}
//                 overScrollMode='never'
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingHorizontal: 10,
//         width: '100%',
//         // height: 10,
//     },
//     list: {
//         paddingBottom: 10,
//     },
//     row: {
//         justifyContent: 'space-between',
//         alignItems: 'flex-start',
//     },
// });

// export default ProductListComponent;






import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
} from 'react-native';
import ProductCard from './ProductCard';
const PRODUCTS = [
    {
        id: '1',
        name: 'Ladies Official Dress',
        category: 'Women',
        subcategory: 'Official dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://s.alicdn.com/@sc04/kf/H86323f72edd0495d8ac47e1627b2a67en.jpg',
        tag: 'Bestseller',
    },
    {
        id: '2',
        name: 'Floral Mini Dress',
        category: 'Women',
        subcategory: 'Casual dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://m.media-amazon.com/images/I/511TjqLpmnL._AC_UY1000_.jpg',
        tag: 'Bestseller',
    },
    {
        id: '3',
        name: 'Ladies Winter Suit',
        category: 'Women',
        subcategory: 'Official dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/736x/db/a0/8d/dba08df2d10beda558ae1b74b5c165e7.jpg',
        tag: 'Bestseller',
    },
    {
        id: '4',
        name: 'Ladies Dress',
        category: 'Women',
        subcategory: 'Casual dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/736x/7c/cb/db/7ccbdb5a00ff80a216fed28716193a4b.jpg',
        tag: 'Bestseller',
    },
    {
        id: '5',
        name: 'Men Winter Suit',
        category: 'Men',
        subcategory: 'Men Official',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/736x/3a/d5/1f/3ad51f42260bd0eb7559b8423991459e.jpg',
        tag: 'Bestseller',
    },
    {
        id: '6',
        name: 'Men Outfit',
        category: 'Men',
        subcategory: 'Casual dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/736x/b8/bb/78/b8bb78484c51e9faaa9bf1a770b8af44.jpg',
        tag: 'Bestseller',
    },
    {
        id: '7',
        name: 'Men Official Dress',
        category: 'Men',
        subcategory: 'Men Official',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/736x/43/8a/02/438a02f2a8a17fef42031c2cce2a748e.jpg',
        tag: 'Bestseller',
    },
    {
        id: '8',
        name: 'Men Casual Dress',
        category: 'Men',
        subcategory: 'Men Casual',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/736x/cc/9c/45/cc9c45c7e87de35252628b585d7e11da.jpg',
        tag: 'Bestseller',
    },
    {
        id: '9',
        name: 'Kids Dress',
        category: 'Kids',
        subcategory: 'Casual dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/736x/0f/f0/57/0ff057dc39321586f93bfdd57fa68bd9.jpg',
        tag: 'Bestseller',
    },
    {
        id: '10',
        name: 'Kids Wear',
        category: 'Kids',
        subcategory: 'Casual dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/originals/cc/4c/97/cc4c97be955f795b6e37390cf38f04ce.png',
        tag: 'Bestseller',
    },
    {
        id: '11',
        name: 'Floral kid Dress',
        category: 'Kids',
        subcategory: 'Casual dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/originals/94/5f/1b/945f1b79f7f43c52d79b0cba580dda8d.jpg',
        tag: 'Bestseller',
    },
    {
        id: '12',
        name: 'Floral kid Dress',
        category: 'Kids',
        subcategory: 'Casual dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/736x/0e/f2/10/0ef2106ec2a61e3361b2cd60054ad14a.jpg',
        tag: 'Bestseller',
    },
    {
        id: '13',
        name: 'Floral kid Dress',
        category: 'Kids',
        subcategory: 'Casual dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/736x/99/c7/49/99c749a7edd2fab6e05fa1130b110c86.jpg',
        tag: 'Bestseller',
    },
    {
        id: '14',
        name: 'Floral kid Dress',
        category: 'Kids',
        subcategory: 'Beachwear',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/736x/c2/ca/32/c2ca32bdf456b52001ef8f013871ad47.jpg',
        tag: 'Bestseller',
    },
    {
        id: '15',
        name: 'Women Dress',
        category: 'Women',
        subcategory: 'Casual dress', // as requested
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/736x/c6/aa/2a/c6aa2a0763aa947e1d56ee959c2f3941.jpg',
        tag: 'Bestseller',
    },
    {
        id: '16',
        name: 'Women Dress',
        category: 'Women',
        subcategory: 'Casual dress', // as requested
        price: 19.99,
        rating: 4.2,
        image: 'https://i.pinimg.com/736x/ae/8c/24/ae8c24bd917712e87f84aaf89f0e4cee.jpg',
        tag: 'New',
    },
    {
        id: '17',
        name: 'Women Dress',
        category: 'Women',
        subcategory: 'Casual dress', // as requested
        price: 39.99,
        rating: 4.8,
        image: 'https://i.pinimg.com/736x/52/33/37/523337b11e778a52550d0b945f05d36d.jpg',
        tag: 'Hot',
    },
    {
        id: '18',
        name: 'Women Dress',
        category: 'Women',
        subcategory: 'Casual dress', // as requested
        price: 49.99,
        rating: 4.7,
        image: 'https://i.pinimg.com/736x/c2/84/88/c284883b92b2269e2d078bb97dac3407.jpg',
        tag: 'Hot',
    },
    {
        id: '19',
        name: 'Hand Bag',
        category: 'Women',
        subcategory: 'Bags', // as requested
        price: 49.99,
        rating: 4.7,
        image: 'https://i.pinimg.com/736x/fc/38/8e/fc388e7b9afcae28cb887011d005419d.jpg',
        tag: 'Hot',
    },
    {
        id: '21',
        name: 'Women Watch',
        category: 'Women',
        subcategory: 'Jewelry',
        price: 49.99,
        rating: 4.7,
        image: 'https://i.pinimg.com/736x/c7/03/bf/c703bf38c9f8312d5d0b120a7a35f778.jpg',
        tag: 'Hot',
    },
    {
        id: '22',
        name: 'Women Watch',
        category: 'Women',
        subcategory: 'Jewelry',
        price: 49.99,
        rating: 4.7,
        image: 'https://i.pinimg.com/736x/17/29/41/172941d3ca891217fe60db522dd98c17.jpg',
        tag: 'Hot',
    },
    {
        id: '23',
        name: 'Kids Sandals',
        category: 'Kids',
        subcategory: 'Footwear',
        price: 49.99,
        rating: 4.7,
        image: 'https://i.pinimg.com/736x/1a/08/af/1a08af0988f697e0155e42a712253453.jpg',
        tag: 'Hot',
    },
    {
        id: '24',
        name: 'Kids Shoe',
        category: 'Kids',
        subcategory: 'Footwear',
        price: 49.99,
        rating: 4.7,
        image: 'https://i.pinimg.com/736x/3d/8d/ca/3d8dcaef6782a64fe8755a2547aa7d77.jpg',
        tag: 'Hot',
    },
    {
        id: '25',
        name: 'Ladies Heels',
        category: 'Women',
        subcategory: 'Footwear',
        price: 49.99,
        rating: 4.7,
        image: 'https://i.pinimg.com/736x/e1/d8/de/e1d8dee83c90f22acad9cb82512dae4b.jpg',
        tag: 'Hot',
    },
    {
        id: '26',
        name: 'Women Handbag',
        category: 'Women',
        subcategory: 'Bags',
        price: 59.99,
        rating: 4.6,
        image: 'https://i.pinimg.com/736x/b4/cd/97/b4cd973530edea6925da69c2f57ac6bc.jpg',
        tag: 'Super',
    },
    {
        id: '27',
        name: 'Women Handbag',
        category: 'Women',
        subcategory: 'Bags',
        price: 59.99,
        rating: 4.6,
        image: 'https://i.pinimg.com/736x/68/3c/50/683c506e48c8ebce8419281bcb719268.jpg',
        tag: 'Super',
    },
];

const screenWidth = Dimensions.get('window').width;
const itemSpacing = 10;
const numColumns = 2;
const itemWidth = (screenWidth - itemSpacing * (numColumns + 1)) / numColumns;

const ProductListComponent = ({ navigation, mainCategory = 'All', subCategory = '', cardStyle, imageSize }) => {
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
                  navigation={navigation}
        cardStyle={cardStyle}
        imageSize={imageSize}
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
