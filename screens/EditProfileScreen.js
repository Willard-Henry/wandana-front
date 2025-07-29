// screens/EditProfileScreen.js
import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { CustomAlertContext } from "../context/CustomAlertContext";
import { useAuth } from "../context/AuthContext";
import { updateUserProfile } from "../api";
import Icon from "react-native-vector-icons/Ionicons";

export default function EditProfileScreen() {
  const navigation = useNavigation();
  const { showAlert } = useContext(CustomAlertContext);
  const { authState, updateUserInContext } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Define theme colors (light mode only)
  const primaryColor = "#7f00ff";
  const darkGrey = "#333333";
  const containerBg = "#f5f5f5";
  const cardBg = "#ffffff";
  const textColor = darkGrey;
  const inputBg = "#fff";
  const borderColor = "#ddd";
  const placeholderColor = "#888";

  // Load initial user data when component mounts or authState.user changes
  useEffect(() => {
    if (authState.user) {
      setFirstName(authState.user.firstName || "");
      setLastName(authState.user.lastName || "");
      setEmail(authState.user.email || "");
      setPhoneNumber(authState.user.phoneNumber || "");
      setProfileImage(authState.user.profileImageUrl || null);
    }
  }, [authState.user]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
      // NOTE: In a real app, you would upload this image to your backend/cloud storage
    }
  };

  const handleSave = async () => {
    if (!authState.user || !authState.user.id) {
      showAlert("Error", "User not logged in or ID missing.");
      return;
    }

    // Basic validation
    if (!firstName.trim() || !email.trim()) {
      showAlert("Error", "First name and Email are required.");
      return;
    }

    setIsLoading(true);

    try {
      // Create user data object matching backend's UserDTO structure
      const userUpdateData = {
        id: authState.user.id, // REQUIRED: Must match the ID in the URL path
        username: authState.user.username, // REQUIRED by @NotBlank validation
        email: email.trim(), // REQUIRED by @NotBlank validation
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        phoneNumber: phoneNumber.trim(),
        profileImageUrl: profileImage,
        // Include other fields that exist in the current user but might not be in the form
        emailVerified: authState.user.emailVerified || false,
        enabled: authState.user.enabled || true,
        dob: authState.user.dob || null,
        sex: authState.user.sex || null,
        authorities: authState.user.authorities || [],
      };

      // Don't filter out fields - send the complete UserDTO
      const cleanedData = userUpdateData;

      const result = await updateUserProfile(authState.user.id, cleanedData);

      console.log("API response:", result); // Debug log to see the actual response

      // Handle different response formats from backend
      if (result.success || result.status === "success") {
        // Update the user in AuthContext with the returned data
        if (result.data && updateUserInContext) {
          await updateUserInContext(result.data);
        }

        showAlert(
          "Profile Updated",
          "Your profile information has been saved.",
          [
            {
              text: "OK",
              onPress: () => navigation.goBack(),
            },
          ]
        );
      } else {
        showAlert(
          "Update Failed",
          result.message || "Failed to save profile changes."
        );
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      showAlert("Error", "An unexpected error occurred while saving profile.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: containerBg },
      ]}
    >
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
          Edit Profile
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <TouchableOpacity
        style={styles.imageWrapper}
        onPress={pickImage}
        disabled={isLoading}
      >
        <Image
          source={
            profileImage
              ? { uri: profileImage }
              : { uri: "https://placehold.co/120x120/ccc/555?text=Add+Photo" }
          }
          style={[styles.profileImage, { borderColor: borderColor }]}
        />
        <Text style={[styles.changePhoto, { color: primaryColor }]}>
          Change Photo
        </Text>
      </TouchableOpacity>

      <View style={styles.formSection}>
        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: textColor }]}>First Name</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: inputBg,
                borderColor: borderColor,
                color: textColor,
              },
            ]}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First name"
            placeholderTextColor={placeholderColor}
            editable={!isLoading}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: textColor }]}>Last Name</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: inputBg,
                borderColor: borderColor,
                color: textColor,
              },
            ]}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Last name"
            placeholderTextColor={placeholderColor}
            editable={!isLoading}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: textColor }]}>Email</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: inputBg,
                borderColor: borderColor,
                color: textColor,
              },
            ]}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor={placeholderColor}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!isLoading}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={[styles.label, { color: textColor }]}>Phone</Text>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: inputBg,
                borderColor: borderColor,
                color: textColor,
              },
            ]}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone"
            placeholderTextColor={placeholderColor}
            keyboardType="phone-pad"
            editable={!isLoading}
          />
        </View>
      </View>

      <TouchableOpacity
        style={[styles.saveButton, { backgroundColor: primaryColor }]}
        onPress={handleSave}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.saveButtonText}>Save Changes</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
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
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageWrapper: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    marginBottom: 10,
    resizeMode: "cover",
  },
  changePhoto: {
    fontSize: 14,
    fontWeight: "600",
  },
  formSection: {
    width: "90%",
    alignSelf: "center",
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    marginLeft: 4,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    minHeight: 50,
  },
  saveButton: {
    paddingVertical: 14,
    borderRadius: 14,
    marginTop: 40,
    alignSelf: "center",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});
