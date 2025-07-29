// api.js
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const BASE_URL = "https://wandana-core-production.up.railway.app";

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
      );
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
 */
export const logoutUser = async () => {
  console.log("Performing client-side logout. No backend call needed.");
  return { success: true, message: "Logged out successfully (client-side)." };
};

/**
 * Calls the backend to change the current user's password.
 */
export const changeUserPassword = async (currentPassword, newPassword) => {
  try {
    const response = await api.post(`/api/users/change-password`, {
      currentPassword: currentPassword,
      newPassword: newPassword,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error changing password:",
      error.response?.data || error.message
    );
    return (
      error.response?.data || {
        success: false,
        message: "Failed to change password.",
      }
    );
  }
};

/**
 * Updates the user's profile information using UserDTO structure.
 * Sends complete UserDTO as required by backend validation.
 * @param {string} userId The user's ID
 * @param {object} userUpdateData Complete UserDTO object
 * @returns {Promise<object>} The response data from the backend
 */
export const updateUserProfile = async (userId, userUpdateData) => {
  try {
    // For UserDTO, we need to send a complete object with all required fields
    // The backend validates that ID in path matches ID in body
    const updatePayload = {
      id: parseInt(userId), // Ensure ID is a number and matches the path parameter
      username: userUpdateData.username, // Required by @NotBlank
      email: userUpdateData.email, // Required by @NotBlank
      firstName: userUpdateData.firstName || "",
      lastName: userUpdateData.lastName || "",
      phoneNumber: userUpdateData.phoneNumber || "",
      profileImageUrl: userUpdateData.profileImageUrl || null,
      emailVerified: userUpdateData.emailVerified || false,
      enabled:
        userUpdateData.enabled !== undefined ? userUpdateData.enabled : true,
      dob: userUpdateData.dob || null,
      sex: userUpdateData.sex || null,
      authorities: userUpdateData.authorities || [],
    };

    console.log("Updating user profile with payload:", updatePayload);
    console.log("Request URL:", `/api/users/${userId}`);

    const response = await api.put(`/api/users/${userId}`, updatePayload);

    console.log("Update profile response:", response.data);

    // Return the response in a consistent format
    // Check if the backend returned success or if it's a 200 status with data
    if (response.status === 200 && response.data) {
      return {
        success: true,
        status: "success",
        data: response.data,
        message: "Profile updated successfully",
      };
    }

    return response.data; // Return whatever the backend sent
  } catch (error) {
    // Enhanced error logging
    console.error("Error updating user profile - Full error:", error);
    console.error("Error response status:", error.response?.status);
    console.error("Error response data:", error.response?.data);
    console.error("Error message:", error.message);

    // Check for specific error types
    if (error.response?.status === 404) {
      return {
        success: false,
        message: "User not found. Please try logging in again.",
      };
    } else if (error.response?.status === 400) {
      return {
        success: false,
        message: error.response?.data?.message || "Invalid data provided.",
      };
    } else if (error.response?.status === 500) {
      return {
        success: false,
        message: "Server error. Please try again later.",
      };
    }

    return (
      error.response?.data || {
        success: false,
        message: "Failed to update profile.",
      }
    );
  }
};

/**
 * Calls the backend to delete the current user's account.
 */
export const deleteUserAccount = async () => {
  try {
    // Retrieve the user object from AsyncStorage to get the user ID
    const userString = await AsyncStorage.getItem("user");
    if (!userString) {
      return { success: false, message: "User data not found for deletion." };
    }
    const user = JSON.parse(userString);
    const userId = user.id;

    if (!userId) {
      return { success: false, message: "User ID not found for deletion." };
    }

    // Call the backend's DELETE /api/users/{id} endpoint
    const response = await api.delete(`/api/users/${userId}`);
    return response.data;
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
