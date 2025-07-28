// screens/ChangePasswordScreen.js
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView, // Added ScrollView for better layout on smaller screens
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // For navigation
import Icon from "react-native-vector-icons/Ionicons"; // For the back icon
import { CustomAlertContext } from "../context/CustomAlertContext"; // For custom alerts
import { ThemeContext } from "../ThemeContext"; // For theme context
import { changeUserPassword } from "../api"; // New import for API call

export default function ChangePasswordScreen() {
  const navigation = useNavigation(); // Initialize navigation
  const { showAlert } = useContext(CustomAlertContext);
  const { darkTheme } = useContext(ThemeContext);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  // Define theme colors for a consistent look
  const primaryColor = "#7f00ff"; // Vibrant Purple
  const lightPurple = "#f0e6ff"; // Very light purple
  const darkGrey = "#333333";
  const lightGreyBorder = "#ddd";
  const inputActiveBorder = primaryColor;
  const errorColor = "#e74c3c"; // Red for errors

  const containerBg = darkTheme ? "#1a1a1a" : "#f5f5f5";
  const cardBg = darkTheme ? "#2a2a2a" : "#ffffff";
  const textColor = darkTheme ? "#ffffff" : darkGrey;
  const inputBg = darkTheme ? "#333333" : "#f9f9f9";
  const placeholderColor = darkTheme ? "#bbb" : "#999";

  const handleChangePassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      showAlert("Error", "Please fill in all fields.", [
        { text: "OK", style: "primary" },
      ]);
      return;
    }
    if (newPassword !== confirmPassword) {
      showAlert("Error", "New passwords do not match.", [
        { text: "OK", style: "primary" },
      ]);
      return;
    }
    if (newPassword.length < 6) {
      // Add minimum password length check
      showAlert("Error", "New password must be at least 6 characters long.", [
        { text: "OK", style: "primary" },
      ]);
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const result = await changeUserPassword(currentPassword, newPassword);

      if (result.success) {
        showAlert("Success", "Your password has been changed successfully.", [
          {
            text: "OK",
            style: "primary",
            onPress: () => {
              setCurrentPassword("");
              setNewPassword("");
              setConfirmPassword("");
              navigation.goBack(); // Navigate back to MeScreen (or wherever appropriate)
            },
          },
        ]);
      } else {
        // Display specific error message from the backend if available
        showAlert(
          "Password Change Failed",
          result.message || "Failed to change password. Please try again.",
          [{ text: "OK", style: "primary" }]
        );
      }
    } catch (error) {
      console.error("Change password API error:", error);
      showAlert("Error", "An unexpected error occurred. Please try again.", [
        { text: "OK", style: "primary" },
      ]);
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.fullScreenContainer, { backgroundColor: containerBg }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Header */}
      <View style={[styles.header, { backgroundColor: cardBg }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color={textColor} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: textColor }]}>
          Change Password
        </Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View
          style={[
            styles.card,
            { backgroundColor: cardBg, borderColor: lightGreyBorder },
          ]}
        >
          <Text style={[styles.label, { color: textColor }]}>
            Current Password
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: inputBg,
                borderColor: lightGreyBorder,
                color: textColor,
              },
            ]}
            value={currentPassword}
            onChangeText={setCurrentPassword}
            placeholder="Enter current password"
            placeholderTextColor={placeholderColor}
            secureTextEntry
            editable={!isLoading}
          />

          <Text style={[styles.label, { color: textColor }]}>New Password</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: inputBg,
                borderColor: lightGreyBorder,
                color: textColor,
              },
            ]}
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="Enter new password"
            placeholderTextColor={placeholderColor}
            secureTextEntry
            editable={!isLoading}
          />

          <Text style={[styles.label, { color: textColor }]}>
            Confirm New Password
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: inputBg,
                borderColor: lightGreyBorder,
                color: textColor,
              },
            ]}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm new password"
            placeholderTextColor={placeholderColor}
            secureTextEntry
            editable={!isLoading}
          />

          <TouchableOpacity
            style={[styles.button, { backgroundColor: primaryColor }]}
            onPress={handleChangePassword}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Change Password</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#eee",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContent: {
    flexGrow: 1, // Allows content to grow and be scrollable
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 400, // Max width for larger screens
    borderRadius: 15,
    padding: 25,
    borderWidth: 1,
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
  label: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "100%",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
