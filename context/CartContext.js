
// import React, { createContext, useState, useContext } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);

//     const addToCart = (product) => {
//         setCartItems((prevItems) => {
//             const existingItem = prevItems.find(
//                 (item) => item.id === product.id && item.size === product.size
//             );

//             if (existingItem) {
//                 return prevItems.map((item) =>
//                     item.id === product.id && item.size === product.size
//                         ? { ...item, quantity: item.quantity + product.quantity }
//                         : item
//                 );
//             } else {
//                 return [...prevItems, product];
//             }
//         });
//     };

//     const removeFromCart = (productId, size) => {
//         setCartItems((prevItems) =>
//             prevItems.filter(
//                 (item) => !(item.id === productId && item.size === size)
//             )
//         );
//     };

//     // ADD THIS FUNCTION:
//     const clearCart = () => setCartItems([]);

//     return (
//         <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(CartContext);

import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const CART_STORAGE_KEY = "USER_CART_ITEMS";

    // 🧠 Load cart from storage when app starts
    useEffect(() => {
        const loadCart = async () => {
            try {
                const storedCart = await AsyncStorage.getItem(CART_STORAGE_KEY);
                if (storedCart) {
                    setCartItems(JSON.parse(storedCart));
                }
            } catch (error) {
                console.error("Failed to load cart:", error);
            }
        };
        loadCart();
    }, []);

    // 💾 Save cart to storage every time it changes
    useEffect(() => {
        const saveCart = async () => {
            try {
                await AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
            } catch (error) {
                console.error("Failed to save cart:", error);
            }
        };
        saveCart();
    }, [cartItems]);

    const addToCart = (item, quantity = 1, size = "M") => {
        setCartItems((prevCart) => {
            const existing = prevCart.find(
                (p) => p.id === item.id && p.size === size
            );
            if (existing) {
                return prevCart.map((p) =>
                    p.id === item.id && p.size === size
                        ? { ...p, quantity: p.quantity + quantity }
                        : p
                );
            } else {
                return [...prevCart, { ...item, quantity, size }];
            }
        });
    };

    const removeFromCart = (itemId, size) => {
        setCartItems((prevCart) =>
            prevCart.filter((item) => !(item.id === itemId && item.size === size))
        );
    };

    const clearCart = async () => {
        setCartItems([]);
        try {
            await AsyncStorage.removeItem(CART_STORAGE_KEY);
        } catch (error) {
            console.error("Failed to clear cart:", error);
        }
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
