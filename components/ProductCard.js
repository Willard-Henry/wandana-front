import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ image, name, price, rating, tag, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: image }} style={styles.image} />
            {tag ? <Text style={styles.tag}>{tag}</Text> : null}
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>${price}</Text>
            <Text style={styles.rating}>⭐ {rating}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#EFE4D2',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        flex: 1,
        elevation: 3,

    },
    image: {
        width: '100%',
        height: 140,
        borderRadius: 8,
    },
    tag: {
        backgroundColor: '#7f00ff',
        color: '#fff',
        fontSize: 12,
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderRadius: 4,
        marginTop: 6,
        alignSelf: 'flex-start',
    },
    name: {
        marginTop: 6,
        fontSize: 14,
        fontWeight: '600',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    rating: {
        fontSize: 12,
        color: '#888',
    },
});

export default
    React.memo(ProductCard);