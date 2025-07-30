import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { CustomAlertContext } from "../context/CustomAlertContext";

const CardPaymentScreen = ({ route, navigation }) => {
  const { totalAmount, address } = route.params;
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const { showAlert } = useContext(CustomAlertContext);

  const handlePayment = () => {
    // Basic validation
    if (!cardNumber || !expiry || !cvv) {
      showAlert("Missing Info", "Please fill in all fields.");
      return;
    }
    if (cardNumber.length < 16) {
      showAlert("Invalid Card", "Card number must be at least 16 digits.");
      return;
    }
    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      showAlert("Invalid Expiry", "Expiry must be in MM/YY format.");
      return;
    }
    if (cvv.length < 3) {
      showAlert("Invalid CVV", "CVV must be at least 3 digits.");
      return;
    }

    // Simulate payment processing
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showAlert("Success", "Payment completed!");
      navigation.navigate("SuccessScreen");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pay with Card</Text>

      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="numeric"
        maxLength={19}
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        value={expiry}
        onChangeText={setExpiry}
        maxLength={5}
      />
      <TextInput
        style={styles.input}
        placeholder="CVV"
        keyboardType="numeric"
        secureTextEntry
        value={cvv}
        onChangeText={setCvv}
        maxLength={4}
      />

      <Text style={{ fontSize: 18, marginVertical: 20 }}>
        Amount:{" "}
        <Text style={{ color: "#7f00ff", fontWeight: "bold" }}>
          GHS {totalAmount.toFixed(2)}
        </Text>
      </Text>

      <TouchableOpacity
        style={styles.payButton}
        onPress={handlePayment}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.payText}>Pay Now</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  payButton: {
    backgroundColor: "#7f00ff",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  payText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CardPaymentScreen;
