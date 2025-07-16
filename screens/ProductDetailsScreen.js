
// import React, { useState, useContext } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   SafeAreaView,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { CartContext } from "../context/CartContext";
// import { WishlistContext } from "../context/WishlistContext";


// const ProductDetailsScreen = ({ route, navigation }) => {
//   const { item } = route.params;
//   const { addToCart } = useContext(CartContext);
//   const { addToWishlist } = useContext(WishlistContext);

//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("Medium");

//   const handleAddToWishlist = () => {
//     addToWishlist({
//       id: item.id,
//       name: item.name,
//       image: item.image,
//       price: item.price,
//       size: selectedSize,
//       quantity,
//     });
//     navigation.navigate("Wishlist");
//   };

//   const handleAddToCart = () => {
//     addToCart({
//       id: item.id,
//       name: item.name,
//       image: item.image,
//       price: item.price,
//       quantity,
//       size: selectedSize,
//     });

//     navigation.navigate("MainTabs", { screen: 'Cart' });
//   };

//   return (
//     <SafeAreaView style={styles.safe}>
//       <View style={styles.imageContainer}>
//         <Image source={{ uri: item.image }} style={styles.image} />
//         <LinearGradient
//           colors={["transparent", "#fff"]}
//           style={styles.fadeOverlay}
//         />
//       </View>

//       <View style={styles.overlayContent}>
//         <Text style={styles.name}>{item.name}</Text>
//         <Text style={styles.price}>${item.price}</Text>

//         <View style={styles.sizeContainer}>
//           {["Small", "Medium", "Large"].map((size) => (
//             <TouchableOpacity
//               key={size}
//               style={[
//                 styles.sizeOption,
//                 selectedSize === size && styles.selectedSize,
//               ]}
//               onPress={() => setSelectedSize(size)}
//             >
//               <Text>{size}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>

//         <View style={styles.quantityContainer}>
//           <TouchableOpacity
//             onPress={() => setQuantity((q) => Math.max(1, q - 1))}
//             style={styles.qtyButton}
//           >
//             <Text style={styles.qtySymbol}>-</Text>
//           </TouchableOpacity>
//           <Text style={styles.quantityText}>{quantity}</Text>
//           <TouchableOpacity
//             onPress={() => setQuantity((q) => q + 1)}
//             style={styles.qtyButton}
//           >
//             <Text style={styles.qtySymbol}>+</Text>
//           </TouchableOpacity>
//         </View>

//         {/* <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
//           <Text style={styles.addToCartText}></Text>
//         </TouchableOpacity> */}
//         <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
//           <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
//             <Text style={styles.addToCartText}>Add to Cart</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.wishlistButton} onPress={handleAddToWishlist}>
//             <Text style={{ fontSize: 24,marginBottom: 20 }}>❤️</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: "#fff"
//   },
//   imageContainer:
//   {
//     height: 400,
//     width: "100%",
//     position: "relative"
//   },
//   image:
//   {
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover"
//   },
//   fadeOverlay:
//   {
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     height: 120
//   },
//   overlayContent: {
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     padding: 24,
//     backgroundColor: "rgba(255, 255, 255, 0.95)",
//     borderTopLeftRadius: 32,
//     borderTopRightRadius: 32,
//   },
//   name: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 4
//   },
//   price: {
//     fontSize: 18,
//     color: "#7f00ff",
//     marginBottom: 12
//   },
//   sizeContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 12,
//   },
//   sizeOption: {
//     borderWidth: 1,
//     borderColor: "#ccc",
//     padding: 10,
//     borderRadius: 10,
//   },
//   selectedSize: {
//     backgroundColor: "#ddd",
//   },
//   quantityContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 20,
//   },
//   qtyButton: {
//     backgroundColor: "#f0f0f0",
//     padding: 12,
//     borderRadius: 12,
//     marginHorizontal: 20,
//   },
//   qtySymbol: { fontSize: 20, fontWeight: "bold" },
//   quantityText: { fontSize: 20, fontWeight: "600" },
//   addToCartButton: {
//     backgroundColor: "#7f00ff",
//     padding: 10,
//     borderRadius: 10,
//     alignItems: "center",
//     marginBottom: 20
//   },
//   addToCartText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default ProductDetailsScreen;

import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,

} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { LinearGradient } from "expo-linear-gradient";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductDetailsScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium");

  const handleAddToWishlist = () => {
    addToWishlist({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      size: selectedSize,
      quantity,
    });
    navigation.navigate("Wishlist");
  };

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      quantity,
      size: selectedSize,
    });
    navigation.navigate("MainTabs", { screen: "Cart" });
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      {/* <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <LinearGradient
          colors={["transparent", "#fff"]}
          style={styles.fadeOverlay}
        />
      </View> */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        {item.tag && <Text style={styles.tag}>{item.tag}</Text>}
      </View>


      <View style={styles.overlayContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

        <View style={styles.sizeContainer}>
          {["Small", "Medium", "Large"].map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeOption,
                selectedSize === size && styles.selectedSize,
              ]}
              onPress={() => setSelectedSize(size)}
            >
              <Text
                style={{
                  color: selectedSize === size ? "#fff" : "#333",
                  fontWeight: "600",
                }}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => setQuantity((q) => Math.max(1, q - 1))}
            style={styles.qtyButton}
          >
            <Text style={styles.qtySymbol}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => setQuantity((q) => q + 1)}
            style={styles.qtyButton}
          >
            <Text style={styles.qtySymbol}>+</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={[styles.addToCartButton, { flex: 1, marginRight: 10 }]}
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wishlistButton} onPress={handleAddToWishlist}>
            <Text style={styles.heart}>❤️</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingTop: 30, // Adjust for status bar
  },
  // imageContainer: {
  //   height: 400,
  //   width: "100%",
  //   position: "relative",
  // },
  // image: {
  //   width: "100%",
  //   height: "100%",
  //   resizeMode: "cover",
  // },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 280,
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  tag: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: '#7f00ff',
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    fontSize: 12,
    fontWeight: '600',
  },

  fadeOverlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 120,
    zIndex: 5,
  },
  overlayContent: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 24,
    paddingHorizontal: 24,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#222",
  },
  price: {
    fontSize: 18,
    color: "#7f00ff",
    marginBottom: 12,
  },
  sizeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  sizeOption: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  selectedSize: {
    backgroundColor: "#7f00ff",
    borderColor: "#7f00ff",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  qtyButton: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 12,
    marginHorizontal: 20,
  },
  qtySymbol: {
    fontSize: 20,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 20,
    fontWeight: "600",
  },
  addToCartButton: {
    backgroundColor: "#7f00ff",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  wishlistButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
    marginBottom: 20,
  },
  heart: {
    fontSize: 22,
  },
});

export default ProductDetailsScreen;
