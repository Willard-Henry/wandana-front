// screens/OTPScreen.js
import React, { useState, useRef, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView, // Added ScrollView for better layout management
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { CustomAlertContext } from "../context/CustomAlertContext";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../ThemeContext"; // Import ThemeContext for dark/light mode
import { submitOtpVerification, resendOtp } from "../api";

export default function OTPScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { darkTheme } = useContext(ThemeContext); // Consume ThemeContext
  const { showAlert } = useContext(CustomAlertContext);
  const { clearCart } = useContext(CartContext);

  // Get payment details from route params
  const { paymentReference, amount, orderId } = route.params || {};

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [countdown, setCountdown] = useState(60); // Countdown for resend OTP
  const [canResend, setCanResend] = useState(false); // State to control resend button availability

  // Create refs for each input
  const inputRefs = useRef([]);

  // --- Theme Colors ---
  const primaryColor = "#7f00ff";
  const lightPurple = "#f0e6ff";
  const darkerPurple = "#5f00cc";
  const darkGrey = "#333333";
  const placeholderColor = darkTheme ? "#aaa" : "#888";

  const containerBg = darkTheme ? "#1a1a1a" : "#f5f5f5";
  const cardBg = darkTheme ? "#2a2a2a" : "#ffffff";
  const textColor = darkTheme ? "#ffffff" : darkGrey;
  const subTextColor = darkTheme ? "#cccccc" : "#666666";
  const inputBg = darkTheme ? "#333333" : "#f9f9f9";
  const borderColor = darkTheme ? "#444444" : "#e8e8e8";
  const otpInputFilledBg = darkTheme ? "#4a3070" : lightPurple;
  const otpInputFilledBorder = darkTheme ? "#9f60ff" : primaryColor;

  // Effect to focus on first input and start resend countdown
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }

    // Start countdown for resend button
    setCountdown(60);
    setCanResend(false); // Initially cannot resend

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          setCanResend(true); // Allow resend after countdown
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [paymentReference]); // Restart countdown if paymentReference changes (e.g., successful initial payment and new OTP sent)

  const handleOtpChange = (value, index) => {
    const sanitizedValue = value.replace(/[^0-9]/g, "").slice(0, 1);
    const newOtp = [...otp];
    newOtp[index] = sanitizedValue;
    setOtp(newOtp);

    if (sanitizedValue) {
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      } else {
        // All 6 digits filled, attempt auto-submit
        const completeOtp = newOtp.join("");
        if (completeOtp.length === 6) {
          handleSubmitOTP(completeOtp);
        }
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmitOTP = async (otpCode = null) => {
    const otpValue = otpCode || otp.join("");

    if (otpValue.length !== 6) {
      showAlert("Error", "Please enter all 6 digits of the OTP.");
      return;
    }

    if (!paymentReference) {
      showAlert("Error", "Payment reference is missing. Cannot verify OTP.");
      return;
    }

    setIsLoading(true);

    try {
      const result = await submitOtpVerification(otpValue, paymentReference);

      if (result.success) {
        clearCart(); // Clear the cart on successful OTP verification

        showAlert(
          "Success",
          result.message || "Payment verified successfully!",
          [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("SuccessScreen", {
                  orderId: orderId,
                  message: result.message || "Payment completed successfully!",
                  amount: amount,
                  paymentMethod: "Mobile Money",
                }),
            },
          ]
        );
      } else {
        const errorMessage = result.message || "Invalid OTP. Please try again.";
        showAlert("Verification Failed", errorMessage);
        setOtp(["", "", "", "", "", ""]); // Clear OTP inputs on failure
        inputRefs.current[0]?.focus();
      }
    } catch (error) {
      console.error("OTP verification error:", error);
      showAlert("Error", "Failed to verify OTP. Please try again.");
      setOtp(["", "", "", "", "", ""]); // Clear OTP inputs on error
      inputRefs.current[0]?.focus();
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!paymentReference) {
      showAlert("Error", "Payment reference is missing. Cannot resend OTP.");
      return;
    }
    if (!canResend && countdown > 0) {
      showAlert(
        "Resend Cooldown",
        `Please wait ${countdown} seconds before resending.`
      );
      return;
    }

    setResendLoading(true);
    setCanResend(false); // Disable resend button immediately

    try {
      const result = await resendOtp(paymentReference);

      if (result.success) {
        showAlert("Success", result.message || "OTP has been resent to you.");
        setOtp(["", "", "", "", "", ""]); // Clear current OTP inputs to allow for new OTP entry
        inputRefs.current[0]?.focus();
        setCountdown(60); // Reset countdown for next resend
      } else {
        showAlert("Error", result.message || "Failed to resend OTP.");
      }
    } catch (error) {
      console.error("Resend OTP error:", error);
      showAlert("Error", "Failed to resend OTP. Please try again.");
    } finally {
      setResendLoading(false);
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: containerBg }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          { backgroundColor: cardBg, borderBottomColor: borderColor },
        ]}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color={textColor} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: textColor }]}>
          Verify Payment
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <View
            style={[styles.iconContainer, { backgroundColor: lightPurple }]}
          >
            <Icon name="lock-closed" size={60} color={primaryColor} />
          </View>

          <Text style={[styles.title, { color: textColor }]}>Enter OTP</Text>
          <Text style={[styles.subtitle, { color: subTextColor }]}>
            Enter the 6-digit verification code sent to your mobile money number
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={[
                  styles.otpInput,
                  {
                    borderColor: borderColor,
                    backgroundColor: inputBg,
                    color: textColor,
                  },
                  digit && {
                    borderColor: otpInputFilledBorder,
                    backgroundColor: otpInputFilledBg,
                  },
                ]}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="numeric"
                maxLength={1}
                selectTextOnFocus
                editable={!isLoading}
                placeholderTextColor={placeholderColor}
              />
            ))}
          </View>

          {/* Show manual submit button when OTP is complete but not loading */}
          {isOtpComplete && !isLoading && (
            <TouchableOpacity
              style={[styles.submitButton, { backgroundColor: primaryColor }]}
              onPress={() => handleSubmitOTP()}
              disabled={isLoading}
            >
              <Text style={styles.submitButtonText}>Verify OTP</Text>
            </TouchableOpacity>
          )}

          {/* Loading state */}
          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={primaryColor} />
              <Text style={[styles.loadingText, { color: primaryColor }]}>
                Verifying OTP...
              </Text>
            </View>
          )}

          {/* Resend OTP section */}
          <View style={styles.resendContainer}>
            <Text style={[styles.resendText, { color: subTextColor }]}>
              Didn't receive the code?
            </Text>
            <TouchableOpacity
              onPress={handleResendOTP}
              disabled={resendLoading || isLoading || !canResend} // Disable if countdown active
              style={styles.resendButton}
            >
              {resendLoading ? (
                <ActivityIndicator size="small" color={primaryColor} />
              ) : (
                <Text
                  style={[
                    styles.resendButtonText,
                    { color: primaryColor },
                    !canResend && styles.resendButtonTextDisabled,
                  ]}
                >
                  {canResend ? "Resend OTP" : `Resend in ${countdown}s`}
                </Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Amount display */}
          {amount && (
            <View
              style={[
                styles.amountContainer,
                { backgroundColor: lightPurple, borderColor: primaryColor },
              ]}
            >
              <Text style={[styles.amountText, { color: darkerPurple }]}>
                Amount: GHS {parseFloat(amount).toFixed(2)}
              </Text>
            </View>
          )}

          {/* Payment reference info */}
          {paymentReference && (
            <View style={styles.referenceContainer}>
              <Text style={[styles.referenceText, { color: subTextColor }]}>
                Reference: {paymentReference}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth, // Use hairline for thin line
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
    paddingRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center", // Center content vertically
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30, // Add vertical padding for overall content
  },
  iconContainer: {
    marginBottom: 30,
    borderRadius: 60, // Make it more circular
    padding: 20, // Slightly larger padding
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  title: {
    fontSize: 28, // Slightly larger title
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 24,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%", // Wider for better spacing
    maxWidth: 300, // Max width for larger screens
    marginBottom: 30,
  },
  otpInput: {
    width: 45,
    height: 55,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    borderWidth: 2,
  },
  submitButton: {
    width: "90%",
    maxWidth: 300,
    paddingVertical: 15,
    borderRadius: 12, // More rounded corners
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  loadingText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  resendContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20, // Adjusted margin
    marginBottom: 20,
  },
  resendText: {
    fontSize: 15,
  },
  resendButton: {
    marginLeft: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  resendButtonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  resendButtonTextDisabled: {
    color: "#888", // Grey out when disabled
  },
  amountContainer: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  referenceContainer: {
    marginTop: 15,
    padding: 10,
    borderRadius: 8,
  },
  referenceText: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
  },
});
