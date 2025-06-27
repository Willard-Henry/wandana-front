
// // import React, { useState } from "react";
// // import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Alert } from "react-native";
// // import { FlutterwaveCheckout } from "flutterwave-react-native";



// // const PaymentScreen = ({ navigation, route }) => {
// //     const [selectedMethod, setSelectedMethod] = useState(null);
// //     const [address, setAddress] = useState("");

// //     // Get total from route params or fallback to 0
// //     const totalAmount = route.params?.totalAmount || 0;

// //     const handleProceed = () => {
// //         if (!selectedMethod || !address) {
// //             Alert.alert("Missing Info", "Please select a payment method and enter your address.");
// //             return;
// //         }
// //         // Simulate payment success and go to SuccessScreen
// //         Alert.alert("Success", "Payment successful!");
// //         navigation.navigate("SuccessScreen");
// //     };

// //     // const handleProceed = () => {
// //     //     if (!selectedMethod || !address) {
// //     //         Alert.alert("Missing Info", "Please select a payment method and enter your address.");
// //     //         return;


// //     //     }

// //     // FlutterwaveCheckout({
// //     //     public_key: "FLWPUBK_TEST-xxxxxxxxxxxxxxxxxxxxx-X", // Replace with your public key
// //     //     tx_ref: `txn-${Date.now()}`,
// //     //     amount: totalAmount,
// //     //     currency: "GHS",
// //     //     payment_options: selectedMethod === "momo" ? "mobilemoneyghana" : "card",
// //     //     customer: {
// //     //         email: "customer@email.com",
// //     //         phonenumber: "0550000000",
// //     //         name: "Adam Abubakar",
// //     //     },
// //     //     customizations: {
// //     //         title: "Shein Clone Checkout",
// //     //         description: "Payment for cart items",
// //     //         logo: "https://placehold.co/100x100",
// //     //     },
// //     //     onSuccess: (transaction) => {
// //     //         Alert.alert("Success", "Payment successful!");
// //     //         // navigation.navigate("SuccessScreen")

// //     //         navigation.navigate("SuccessScreen")
// //     //     },
// //     //     onCancel: () => {
// //     //         Alert.alert("Cancelled", "Payment was cancelled.");
// //     //     },
// //     // });
// //     Alert.alert("Test", "Payment logic placeholder. No error!");
// // };

// // return (
// //     <SafeAreaView style={styles.container}>
// //         <Text style={styles.header}>Select Payment Method</Text>
// //         <TouchableOpacity
// //             style={[
// //                 styles.methodButton,
// //                 selectedMethod === "momo" && styles.selected
// //             ]}
// //             onPress={() => setSelectedMethod("momo")}
// //         >
// //             <Text style={styles.methodText}>
// //                 {selectedMethod === "momo" ? "✓ " : ""}Mobile Money
// //             </Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //             style={[
// //                 styles.methodButton,
// //                 selectedMethod === "card" && styles.selected
// //             ]}
// //             onPress={() => setSelectedMethod("card")}
// //         >
// //             <Text style={styles.methodText}>
// //                 {selectedMethod === "card" ? "✓ " : ""}Debit/Credit Card
// //             </Text>
// //         </TouchableOpacity>

// //         <Text style={[styles.header, { marginTop: 30 }]}>Delivery Address</Text>
// //         <TextInput
// //             style={styles.input}
// //             placeholder="Enter your address"
// //             value={address}
// //             onChangeText={setAddress}
// //             multiline
// //         />

// //         <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>
// //             Total: <Text style={{ color: "#7f00ff", fontWeight: "bold" }}>GHS {totalAmount.toFixed(2)}</Text>
// //         </Text>

// //         <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
// //             <Text style={styles.proceedText}>Confirm and Pay</Text>
// //         </TouchableOpacity>
// //     </SafeAreaView>
// // );
// // };

// // export default PaymentScreen;

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         padding: 24,
// //         paddingTop: 40,
// //         backgroundColor: "#fff",
// //     },
// //     header: {
// //         fontSize: 18,
// //         fontWeight: "bold",
// //         marginBottom: 12,
// //     },
// //     methodButton: {
// //         padding: 16,
// //         borderWidth: 1,
// //         borderColor: "#aaa",
// //         borderRadius: 10,
// //         marginBottom: 12,
// //     },
// //     selected: {
// //         backgroundColor: "#7f00ff20",
// //         borderColor: "#7f00ff",
// //     },
// //     methodText: {
// //         fontSize: 16,
// //     },
// //     input: {
// //         borderWidth: 1,
// //         borderColor: "#ccc",
// //         borderRadius: 10,
// //         padding: 12,
// //         height: 100,
// //         textAlignVertical: "top",
// //     },
// //     proceedButton: {
// //         backgroundColor: "#7f00ff",
// //         padding: 16,
// //         borderRadius: 10,
// //         marginTop: 30,
// //         alignItems: "center",
// //     },
// //     proceedText: {
// //         color: "#fff",
// //         fontWeight: "bold",
// //         fontSize: 16,
// //     },
// // });

// import React, { useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Alert } from "react-native";
// import { CartContext } from "../context/CartContext";

// const PaymentScreen = ({ navigation, route }) => {
//     const [selectedMethod, setSelectedMethod] = useState(null);
//     const [address, setAddress] = useState("");
//     const { clearCart } = useContext(CartContext);

