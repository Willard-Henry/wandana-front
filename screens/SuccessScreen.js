

// // // // import React, { useEffect } from "react";
// // // // import { View, Text, StyleSheet } from "react-native";

// // // // export default function SuccessScreen({ navigation }) {
// // // //     useEffect(() => {
// // // //         const timer = setTimeout(() => {
// // // //             navigation.navigate("MainTabs", { screen: "Home" });
// // // //         }, 5000);
// // // //         return () => clearTimeout(timer);
// // // //     }, [navigation]);

// // // //     return (
// // // //         <View style={styles.container}>
// // // //             <Text style={styles.emoji}>🎉</Text>
// // // //             <Text style={styles.title}>Success!</Text>
// // // //             <Text style={styles.subtitle}>Hurray, your payment was successful.</Text>
// // // //         </View>
// // // //     );
// // // // }

// // // // const styles = StyleSheet.create({
// // // //     container: {
// // // //         flex: 1,
// // // //         justifyContent: "center",
// // // //         alignItems: "center",
// // // //         backgroundColor: "#fff",
// // // //     },
// // // //     emoji: {
// // // //         fontSize: 64,
// // // //         marginBottom: 20,
// // // //     },
// // // //     title: {
// // // //         fontSize: 32,
// // // //         fontWeight: "bold",
// // // //         color: "#7f00ff",
// // // //         marginBottom: 10,
// // // //     },
// // // //     subtitle: {
// // // //         fontSize: 18,
// // // //         color: "#333",
// // // //         textAlign: "center",
// // // //     },
// // // // });







// // // import React, { useEffect, useContext } from "react";
// // // import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// // // import { useNavigation } from "@react-navigation/native";
// // // import { NotificationContext } from "../context/NotificationContext";

// // // export default function SuccessScreen({ route }) {
// // //     const navigation = useNavigation();
// // //     const { addEvents } = useContext(NotificationContext);

// // //     // This will run only once when the screen is shown
// // //     // useEffect(() => {
// // //     //     const today = new Date().toISOString().slice(0, 10);
// // //     //     addEvents([
// // //     //         { date: today, title: "Item is being processed to be packaged" },
// // //     //         { date: today, title: "The delivery guy has picked up the item" },
// // //     //         { date: today, title: "Some distance away from your pickup location" },
// // //     //         { date: today, title: "Delivery guy has arrived" },
// // //     //     ]);
// // //     // }, []);
// // //     useEffect(() => {
// // //         const today = new Date().toISOString().slice(0, 10);
// // //         addEvents([
// // //             { date: today, title: "Item is being processed to be packaged" },
// // //             { date: today, title: "The delivery guy has picked up the item" },
// // //             { date: today, title: "Some distance away from your pickup location" },
// // //             { date: today, title: "Delivery guy has arrived" },
// // //         ]);
// // //         const timer = setTimeout(() => {
// // //             navigation.navigate("Notification");
// // //         }, 5000);
// // //         return () => clearTimeout(timer);
// // //     }, []);

// // //     return (
// // //         <View style={styles.container}>
// // //             <Text style={styles.big}>🎉</Text>
// // //             <Text style={styles.title}>Payment Successful!</Text>
// // //             <Text style={styles.subtitle}>Thank you for your purchase.</Text>
// // //             <TouchableOpacity
// // //                 style={styles.button}
// // //                 onPress={() => navigation.navigate("MainTabs")}
// // //             >
// // //                 <Text style={styles.buttonText}>Continue Shopping</Text>
// // //             </TouchableOpacity>
// // //         </View>
// // //     );
// // // }

// // // const styles = StyleSheet.create({
// // //     container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
// // //     big: { fontSize: 64, marginBottom: 20 },
// // //     title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, color: "#7f00ff" },
// // //     subtitle: { fontSize: 16, color: "#555", marginBottom: 30 },
// // //     button: { backgroundColor: "#7f00ff", padding: 16, borderRadius: 10 },
// // //     buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
// // // });


// // import React, { useEffect, useContext } from "react";
// // import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// // import { useNavigation } from "@react-navigation/native";
// // import { NotificationContext } from "../context/NotificationContext";

// // export default function SuccessScreen({ route }) {
// //     const navigation = useNavigation();
// //     const { addEvents } = useContext(NotificationContext);

// //     useEffect(() => {
// //         const now = new Date();
// //         const pad = n => n.toString().padStart(2, "0");
// //         const formatTime = date => `${pad(date.getHours())}:${pad(date.getMinutes())}`;

// //         const events = [
// //             {
// //                 date: now.toISOString().slice(0, 10),
// //                 time: formatTime(now),
// //                 title: "Item is being processed to be packaged"
// //             },
// //             {
// //                 date: now.toISOString().slice(0, 10),
// //                 time: formatTime(new Date(now.getTime() + 8 * 60000)), // +8 min
// //                 title: "The delivery guy has picked up the item"
// //             },
// //             {
// //                 date: now.toISOString().slice(0, 10),
// //                 time: formatTime(new Date(now.getTime() + (8 + 15) * 60000)), // +23 min
// //                 title: "Some distance away from your pickup location"
// //             },
// //             {
// //                 date: now.toISOString().slice(0, 10),
// //                 time: formatTime(new Date(now.getTime() + (8 + 15 + 20) * 60000)), // +43 min
// //                 title: "Delivery guy has arrived"
// //             }
// //         ];

