// screens/LoginScreen.js
import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet, // Ensure StyleSheet is imported
  Alert,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { CustomAlertContext } from "../context/CustomAlertContext";
import { useTranslation } from "react-i18next";

export default function LoginScreen({ navigation }) {
  const { t } = useTranslation();
  const { showAlert } = useContext(CustomAlertContext);
  const { login } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      showAlert(t("Login.validationTitle"), t("Login.validationMessage"));
      return;
    }

    setIsLoading(true);
    try {
      const result = await login(form);
      if (result.success) {
        showAlert(
          t("Login.successTitle"),
          result.message || t("Login.successMessage")
        );
      } else {
        showAlert(
          t("Login.errorTitle"),
          result.message || t("Login.failureMessage")
        );
      }
    } catch (error) {
      console.error("Login process failed:", error);
      showAlert(t("Login.networkErrorTitle"), t("Login.networkErrorMessage"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("Login.welcomeTitle")}</Text>
      <Text style={styles.subtitle}>{t("Login.subtitle")}</Text>

      <Text style={styles.inputLabel}>{t("Login.emailLabel")}</Text>
      <TextInput
        style={styles.input}
        value={form.email}
        onChangeText={(value) => handleChange("email", value)}
        autoCapitalize="none"
        placeholder={t("Login.emailPlaceholder")}
        keyboardType="email-address"
        editable={!isLoading}
      />

      <Text style={styles.inputLabel}>{t("Login.passwordLabel")}</Text>
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          value={form.password}
          onChangeText={(value) => handleChange("password", value)}
          autoCapitalize="none"
          placeholder={t("Login.passwordPlaceholder")}
          secureTextEntry={!showPassword}
          editable={!isLoading}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.eyeIcon}
          disabled={isLoading}
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title={isLoading ? t("Login.loading") : t("Login.loginButton")}
          color="#7f00ff"
          onPress={handleLogin}
          disabled={isLoading}
        />
      </View>

      <Text style={styles.signupPrompt}>{t("Login.noAccount")}</Text>
      <View style={styles.signupButtonWrapper}>
        <Button
          title={t("Login.createAccount")}
          onPress={() => navigation.navigate("Signup")}
          color="#7f00ff"
          disabled={isLoading}
        />
      </View>
    </View>
  );
}

// ---
// StyleSheet Definition
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333",
    fontWeight: "600",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
  },
  eyeIcon: {
    padding: 10,
  },
  buttonWrapper: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 8,
    overflow: "hidden", // Ensures the button's background color respects border radius
  },
  signupPrompt: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
    color: "#555",
  },
  signupButtonWrapper: {
    marginTop: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
});
