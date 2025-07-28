// components/CustomAlert.js
import React, { useContext } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { ThemeContext } from "../ThemeContext"; // Assuming ThemeContext path

const { width } = Dimensions.get("window");

// Define your primary theme color
const primaryColor = "#7f00ff"; // Vibrant Purple
const lightPurple = "#f0e6ff"; // Very light purple for backgrounds
const dangerColor = "#e74c3c"; // Red for destructive actions
const successColor = "#2ecc71"; // Green for success messages
const neutralColor = "#95a5a6"; // Grey for neutral actions

export default function CustomAlert({
  isVisible,
  title,
  message,
  buttons,
  onClose,
}) {
  const { darkTheme } = useContext(ThemeContext);

  // Dynamic styles based on theme
  const containerBg = darkTheme ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.5)"; // Overlay background
  const alertBg = darkTheme ? "#2a2a2a" : "#ffffff"; // Alert box background
  const titleColor = darkTheme ? "#ffffff" : "#333333";
  const messageColor = darkTheme ? "#cccccc" : "#666666";
  const buttonBorderColor = darkTheme ? "#444444" : "#e0e0e0";

  const getButtonStyles = (styleType) => {
    switch (styleType) {
      case "destructive":
        return {
          button: { backgroundColor: dangerColor },
          text: { color: "#ffffff" },
        };
      case "primary": // Use 'primary' for your main action buttons (like 'OK' or 'Confirm')
        return {
          button: { backgroundColor: primaryColor },
          text: { color: "#ffffff" },
        };
      case "default": // A standard, less prominent action
      default:
        return {
          button: { backgroundColor: neutralColor },
          text: { color: "#ffffff" }, // Or '#333333' for light background
        };
      case "cancel": // Usually a secondary, clear button
        return {
          button: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: buttonBorderColor,
          },
          text: { color: darkTheme ? "#ffffff" : primaryColor },
        };
    }
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose} // For Android back button
    >
      <View style={[styles.modalOverlay, { backgroundColor: containerBg }]}>
        <View style={[styles.alertContainer, { backgroundColor: alertBg }]}>
          {title && (
            <Text style={[styles.alertTitle, { color: titleColor }]}>
              {title}
            </Text>
          )}
          {message && (
            <Text style={[styles.alertMessage, { color: messageColor }]}>
              {message}
            </Text>
          )}

          <View style={styles.buttonContainer}>
            {buttons.map((button, index) => {
              const { button: btnStyle, text: txtStyle } = getButtonStyles(
                button.style
              );
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.button, btnStyle]}
                  onPress={() => {
                    // Ensure onClose is called before button.onPress
                    // This is important if button.onPress navigates or changes view
                    // and you want the modal to dismiss first.
                    onClose();
                    if (button.onPress) {
                      button.onPress();
                    }
                  }}
                >
                  <Text style={[styles.buttonText, txtStyle]}>
                    {button.text}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  alertContainer: {
    width: width * 0.85, // 85% of screen width
    borderRadius: 15, // More rounded corners
    padding: 25,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  alertTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  alertMessage: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around", // Distribute buttons evenly
    width: "100%",
  },
  button: {
    flex: 1, // Make buttons take equal space
    paddingVertical: 12,
    borderRadius: 10, // Rounded buttons
    marginHorizontal: 5, // Space between buttons
    alignItems: "center",
    justifyContent: "center",
    minWidth: 90, // Minimum width for buttons
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});