// //         addEvents(events);

// //         const timer = setTimeout(() => {
// //             navigation.navigate("Notification");
// //         }, 5000);
// //         return () => clearTimeout(timer);
// //     }, []);

// //     return (
// //         <View style={styles.container}>
// //             <Text style={styles.big}>🎉</Text>
// //             <Text style={styles.title}>Payment Successful!</Text>
// //             <Text style={styles.subtitle}>Thank you for your purchase.</Text>
// //             <TouchableOpacity
// //                 style={styles.button}
// //                 onPress={() => navigation.navigate("MainTabs")}
// //             >
// //                 <Text style={styles.buttonText}>Continue Shopping</Text>
// //             </TouchableOpacity>
// //         </View>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
// //     big: { fontSize: 64, marginBottom: 20 },
// //     title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, color: "#7f00ff" },
// //     subtitle: { fontSize: 16, color: "#555", marginBottom: 30 },
// //     button: { backgroundColor: "#7f00ff", padding: 16, borderRadius: 10 },
// //     buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
// // });

// import React, { useEffect, useContext } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { NotificationContext } from "../context/NotificationContext";

// export default function SuccessScreen({ route }) {
//     const navigation = useNavigation();
//     const { addEvents } = useContext(NotificationContext);

//     useEffect(() => {
//         const now = new Date();
//         const pad = n => n.toString().padStart(2, "0");
//         const formatTime = date => `${pad(date.getHours())}:${pad(date.getMinutes())}`;

//         const events = [
//             {
//                 date: now.toISOString().slice(0, 10),
//                 time: formatTime(now),
//                 title: "Item is being processed to be packaged"
//             },
//             {
//                 date: now.toISOString().slice(0, 10),
//                 time: formatTime(new Date(now.getTime() + 8 * 60000)), // +8 min
//                 title: "The delivery guy has picked up the item"
//             },
//             {
//                 date: now.toISOString().slice(0, 10),
//                 time: formatTime(new Date(now.getTime() + (8 + 15) * 60000)), // +23 min
//                 title: "Some distance away from your pickup location"
//             },
//             {
//                 date: now.toISOString().slice(0, 10),
//                 time: formatTime(new Date(now.getTime() + (8 + 15 + 20) * 60000)), // +43 min
//                 title: "Delivery guy has arrived"
//             }
//         ];

//         addEvents(events);

//         const timer = setTimeout(() => {
//             navigation.navigate("Notification");
//         }, 5000);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.big}>🎉</Text>
//             <Text style={styles.title}>Payment Successful!</Text>
//             <Text style={styles.subtitle}>Thank you for your purchase.</Text>
//             <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => navigation.navigate("MainTabs")}
//             >
//                 <Text style={styles.buttonText}>Continue Shopping</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
//     big: { fontSize: 64, marginBottom: 20 },
//     title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, color: "#7f00ff" },
//     subtitle: { fontSize: 16, color: "#555", marginBottom: 30 },
//     button: { backgroundColor: "#7f00ff", padding: 16, borderRadius: 10 },
//     buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
// });


import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NotificationContext } from "../context/NotificationContext";

export default function SuccessScreen({ route }) {
    const navigation = useNavigation();
    const { addEvents } = useContext(NotificationContext);

    useEffect(() => {
        const now = new Date();
        const orderId = `order-${now.getTime()}`; // Unique order ID
        const pad = n => n.toString().padStart(2, "0");
        const formatTime = date => `${pad(date.getHours())}:${pad(date.getMinutes())}`;

        const events = [
            {
                id: `${orderId}-1`,
                orderId,
                date: now.toISOString().slice(0, 10),
                time: formatTime(now),
                title: "Item is being processed to be packaged"
            },
            {
                id: `${orderId}-2`,
                orderId,
                date: now.toISOString().slice(0, 10),
                time: formatTime(new Date(now.getTime() + 8 * 60000)), // +8 min
                title: "The delivery guy has picked up the item"
            },
            {
                id: `${orderId}-3`,
                orderId,
                date: now.toISOString().slice(0, 10),
                time: formatTime(new Date(now.getTime() + (8 + 15) * 60000)), // +23 min
                title: "Some distance away from your pickup location"
            },
            {
                id: `${orderId}-4`,
                orderId,
                date: now.toISOString().slice(0, 10),
                time: formatTime(new Date(now.getTime() + (8 + 15 + 20) * 60000)), // +43 min
                title: "Delivery guy has arrived"
            }
        ];

        addEvents(events);

        const timer = setTimeout(() => {
            navigation.navigate("Notification");
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.big}>🎉</Text>
            <Text style={styles.title}>Payment Successful!</Text>
            <Text style={styles.subtitle}>Thank you for your purchase.</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("MainTabs")}
            >
                <Text style={styles.buttonText}>Continue Shopping</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
    big: { fontSize: 64, marginBottom: 20 },
    title: { fontSize: 28, fontWeight: "bold", marginBottom: 10, color: "#7f00ff" },
    subtitle: { fontSize: 16, color: "#555", marginBottom: 30 },
    button: { backgroundColor: "#7f00ff", padding: 16, borderRadius: 10 },
    buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});