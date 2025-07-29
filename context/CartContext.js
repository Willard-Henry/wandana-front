// context/CartContext.js

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

  // --- CRITICAL CHANGE HERE ---
  // Change the function signature to accept a single 'itemToAdd' object
  // which already contains id, quantity, and size from ProductDetailsScreen.
  const addToCart = (itemToAdd) => {
    setCartItems((prevCart) => {
      // Find if an item with the same ID and SIZE already exists in the cart
      const existingItemIndex = prevCart.findIndex(
        (p) => p.id === itemToAdd.id && p.size === itemToAdd.size
      );

      if (existingItemIndex > -1) {
        // If the item exists, create a new array with updated quantity for that item
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          // Add the quantity from the new itemToAdd to the existing item's quantity
          quantity:
            updatedCart[existingItemIndex].quantity + itemToAdd.quantity,
        };
        return updatedCart;
      } else {
        // If the item does not exist, add the new item (which already has the correct quantity and size)
        return [...prevCart, itemToAdd];
      }
    });
  };
  // --- END CRITICAL CHANGE ---

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