//     // Get total from route params or fallback to 0
//     const totalAmount = route.params?.totalAmount || 0;

//     const handleProceed = () => {
//         if (!selectedMethod || !address) {
//             Alert.alert("Missing Info", "Please select a payment method and enter your address.");
//             return;
//         }
//         // Simulate payment success and go to SuccessScreen
//         clearCart(); // Clear cart items after payment
//         Alert.alert("Success", "Payment successful!");
//         navigation.navigate("SuccessScreen");
//     };

//     return (
//         <SafeAreaView style={styles.container}>
//             <Text style={styles.header}>Select Payment Method</Text>
//             <TouchableOpacity
//                 style={[
//                     styles.methodButton,
//                     selectedMethod === "momo" && styles.selected
//                 ]}
//                 onPress={() => setSelectedMethod("momo")}
//             >
//                 <Text style={styles.methodText}>
//                     {selectedMethod === "momo" ? "✓ " : ""}Mobile Money
//                 </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//                 style={[
//                     styles.methodButton,
//                     selectedMethod === "card" && styles.selected
//                 ]}
//                 onPress={() => setSelectedMethod("card")}
//             >
//                 <Text style={styles.methodText}>
//                     {selectedMethod === "card" ? "✓ " : ""}Debit/Credit Card
//                 </Text>
//             </TouchableOpacity>

//             <Text style={[styles.header, { marginTop: 30 }]}>Delivery Address</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter your address"
//                 value={address}
//                 onChangeText={setAddress}
//                 multiline
//             />

//             <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>
//                 Total: <Text style={{ color: "#7f00ff", fontWeight: "bold" }}>GHS {totalAmount.toFixed(2)}</Text>
//             </Text>

//             <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
//                 <Text style={styles.proceedText}>Confirm and Pay</Text>
//             </TouchableOpacity>
//         </SafeAreaView>
//     );
// };

// export default PaymentScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 24,
//         paddingTop: 40,
//         backgroundColor: "#fff",
//     },
//     header: {
//         fontSize: 18,
//         fontWeight: "bold",
//         marginBottom: 12,
//     },
//     methodButton: {
//         padding: 16,
//         borderWidth: 1,
//         borderColor: "#aaa",
//         borderRadius: 10,
//         marginBottom: 12,
//     },
//     selected: {
//         backgroundColor: "#7f00ff20",
//         borderColor: "#7f00ff",
//     },
//     methodText: {
//         fontSize: 16,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: "#ccc",
//         borderRadius: 10,
//         padding: 12,
//         height: 100,
//         textAlignVertical: "top",
//     },
//     proceedButton: {
//         backgroundColor: "#7f00ff",
//         padding: 16,
//         borderRadius: 10,
//         marginTop: 30,
//         alignItems: "center",
//     },
//     proceedText: {
//         color: "#fff",
//         fontWeight: "bold",
//         fontSize: 16,
//     },
// });


import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, SafeAreaView, Alert } from "react-native";
import { CartContext } from "../context/CartContext";

const PaymentScreen = ({ navigation, route }) => {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [address, setAddress] = useState("");
    const { clearCart } = useContext(CartContext);

    // Get total from route params or fallback to 0
    const totalAmount = route.params?.totalAmount || 0;

    const handleProceed = () => {
        if (!selectedMethod || !address) {
            Alert.alert("Missing Info", "Please select a payment method and enter your address.");
            return;
        }
        // Clear cart items after payment
        clearCart();
        Alert.alert("Success", "Payment successful!");
        navigation.navigate("SuccessScreen");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Select Payment Method</Text>
            <TouchableOpacity
                style={[
                    styles.methodButton,
                    selectedMethod === "momo" && styles.selected
                ]}
                onPress={() => setSelectedMethod("momo")}
            >
                <Text style={styles.methodText}>
                    {selectedMethod === "momo" ? "✓ " : ""}Mobile Money
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[
                    styles.methodButton,
                    selectedMethod === "card" && styles.selected
                ]}
                onPress={() => setSelectedMethod("card")}
            >
                <Text style={styles.methodText}>
                    {selectedMethod === "card" ? "✓ " : ""}Debit/Credit Card
                </Text>
            </TouchableOpacity>

            <Text style={[styles.header, { marginTop: 30 }]}>Delivery Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your address"
                value={address}
                onChangeText={setAddress}
                multiline
            />

            <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>
                Total: <Text style={{ color: "#7f00ff", fontWeight: "bold" }}>GHS {totalAmount.toFixed(2)}</Text>
            </Text>

            <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
                <Text style={styles.proceedText}>Confirm and Pay</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default PaymentScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 40,
        backgroundColor: "#fff",
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
    },
    methodButton: {
        padding: 16,
        borderWidth: 1,
        borderColor: "#aaa",
        borderRadius: 10,
        marginBottom: 12,
    },
    selected: {
        backgroundColor: "#7f00ff20",
        borderColor: "#7f00ff",
    },
    methodText: {
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 12,
        height: 100,
        textAlignVertical: "top",
    },
    proceedButton: {
        backgroundColor: "#7f00ff",
        padding: 16,
        borderRadius: 10,
        marginTop: 30,
        alignItems: "center",
    },
    proceedText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});