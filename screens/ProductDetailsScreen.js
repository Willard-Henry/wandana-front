
import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  LayoutAnimation,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import REVIEWS from '../src/data/reviews';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PRODUCTS from '../src/data/products';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';


const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function ProductDetailsScreen({ route, navigation }) {
  const { item } = route.params;
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState(false);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const shuffled = [...REVIEWS].sort(() => 0.5 - Math.random());
      const count = Math.floor(Math.random() * 5) + 2; // 3–7
      setDisplayedReviews(shuffled.slice(0, count));
    }, [])
  );


  useEffect(() => {
    const randomDuration = Math.random() * 2000;
    const timer = setTimeout(() => setLoading(false), randomDuration);
    return () => clearTimeout(timer);
  }, []);


  // const relatedProducts = PRODUCTS.filter(
  //   (p) => p.subcategory === item.subcategory && p.id !== item.id
  // );

  const relatedProducts = [...PRODUCTS]
    .filter(
      (p) =>
        p.category === item.category &&
        Math.abs(p.price - item.price) <= 50 &&
        p.id !== item.id
    )
    .sort(() => 0.5 - Math.random()) // shuffle
    .slice(0, 6); // limit results


  const handleAddToCart = () => {
    addToCart({ ...item, quantity, size: selectedSize });
    navigation.navigate('MainTabs', { screen: 'Cart' });
  };

  const handleAddToWishlist = () => {
    addToWishlist({ ...item, quantity, size: selectedSize });
    navigation.navigate('Wishlist');
  };

  const renderReview = ({ item }) => (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        {item.avatar ? (
          <Image source={{ uri: item.avatar }} style={styles.avatarImage} />
        ) : (
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>{item.name[0]}</Text>
          </View>
        )}
        <View>
          <Text style={styles.reviewName}>{item.name}</Text>
          <View style={styles.starRow}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon
                key={i}
                name={i < item.rating ? 'star' : 'star-border'}
                size={16}
                color={i < item.rating ? '#FFD700' : '#ccc'}
              />
            ))}
          </View>
        </View>
      </View>
      <Text style={styles.reviewComment}>{item.comment}</Text>
    </View>
  );

  const visibleReviews = expandedReviews ? displayedReviews : displayedReviews.slice(0, 2);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.pageWrapper}>

          {/* Product Image with Shimmer */}
          <View style={styles.imageContainer}>
            {loading ? (
              <ShimmerPlaceholder LinearGradient={LinearGradient} style={styles.image} />
            ) : (
              <>
                <Image source={{ uri: item.image }} style={styles.image} />
                {item.tag && <Text style={styles.tag}>{item.tag}</Text>}
              </>
            )}
          </View>

          <View style={styles.content}>

            {/* Product Name & Price with Shimmer */}
            <View style={styles.headerRow}>
              {loading ? (
                <>
                  <ShimmerPlaceholder
                    LinearGradient={LinearGradient}
                    style={{ width: '60%', height: 28, borderRadius: 8 }}
                  />
                  <ShimmerPlaceholder
                    LinearGradient={LinearGradient}
                    style={{ width: 80, height: 28, borderRadius: 8 }}
                  />
                </>
              ) : (
                <>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>₵{item.price.toFixed(2)}</Text>
                </>
              )}
            </View>

            {/* Size Selector with Shimmer */}
            <Text style={styles.sectionLabel}>Select Size</Text>
            {loading ? (
              <View style={{ flexDirection: 'row', gap: 12, marginBottom: 24 }}>
                {Array(3).fill(null).map((_, i) => (
                  <ShimmerPlaceholder
                    key={i}
                    LinearGradient={LinearGradient}
                    style={{ width: 44, height: 44, borderRadius: 22 }}
                  />
                ))}
              </View>
            ) : (
              <View style={styles.sizeCircleList}>
                {SIZES.map((size) => (
                  <TouchableOpacity
                    key={size}
                    style={[
                      styles.sizeCircle,
                      selectedSize === size && styles.sizeCircleSelected,
                    ]}
                    onPress={() => setSelectedSize(size)}
                  >
                    <Text
                      style={[
                        styles.sizeCircleText,
                        selectedSize === size && styles.sizeCircleTextSelected,
                      ]}
                    >
                      {size}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Quantity Selector with Shimmer */}
            <Text style={styles.sectionLabel}>Quantity</Text>
            {loading ? (
              <View style={{ flexDirection: 'row', gap: 20, marginBottom: 24 }}>
                <ShimmerPlaceholder
                  LinearGradient={LinearGradient}
                  style={{ width: 44, height: 44, borderRadius: 10 }}
                />
                <ShimmerPlaceholder
                  LinearGradient={LinearGradient}
                  style={{ width: 44, height: 44, borderRadius: 10 }}
                />
                <ShimmerPlaceholder
                  LinearGradient={LinearGradient}
                  style={{ width: 44, height: 44, borderRadius: 10 }}
                />
              </View>
            ) : (
              <View style={styles.qtyRow}>
                <TouchableOpacity onPress={() => setQuantity(q => Math.max(1, q - 1))} style={styles.qtyBtn}>
                  <Icon name="remove" size={20} color="#333" />
                </TouchableOpacity>
                <Text style={styles.qtyText}>{quantity}</Text>
                <TouchableOpacity onPress={() => setQuantity(q => q + 1)} style={styles.qtyBtn}>
                  <Icon name="add" size={20} color="#333" />
                </TouchableOpacity>
              </View>
            )}

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <View style={{ marginBottom: 32 }}>
                <Text style={styles.sectionLabel}>Similar Products</Text>
                <FlatList
                  data={relatedProducts}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item: prod }) => (
                    <TouchableOpacity
                      onPress={() => navigation.replace('ProductDetailsScreen', { item: prod })}
                      style={styles.relatedItem}
                    >
                      <Image source={{ uri: prod.image }} style={styles.relatedImage} />
                      <Text numberOfLines={1} style={styles.relatedName}>{prod.name}</Text>
                      <Text style={styles.relatedPrice}>₵{prod.price.toFixed(2)}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}

            {/* Customer Reviews */}
            <Text style={styles.sectionLabel}>Customer Reviews</Text>
            <FlatList
              data={visibleReviews}
              keyExtractor={(item) => item.id}
              renderItem={renderReview}
              scrollEnabled={false}
              contentContainerStyle={{ paddingBottom: 12 }}
            />

            {displayedReviews.length > 2 && !expandedReviews && (
              <TouchableOpacity
                onPress={() => {
                  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                  setExpandedReviews(true);
                }}
                style={styles.showMoreButton}
              >
                <Text style={styles.showMoreText}>Show More Reviews</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>


      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.wishlistButton} onPress={handleAddToWishlist}>
          <Icon name="favorite-border" size={24} color="#7f00ff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
          <Text style={styles.cartButtonText}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buyNowButton}
          onPress={() => {
            navigation.navigate('Checkout', {
              item,
              quantity,
              size: selectedSize,
            });
          }}
        >
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageContainer: {
    width: '100%',
    height: 400,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  tag: {
    position: 'absolute',
    top: 16,
    left: 16,
    backgroundColor: '#7f00ff',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    fontWeight: '600',
    fontSize: 12,
  },
  content: {
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  productName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e1e1e',
    flex: 1,
    marginRight: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: '600',
    color: '#7f00ff',
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#444',
  },
  sizeCircleList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  sizeCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  sizeCircleSelected: {
    backgroundColor: '#7f00ff',
    borderColor: '#7f00ff',
  },
  sizeCircleText: {
    color: '#333',
    fontWeight: '600',
  },
  sizeCircleTextSelected: {
    color: '#fff',
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  qtyBtn: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 10,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 20,
  },
  // bottomBar: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   backgroundColor: '#fff',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: 16,
  //   paddingBottom: 40,
  //   borderTopWidth: 1,
  //   borderTopColor: '#eee',
  // },

  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },

  // addToCartButton: {
  //   flex: 1,
  //   backgroundColor: '#7f00ff',
  //   paddingVertical: 14,
  //   borderRadius: 12,
  //   alignItems: 'center',
  //   marginRight: 12,
  // },
  cartButton: {
    flex: 1,
    backgroundColor: '#7f00ff',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 12,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  // addToCartText: {
  //   color: '#fff',
  //   fontSize: 16,
  //   fontWeight: '700',
  // },
  // wishlistButton: {
  //   padding: 14,
  //   borderRadius: 12,
  //   backgroundColor: '#eee',
  // },
  wishlistButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  heart: {
    fontSize: 20,
  },
  reviewCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: '#eee',
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#444',
  },
  reviewName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },
  reviewComment: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  showMoreButton: {
    marginTop: -8,
    alignItems: 'center',
  },
  showMoreText: {
    color: '#7f00ff',
    fontWeight: '600',
    paddingVertical: 8,
  },
  avatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  starRow: {
    flexDirection: 'row',
    marginTop: 2,
  },
  pageWrapper: {
    flex: 1,
    paddingBottom: 15,
  },
  relatedItem: {
    width: 120,
    marginRight: 12,
    alignItems: 'center',
  },
  relatedImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  relatedName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  relatedPrice: {
    fontSize: 14,
    color: '#7f00ff',
  },
  buyNowButton: {
    backgroundColor: '#5a00cc', // A standout color, adjust as you like
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 12,
  },

  // buyNowText: {
  //   color: '#fff',
  //   fontSize: 16,
  //   fontWeight: '700',
  // },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});

