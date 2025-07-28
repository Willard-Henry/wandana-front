// context/CustomAlertContext.js
import React, { createContext, useState, useCallback, useRef } from "react";
import CustomAlert from "../components/CustomAlert"; // Adjust path as needed

export const CustomAlertContext = createContext();

export function CustomAlertProvider({ children }) {
  const [alertConfig, setAlertConfig] = useState(null); // { title, message, buttons }
  const resolveRef = useRef(); // To store the resolve function of the Promise

  const showAlert = useCallback(
    (title, message, buttons = [{ text: "OK", style: "primary" }]) => {
      return new Promise((resolve) => {
        setAlertConfig({ title, message, buttons });
        resolveRef.current = resolve; // Store resolve for later use
      });
    },
    []
  );

  const hideAlert = useCallback(() => {
    setAlertConfig(null);
  }, []);

  const handleButtonPress = (buttonCallback) => {
    hideAlert(); // Always hide the alert first
    if (buttonCallback) {
      buttonCallback(); // Execute the specific button's onPress handler
    }
  };

  return (
    <CustomAlertContext.Provider value={{ showAlert }}>
      {children}
      {alertConfig && (
        <CustomAlert
          isVisible={!!alertConfig}
          title={alertConfig.title}
          message={alertConfig.message}
          // Map buttons to ensure hideAlert is called on close
          buttons={alertConfig.buttons.map((btn) => ({
            ...btn,
            onPress: () => handleButtonPress(btn.onPress),
          }))}
          onClose={hideAlert}
        />
      )}
    </CustomAlertContext.Provider>
  );
}
