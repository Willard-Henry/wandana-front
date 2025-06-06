import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ProductCard from './ProductCard';

const PRODUCTS = [
    {
        id: '1',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://s.alicdn.com/@sc04/kf/H86323f72edd0495d8ac47e1627b2a67en.jpg',
        tag: 'Bestseller',
    },
    {
        id: '2',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://m.media-amazon.com/images/I/511TjqLpmnL._AC_UY1000_.jpg',
        tag: 'Bestseller',
    },
    {
        id: '3',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: '',
        tag: 'Bestseller',
    },
    {
        id: '4',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://www.alibaba.com/showroom/latest-ladies-official-dresses.jpeg',
        tag: 'Bestseller',
    },
    {
        id: '5',
        name: 'Official Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://i.pinimg.com/videos/thumbnails/originals/f7/29/ca/f729ca0234eba77cccb8016ab22c47c6.0000000.jpg',
        tag: 'Bestseller',
    },
    {
        id: '6',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1600180758890-6d8491b47ce6',
        tag: 'Bestseller',
    },
    {
        id: '7',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1600180758890-6d8491b47ce6',
        tag: 'Bestseller',
    },
    {
        id: '8',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1600180758890-6d8491b47ce6',
        tag: 'Bestseller',
    },
    {
        id: '9',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1600180758890-6d8491b47ce6',
        tag: 'Bestseller',
    },
    {
        id: '10',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1600180758890-6d8491b47ce6',
        tag: 'Bestseller',
    },
    {
        id: '11',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1600180758890-6d8491b47ce6',
        tag: 'Bestseller',
    },
    {
        id: '12',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1600180758890-6d8491b47ce6',
        tag: 'Bestseller',
    },
    {
        id: '13',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1600180758890-6d8491b47ce6',
        tag: 'Bestseller',
    },
    {
        id: '14',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1600180758890-6d8491b47ce6',
        tag: 'Bestseller',
    },
    {
        id: '15',
        name: 'Floral Midi Dress',
        price: 29.99,
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1600180758890-6d8491b47ce6',
        tag: 'Bestseller',
    },
    {
        id: '16',
        name: 'Men T-Shirt',
        price: 19.99,
        rating: 4.2,
        image: 'https://images.unsplash.com/photo-1585386959984-a41552276b0e',
        tag: 'New',
    },
    {
        id: '17',
        name: 'Women Sandals',
        price: 39.99,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1596464716122-08b2cfb38165',
        tag: '',
    },
    {
        id: '18',
        name: 'Sneakers',
        price: 49.99,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1606813902894-6cfb1a00c318',
        tag: 'Hot',
    },
    {
        id: '19',
        name: 'Sneakers',
        price: 49.99,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1606813902894-6cfb1a00c318',
        tag: 'Hot',
    },

    {
        id: '21',
        name: 'Sneakers',
        price: 49.99,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1606813902894-6cfb1a00c318',
        tag: 'Hot',
    },
    {
        id: '22',
        name: 'Sneakers',
        price: 49.99,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1606813902894-6cfb1a00c318',
        tag: 'Hot',
    },
    {
        id: '23',
        name: 'Sneakers',
        price: 49.99,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1606813902894-6cfb1a00c318',
        tag: 'Hot',
    },
    {
        id: '24',
        name: 'Sneakers',
        price: 49.99,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1606813902894-6cfb1a00c318',
        tag: 'Hot',
    },
    {
        id: '25',
        name: 'Sneakers',
        price: 49.99,
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1606813902894-6cfb1a00c318',
        tag: 'Hot',
    },
    {
        id: '26',
        name: 'Handbag',
        price: 59.99,
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1585386959984-a41552276b0e',
        tag: '',
    },
];

const ProductListComponent = () => {
    const renderItem = ({ item }) => (
        <ProductCard
            image={item.image}
            name={item.name}
            price={item.price}
            rating={item.rating}
            tag={item.tag}
            onPress={() => console.log('Pressed:', item.name)}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={PRODUCTS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        
        width: '100%',
        height:10,
         
    },
    list: {
        paddingBottom: 100,
    },
    row: {
        justifyContent: 'space-between',
        alignItems: 'right',
            justifyContent: 'right',
    },
});

export default ProductListComponent;