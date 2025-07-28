// context/AddressContext.js (Example - you might already have this)
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  // Optional: Load initial selected address from storage on app start
  useEffect(() => {
    const loadInitialSelectedAddress = async () => {
      try {
        const storedAddresses = await AsyncStorage.getItem("userAddresses");
        if (storedAddresses) {
          const parsedAddresses = JSON.parse(storedAddresses);
          const defaultAddr = parsedAddresses.find((addr) => addr.selected);
          if (defaultAddr) {
            setSelectedAddress(defaultAddr);
          }
        }
      } catch (error) {
        console.error("Failed to load initial selected address:", error);
      }
    };
    loadInitialSelectedAddress();
  }, []);

  // The saveAddressesToStorage in ManageAddressesScreen handles the persistence.
  // This context primarily serves to share the *current* selected address.

  return (
    <AddressContext.Provider value={{ selectedAddress, setSelectedAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
