import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Linking,
  StyleSheet,
  Alert,
} from "react-native";
import { CustomAlertContext } from "../context/CustomAlertContext";

export default function ContactSupportScreen() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const { showAlert } = useContext(CustomAlertContext);

  const handleSend = () => {
    if (!email.trim() || !message.trim()) {
      showAlert("Please enter your email and message.");
      return;
    }
    const mailto = `mailto:support@yourapp.com?subject=Support Request from ${email}&body=${encodeURIComponent(
      message
    )}`;
    Linking.openURL(mailto);
    setMessage("");
    setEmail("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Support</Text>
      <Text style={styles.label}>Email: ewurabanancy05@gmail.com</Text>
      <Text style={styles.label}>Phone: +233‑246‑187‑487</Text>
      <Text style={styles.label}>Or send us a message below:</Text>
      <TextInput
        style={styles.input}
        placeholder="Your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, { minHeight: 80 }]}
        placeholder="Type your message..."
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <Button
        title="Send"
        onPress={handleSend}
        disabled={!email.trim() || !message.trim()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff", marginTop: 40 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  label: { fontSize: 16, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#7f00ff",
  },
  button: {
    backgroundColor: "#7f00ff",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
});
