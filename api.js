// api.js
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BASE_URL = "https://c7eaf16a0db4.ngrok-free.app";

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
  headers: {
    "Content-Type": "application/json",
  },
});

let logoutHandler = null;

// Function to set the logout handler from AuthContext
// Call this once during your app's initialization, e.g., in your main App.js or AuthProvider.
api.setLogoutHandler = (handler) => {
  logoutHandler = handler;
};

// Request Interceptor: Add JWT token to all outgoing requests
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("jwtToken");
    console.log(`API Interceptor: Request to ${config.url}`);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(
        `API Interceptor: Sending token: ${token.substring(0, 10)}...`
      ); // Log first 10 chars
    } else {
      console.log("API Interceptor: No token found in AsyncStorage.");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle 401 Unauthorized errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      console.warn(
        "API Interceptor: Authentication token expired or unauthorized. Triggering logout..."
      );

      // Trigger the external logout handler if it's been set
      if (logoutHandler) {
        await logoutHandler();
      } else {
        // Fallback: Directly clear storage if no specific handler is provided
        console.error(
          "API Interceptor: No logout handler set on API instance. Performing default logout."
        );
        await AsyncStorage.removeItem("jwtToken");
        await AsyncStorage.removeItem("user");
      }

      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export const signup = async (userData) => {
  try {
    const response = await api.post(`/api/auth/signup`, userData);
    return response.data;
  } catch (error) {
    return error.response?.data || { success: false, message: "Signup error" };
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post(`/api/auth/login`, credentials);
    // When logging in, ensure you store the user ID received from the backend
    // along with the JWT token.
    if (response.data.success && response.data.data.user) {
      await AsyncStorage.setItem(
        "user",
        JSON.stringify(response.data.data.user)
      );
    }
    return response.data;
  } catch (error) {
    return error.response?.data || { success: false, message: "Login error" };
  }
};

// initiateMobileMoneyPayment function
export const initiateMobileMoneyPayment = async (paymentDetails) => {
  try {
    const response = await api.post(
      `/api/payments/mobile-money/initiate`,
      paymentDetails
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error initiating mobile money payment:",
      error.response?.data || error.message
    );
    return (
      error.response?.data || {
        success: false,
        message: "Failed to initiate payment.",
      }
    );
  }
};

// function to submit OTP verification
// This function is used to verify the OTP code entered by the user
export const submitOtpVerification = async (otpCode, reference) => {
  try {
    const response = await api.post(`/api/payments/mobile-money/submit-otp`, {
      otp: otpCode,
      reference: reference,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error submitting OTP verification:",
      error.response?.data || error.message
    );
    return (
      error.response?.data || {
        success: false,
        message: "Failed to verify OTP.",
      }
    );
  }
};

// this function is used to resend the OTP code
// It can be called if the user did not receive the OTP or if it expired
export const resendOtp = async (reference) => {
  try {
    const response = await api.post(`/api/payments/mobile-money/resend-otp`, {
      reference: reference,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error resending OTP:",
      error.response?.data || error.message
    );
    return (
      error.response?.data || {
        success: false,
        message: "Failed to resend OTP.",
      }
    );
  }
};

/**
 * Handles user logout purely on the client-side by acknowledging the request.
 * In a stateless JWT setup, removing the token from client storage is often
 * sufficient for logging out, as there's no server-side session to invalidate.
 * This function does not make any backend calls.
 * @returns {Promise<object>} A success response indicating client-side logout.
 */

export const logoutUser = async () => {
  // No backend call is needed for client-side logout in a stateless JWT setup.
  // The frontend handles clearing the token and user data from AsyncStorage,
  // and then navigating away.
  console.log("Performing client-side logout. No backend call needed.");
  return { success: true, message: "Logged out successfully (client-side)." };
};

/**
 * Calls the backend to change the current user's password.
 * @param {string} currentPassword The user's current password.
 * @param {string} newPassword The user's new password.
 * @returns {Promise<object>} The ApiResponse from the backend.
 */
export const changeUserPassword = async (currentPassword, newPassword) => {
  try {
    const response = await api.post(`/api/users/change-password`, {
      currentPassword: currentPassword,
      newPassword: newPassword,
    });
    return response.data; // Expected ApiResponse<Void> on success
  } catch (error) {
    console.error(
      "Error changing password:",
      error.response?.data || error.message
    );
    // Backend returns ApiResponse.error on failure
    return (
      error.response?.data || {
        success: false,
        message: "Failed to change password.",
      }
    );
  }
};

/**
 * Calls the backend to delete the current user's account.
 * This function retrieves the user's ID from AsyncStorage and uses it
 * to call the DELETE /api/users/{id} endpoint provided by your UserController.
 * @returns {Promise<object>} The response data from the backend.
 */
export const deleteUserAccount = async () => {
  try {
    // Retrieve the user object from AsyncStorage to get the user ID
    const userString = await AsyncStorage.getItem("user");
    if (!userString) {
      return { success: false, message: "User data not found for deletion." };
    }
    const user = JSON.parse(userString);
    const userId = user.id; // Assuming the user object has an 'id' field

    if (!userId) {
      return { success: false, message: "User ID not found for deletion." };
    }

    // Call the backend's DELETE /api/users/{id} endpoint
    const response = await api.delete(`/api/users/${userId}`);
    return response.data; // Expecting ApiResponse<Void> with success message
  } catch (error) {
    console.error(
      "Error deleting user account:",
      error.response?.data || error.message
    );
    return (
      error.response?.data || {
        success: false,
        message: "Failed to delete account.",
      }
    );
  }
};

export default api;
