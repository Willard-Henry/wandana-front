// // // // screens/CheckoutScreen.js
// // // import React from "react";
// // // import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// // // const CheckoutScreen = ({ navigation }) => {
// // //     return (
// // //         <View style={styles.container}>
// // //             <Text style={styles.header}>Checkout</Text>

// // //             <View style={styles.summaryBox}>
// // //                 <Text style={styles.text}>Order Summary</Text>
// // //                 <Text style={styles.text}>Total: $123.00</Text>

// // //             </View>

// // //             <TouchableOpacity style={styles.button}>
// // //                 <Text style={styles.buttonText}>Place Order</Text>
// // //             </TouchableOpacity>
// // //         </View>
// // //     );
// // // };

// // // export default CheckoutScreen;

// // // const styles = StyleSheet.create({
// // //     container: {
// // //         flex: 1,
// // //         padding: 20,
// // //         justifyContent: "space-between",
// // //     },
// // //     header: {
// // //         fontSize: 28,
// // //         fontWeight: "bold",
// // //         paddingTop: 20,
// // //     },
// // //     summaryBox: {
// // //         padding: 16,
// // //         backgroundColor: "#f3f3f3",
// // //         borderRadius: 8,
// // //         marginTop: 20,
// // //     },
// // //     text: {
// // //         fontSize: 18,
// // //         marginBottom: 6,
// // //     },
// // //     // button: {
// // //     //     backgroundColor: "#7f00ff",
// // //     //     padding: 16,
// // //     //     borderRadius: 8,
// // //     //     alignItems: "center",
// // //     //     marginBottom: 20,
// // //     // },
// // //     buttonText: {
// // //         color: "#fff",
// // //         fontSize: 18,
// // //     },
// // //     button: {
// // //         backgroundColor: "#7f00ff",
// // //         paddingVertical: 16,
// // //         borderRadius: 30,
// // //         alignItems: "center",
// // //         marginBottom: 25,
// // //     },
// // //     checkoutText: {
// // //         color: "#fff",
// // //         fontSize: 16,
// // //         fontWeight: "bold",
// // //     },
// // // });

// import React, { useContext } from "react";
// import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
// import { CartContext } from "../context/CartContext";

// const CheckoutScreen = () => {
//     const { cartItems } = useContext(CartContext);

//     const calculateTotal = () => {
//         return cartItems
//             .reduce((total, item) => total + item.price * item.quantity, 0)
//             .toFixed(2);
//     };

//     const renderItem = ({ item }) => (
//         <View style={styles.itemContainer}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//             <View style={styles.itemDetails}>
//                 <Text style={styles.name}>{item.name}</Text>
//                 <Text style={styles.quantity}>Qty: {item.quantity}</Text>
//                 <Text style={styles.price}>₵{(item.price * item.quantity).toFixed(2)}</Text>
//             </View>
//         </View>
//     );

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={cartItems}
//                 keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
//                 renderItem={renderItem}
//                 contentContainerStyle={styles.list}
//                 ListFooterComponent={
//                     <View style={styles.footer}>
//                         <Text style={styles.totalText}>Total: ₵{calculateTotal()}</Text>
//                         <TouchableOpacity style={styles.button}>
//                             <Text style={styles.buttonText}>Confirm Order</Text>
//                         </TouchableOpacity>
//                     </View>
//                 }
//                 showsVerticalScrollIndicator={false}
//                 bounces={false}
//             />
//         </View>
//     );
// };

// export default CheckoutScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: "#fff",
//     },
//     list: {
//         paddingBottom: 100,
//         paddingTop: 40
//     },
//     itemContainer: {
//         flexDirection: "row",
//         marginBottom: 16,
//         borderBottomWidth: 1,
//         borderBottomColor: "#eee",
//         paddingBottom: 8,
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 8,
//         marginRight: 12,
//     },
//     itemDetails: {
//         flex: 1,
//         justifyContent: "space-between",
//     },
//     name: {
//         fontSize: 16,
//         fontWeight: "600",
//     },
//     quantity: {
//         fontSize: 14,
//         color: "#666",
//     },
//     price: {
//         fontSize: 14,
//         color: "#7f00ff",
//         fontWeight: "500",
//     },
//     footer: {
//         marginTop: 24,
//         alignItems: "center",
//         paddingBottom: 32
//     },
//     totalText: {
//         fontSize: 18,
//         fontWeight: "bold",
//         marginBottom: 16,
//     },
//     button: {
//         backgroundColor: "#7f00ff",
//         paddingVertical: 12,
//         paddingHorizontal: 32,
//         borderRadius: 10,
//     },
//     buttonText: {
//         color: "#fff",
//         fontSize: 16,
//         fontWeight: "bold",
//     },
// });



import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { CartContext } from "../context/CartContext";

const CheckoutScreen = ({ navigation }) => {
    const { cartItems } = useContext(CartContext);

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.details}>Size: {item.size}</Text>
            <Text style={styles.details}>Qty: {item.quantity}</Text>
            <Text style={styles.itemTotal}>₵ {(item.price * item.quantity).toFixed(2)}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={cartItems}
                keyExtractor={(item, index) => `${item.id}-${item.size}-${index}`}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.checkoutBar}>
                <View>
                    <Text style={styles.totalLabel}>Total:</Text>
                    <Text style={styles.totalAmount}>₵ {calculateTotal().toFixed(2)}</Text>
                </View>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutText}>Proceed to Checkout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    listContent: {
        paddingTop: 24,
        paddingHorizontal: 16,
        paddingBottom: 120, // To ensure content ends above checkout bar
    },
    itemContainer: {
        backgroundColor: "#f5f5f5",
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
    },
    productName: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 4,
    },
    details: {
        fontSize: 14,
        color: "#555",
    },
    itemTotal: {
        marginTop: 6,
        fontSize: 15,
        fontWeight: "600",
        color: "#000",
    },
    checkoutBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderTopWidth: 1,
        borderColor: "#ddd",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    totalLabel: {
        fontSize: 16,
        color: "#888",
    },
    totalAmount: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    checkoutButton: {
        backgroundColor: "#7f00ff",
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
    },
    checkoutText: {
        color: "#fff",
        fontWeight: "600",
    },
});