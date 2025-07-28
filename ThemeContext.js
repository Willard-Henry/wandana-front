// context/ThemeContext.js

import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 1. Create the Context
export const ThemeContext = createContext();

// 2. Create a custom hook for easy consumption
export const useTheme = () => useContext(ThemeContext);

// 3. Create the Theme Provider Component
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme. Default to false (light mode)
  const [darkTheme, setDarkTheme] = useState(false);
  const [themeLoaded, setThemeLoaded] = useState(false); // To prevent flickering on load

  // Load theme preference from AsyncStorage on component mount
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("userThemePreference");
        if (storedTheme !== null) {
          // Parse the stored string back to a boolean
          setDarkTheme(JSON.parse(storedTheme));
        }
      } catch (e) {
        console.error("Failed to load theme preference from AsyncStorage", e);
      } finally {
        setThemeLoaded(true); // Indicate that theme has been loaded
      }
    };

    loadTheme();
  }, []); // Empty dependency array means this runs once on mount

  // Function to toggle theme and save preference to AsyncStorage
  const toggleTheme = async () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    try {
      // Store the boolean as a string
      await AsyncStorage.setItem(
        "userThemePreference",
        JSON.stringify(newTheme)
      );
    } catch (e) {
      console.error("Failed to save theme preference to AsyncStorage", e);
    }
  };

  // Provide the theme state and toggle function to children components
  const themeContextValue = {
    darkTheme,
    toggleTheme,
  };

  // Only render children once the theme has been loaded to avoid a flash of unstyled content
  if (!themeLoaded) {
    return null; // Or a loading spinner, splash screen, etc.
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
