// screens/MobileMoneyPaymentScreen.js (Only the relevant section)
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { initiateMobileMoneyPayment } from "../api";
import { useTheme } from "../ThemeContext";
import { useAuth } from "../context/AuthContext";
import { CustomAlertContext } from "../context/CustomAlertContext";
import { AddressContext } from "../context/AddressContext";
import { CartContext } from "../context/CartContext";

const mobileNetworks = [
  {
    name: "MTN Mobile Money",
    value: "MTN",
    icon: "phone-portrait-outline",
    color: "#FFCC00",
  },
  {
    name: "Telecel Cash",
    value: "VODAFONE",
    icon: "phone-portrait-outline",
    color: "#E60000",
  },
];

export default function MobileMoneyPaymentScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { darkTheme } = useTheme();
  const { selectedAddress } = useContext(AddressContext);
  const { authState } = useAuth();
  const { showAlert } = useContext(CustomAlertContext);
  const { clearCart } = useContext(CartContext);

  const { id: orderId, total: amount, items } = route.params?.order || {};
  const customerEmail = authState?.user?.email;

  const [selectedNetwork, setSelectedNetwork] = useState(null);
  const [mobileNumber, setMobileNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState(
    selectedAddress?.address || ""
  );
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentMessage, setPaymentMessage] = useState("");

  useEffect(() => {
    if (selectedAddress && selectedAddress.address !== shippingAddress) {
      setShippingAddress(selectedAddress.address);
    } else if (!selectedAddress && shippingAddress !== "") {
      setShippingAddress("");
    }
  }, [selectedAddress]);

  useEffect(() => {
    console.log("🚀 Route Params:", route.params);
    console.log("🧾 Order ID:", orderId);
    console.log("💰 Amount:", amount);
    console.log("📧 Customer Email (from auth):", customerEmail);
  }, []);

  const handleInitiatePayment = async () => {
    // Validation
    if (!selectedNetwork) {
      console.warn("Missing selected network");
      showAlert("Error", "Please select a mobile money network.");
      return;
    }
    if (!mobileNumber.trim()) {
      showAlert("Error", "Please enter your mobile money number.");
      return;
    }
    if (!shippingAddress.trim()) {
      showAlert("Error", "Please enter your shipping address.");
      return;
    }
    if (!orderId || !amount || !customerEmail) {
      console.warn("Missing one of orderId, amount, or customerEmail");
      showAlert(
        "Error",
        "Missing order details. Please go back and try again."
      );
      return;
    }

    setIsLoading(true);
    setPaymentStatus(null);
    setPaymentMessage("");

    try {
      const paymentDetails = {
        amount: amount,
        customerEmail: customerEmail,
        mobileNumber: mobileNumber.trim(),
        mobileNetwork: selectedNetwork,
        shippingAddress: shippingAddress.trim(),
        reference: orderId,
      };

      console.log("Initiating payment with details:", paymentDetails);

      const response = await initiateMobileMoneyPayment(paymentDetails);

      if (response.success) {
        // --- FIX IS HERE ---
        // Access paystackStatus directly from the response object
        const status = response.paystackStatus;

        console.log("Payment response status:", status);
        // The 'Full payment data' will no longer be 'undefined' if you log 'response' itself
        // console.log("Full payment data:", response); // Log 'response' instead of 'paymentData' for debugging

        // Handle different payment statuses
        switch (status) {
          case "successful":
            handleSuccessfulPayment(response, response); // Pass response for consistency
            break;
          case "send_otp":
          case "pay_offline": // Include pay_offline as it also needs OTP handling
            handleOTPRequired(response, response); // Pass response for consistency
            break;
          case "failed":
            handleFailedPayment(response, response); // Pass response for consistency
            break;
          case "abandoned":
            handleAbandonedPayment(response, response); // Pass response for consistency
            break;
          case "pending":
            handlePendingPayment(response, response); // Pass response for consistency
            break;
          default:
            setPaymentStatus("unknown");
            setPaymentMessage(
              response.message || "Unknown payment status received."
            );
            showAlert(
              "Unknown Status",
              "An unknown payment status was received. Please contact support."
            );
            break;
        }
      } else {
        setPaymentStatus("failed");
        setPaymentMessage(response.message || "Payment initiation failed.");
        showAlert(
          "Payment Failed",
          response.message || "Could not initiate payment. Please try again."
        );
      }
    } catch (error) {
      console.error("Error in handleInitiatePayment:", error);
      setPaymentStatus("failed");
      setPaymentMessage("An unexpected error occurred. Please try again.");
      showAlert("Error", "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Ensure helper functions use 'paymentResponse' instead of 'paymentData'
  const handleSuccessfulPayment = (paymentResponse, rawResponse) => {
    setPaymentStatus("successful");
    setPaymentMessage(rawResponse.message || "Payment completed successfully!");
    clearCart();
    showAlert(
      "Payment Successful",
      "Your payment has been processed successfully!",
      [
        {
          text: "OK",
          onPress: () =>
            navigation.navigate("SuccessScreen", {
              orderId: orderId,
              message: "Payment completed successfully!",
              amount: amount,
              paymentMethod: "Mobile Money",
            }),
        },
      ]
    );
  };

  const handleOTPRequired = (paymentResponse, rawResponse) => {
    setPaymentStatus("send_otp");
    setPaymentMessage("OTP verification required. Please check your phone.");
    const paymentReference = paymentResponse.paystackReference || orderId; // Use paystackReference
    showAlert(
      "OTP Required",
      "Please verify the OTP sent to your mobile money number.",
      [
        {
          text: "OK",
          onPress: () =>
            navigation.navigate("Otp", {
              paymentReference: paymentReference,
              amount: amount,
              orderId: orderId,
            }),
        },
      ]
    );
  };

  const handleFailedPayment = (paymentResponse, rawResponse) => {
    setPaymentStatus("failed");
    setPaymentMessage(
      rawResponse.message || "Payment failed. Please try again."
    );
    showAlert(
      "Payment Failed",
      rawResponse.message ||
        "Your payment could not be processed. Please try again or use a different payment method."
    );
  };

  const handleAbandonedPayment = (paymentResponse, rawResponse) => {
    setPaymentStatus("abandoned");
    setPaymentMessage(rawResponse.message || "Payment was cancelled.");
    showAlert(
      "Payment Cancelled",
      "Your payment was cancelled. You can try again when ready."
    );
  };

  const handlePendingPayment = (paymentResponse, rawResponse) => {
    setPaymentStatus("pending");
    setPaymentMessage(
      rawResponse.message || "Payment is being processed. Please wait..."
    );
    showAlert(
      "Payment Pending",
      "Your payment is being processed. You will be notified once it's complete.",
      [
        {
          text: "OK",
          onPress: () =>
            navigation.navigate("SuccessScreen", {
              orderId: orderId,
              message:
                "Payment is being processed. You will be notified once complete.",
              amount: amount,
              paymentMethod: "Mobile Money",
              isPending: true,
            }),
        },
      ]
    );
  };

  const getStatusIcon = () => {
    /* ... unchanged ... */
  };
  const getStatusColor = () => {
    /* ... unchanged ... */
  };
  const containerStyle = [styles.container, darkTheme && styles.darkContainer];
  const textStyle = [styles.text, darkTheme && styles.darkText];
  const inputStyle = [styles.input, darkTheme && styles.darkInput];

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={containerStyle}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon
              name="arrow-back"
              size={24}
              color={darkTheme ? "#fff" : "#333"}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, darkTheme && styles.darkText]}>
            Mobile Money Payment
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={[styles.amountText, darkTheme && styles.darkText]}>
            Amount: GHS {parseFloat(amount).toFixed(2)}
          </Text>

          {/* Show payment status if available */}
          {paymentStatus && (
            <View style={styles.statusContainer}>
              {getStatusIcon()}
              <Text style={[styles.statusMessage, { color: getStatusColor() }]}>
                {paymentMessage}
              </Text>
            </View>
          )}

          {/* Only show form if not in a final state */}
          {!paymentStatus && (
            <>
              <Text style={[styles.label, darkTheme && styles.darkText]}>
                Select Mobile Network:
              </Text>
              <View style={styles.networkOptionsContainer}>
                {mobileNetworks.map((network) => (
                  <TouchableOpacity
                    key={network.value}
                    style={[
                      styles.networkOption,
                      darkTheme && styles.darkNetworkOption,
                      selectedNetwork === network.value &&
                        styles.networkOptionSelected,
                      selectedNetwork === network.value &&
                        darkTheme &&
                        styles.darkNetworkOptionSelected,
                    ]}
                    onPress={() => setSelectedNetwork(network.value)}
                  >
                    <Icon
                      name={network.icon}
                      size={24}
                      color={
                        selectedNetwork === network.value
                          ? "#fff"
                          : network.color
                      }
                    />
                    <Text
                      style={[
                        styles.networkOptionText,
                        darkTheme && styles.darkText,
                        selectedNetwork === network.value &&
                          styles.networkOptionTextSelected,
                      ]}
                    >
                      {network.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <Text style={[styles.label, darkTheme && styles.darkText]}>
                Mobile Money Number:
              </Text>
              <TextInput
                style={inputStyle}
                placeholder="e.g., 05XXXXXXXX"
                placeholderTextColor={darkTheme ? "#aaa" : "#888"}
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
              />

              <View style={styles.addressSection}>
                <Text style={[styles.label, darkTheme && styles.darkText]}>
                  <Icon
                    name="location-outline"
                    size={16}
                    color={darkTheme ? "#eee" : "#555"}
                  />{" "}
                  Shipping Address:
                </Text>
                <TextInput
                  style={[styles.addressInput, darkTheme && styles.darkInput]}
                  placeholder="Enter your full delivery address (House number, street, area, city)"
                  placeholderTextColor={darkTheme ? "#aaa" : "#888"}
                  multiline={true}
                  numberOfLines={3}
                  textAlignVertical="top"
                  value={shippingAddress}
                  onChangeText={setShippingAddress}
                />
                <Text
                  style={[styles.addressHint, darkTheme && styles.darkHint]}
                >
                  Include landmarks or detailed directions for accurate delivery
                </Text>
              </View>
            </>
          )}

          {/* Show appropriate buttons based on status */}
          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#7f00ff" />
              <Text style={[styles.loadingText, darkTheme && styles.darkText]}>
                Processing payment...
              </Text>
            </View>
          )}

          {!paymentStatus && !isLoading && (
            <TouchableOpacity
              style={[styles.button, darkTheme && styles.darkButton]}
              onPress={handleInitiatePayment}
              disabled={isLoading}
            >
              <Text
                style={[styles.buttonText, darkTheme && styles.darkButtonText]}
              >
                Pay Now
              </Text>
            </TouchableOpacity>
          )}

          {(paymentStatus === "failed" || paymentStatus === "abandoned") && (
            <TouchableOpacity
              style={[styles.retryButton, darkTheme && styles.darkButton]}
              onPress={() => {
                setPaymentStatus(null);
                setPaymentMessage("");
                setSelectedNetwork(null); // Reset network
                setMobileNumber(""); // Reset mobile number
                setShippingAddress(selectedAddress?.address || ""); // Reset shipping address from context
              }}
            >
              <Text
                style={[styles.buttonText, darkTheme && styles.darkButtonText]}
              >
                Try Again
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f8f8f8",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  darkContainer: {
    backgroundColor: "#333",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  amountText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 30,
  },
  statusContainer: {
    alignItems: "center",
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusMessage: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 15,
    lineHeight: 22,
  },
  loadingContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: "#7f00ff",
    fontWeight: "500",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginBottom: 10,
  },
  darkText: {
    color: "#eee",
  },
  networkOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    flexWrap: "wrap",
  },
  networkOption: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    minWidth: "45%",
    marginBottom: 10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  darkNetworkOption: {
    backgroundColor: "#444",
    borderColor: "#555",
  },
  networkOptionSelected: {
    backgroundColor: "#7f00ff",
    borderColor: "#7f00ff",
  },
  darkNetworkOptionSelected: {
    backgroundColor: "#6a00cc",
    borderColor: "#6a00cc",
  },
  networkOptionText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  networkOptionTextSelected: {
    color: "#fff",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  darkInput: {
    backgroundColor: "#444",
    color: "#fff",
    borderColor: "#555",
  },
  addressSection: {
    marginBottom: 20,
  },
  addressInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    minHeight: 80,
    textAlignVertical: "top",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  addressHint: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
    fontStyle: "italic",
    lineHeight: 16,
  },
  darkHint: {
    color: "#aaa",
  },
  button: {
    backgroundColor: "#7f00ff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  darkButton: {
    backgroundColor: "#6a00cc",
  },
  retryButton: {
    backgroundColor: "#28a745", // Green color for retry
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  darkButtonText: {
    color: "#fff",
  },
});
