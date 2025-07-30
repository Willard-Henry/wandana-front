import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
  Platform,
  Animated,
} from "react-native";
// Removed unused AsyncStorage import as AuthContext now handles persistence
import { deleteUserAccount } from "../api";
import { useAuth } from "../context/AuthContext";
import { CustomAlertContext } from "../context/CustomAlertContext";
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MeScreen({ navigation }) {
  const { showAlert } = useContext(CustomAlertContext);
  const { logout, authState, loading: authLoading } = useAuth(); // Destructure loading state from useAuth

  const [profileImage, setProfileImage] = useState(null);
  const [displayName, setDisplayName] = useState("Hello Guest!");
  const [notifications, setNotifications] = useState(true);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  // Define theme colors (light mode only)
  const primaryColor = "#7f00ff";
  const lightPurple = "#f0e6ff";
  const darkerPurple = "#5f00cc";
  const lightGrey = "#e0e0e0";
  const darkGrey = "#333333";
  const dangerColor = "crimson";

  // Light theme styles
  const containerBg = "#f5f5f5";
  const cardBg = "#ffffff";
  const textColor = darkGrey;
  const subTextColor = "#666666";
  const sectionHeaderColor = "#888888";
  const borderColor = "#e8e8e8";

  // Load saved profile image on component mount
  useEffect(() => {
    loadSavedProfileImage();
  }, []);

  // Load saved profile image from AsyncStorage
  const loadSavedProfileImage = async () => {
    try {
      const savedImage = await AsyncStorage.getItem("profileImage");
      if (savedImage) {
        setProfileImage(savedImage);
      }
    } catch (error) {
      console.error("Error loading saved profile image:", error);
    }
  };

  // Save profile image to AsyncStorage
  const saveProfileImage = async (imageUri) => {
    try {
      await AsyncStorage.setItem("profileImage", imageUri);
    } catch (error) {
      console.error("Error saving profile image:", error);
    }
  };

  // Effect to update user data when authState changes
  useEffect(() => {
    if (authState.isAuthenticated && authState.user) {
      const user = authState.user;
      // Prioritize firstName, then username, capitalize first letter
      const name = user.firstName
        ? user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)
        : user.username
        ? user.username.charAt(0).toUpperCase() + user.username.slice(1)
        : "Guest"; // Fallback to "Guest" if neither is available
      setDisplayName(`Hello ${name}!`);

      if (user.profileImageUrl) {
        setProfileImage(user.profileImageUrl);
      } else {
        setProfileImage(null); // Clear image if user doesn't have one
      }
    } else if (!authLoading) {
      // Only set to "Guest" if not currently loading auth state
      setDisplayName("Hello Guest!");
      setProfileImage(null);
    }
  }, [authState.user, authState.isAuthenticated, authLoading]); // Added authLoading to dependencies

  const pickImage = async () => {
    try {
      // Request permissions
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (permissionResult.granted === false) {
        Alert.alert(
          "Permission Required",
          "Permission to access camera roll is required to change profile picture.",
          [{ text: "OK" }]
        );
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8, // Compress image to reduce size
        base64: false, // Don't need base64 for file URI
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const newImageUri = result.assets[0].uri;
        setProfileImage(newImageUri);

        // Save to AsyncStorage for persistence
        await saveProfileImage(newImageUri);

        // Optional: Upload to server if you have an upload endpoint
        // await uploadProfileImage(newImageUri);

        showAlert("Success", "Profile picture updated successfully!", [
          { text: "OK", style: "primary" },
        ]);
      }
    } catch (error) {
      console.error("Error picking image:", error);
      showAlert(
        "Error",
        "Failed to update profile picture. Please try again.",
        [{ text: "OK", style: "primary" }]
      );
    }
  };

  const clearProfileImage = async () => {
    showAlert(
      "Remove Photo",
      "Are you sure you want to remove your profile picture?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          style: "destructive",
          onPress: async () => {
            setProfileImage(null);
            try {
              await AsyncStorage.removeItem("profileImage");
            } catch (error) {
              console.error("Error removing profile image:", error);
            }
          },
        },
      ]
    );
  };

  const handleLogout = async () => {
    showAlert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          try {
            await logout();
          } catch (error) {
            console.error("Logout error:", error);
            showAlert("Logout Error", "Failed to log out. Please try again.", [
              { text: "OK", style: "primary" },
            ]);
          }
        },
      },
    ]);
  };

  const handleDeleteAccount = async () => {
    showAlert(
      "Delete Account",
      "Are you sure you want to delete your account? This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              const result = await deleteUserAccount();
              if (result.success) {
                showAlert(
                  "Account Deleted",
                  "Your account has been successfully deleted.",
                  [
                    {
                      text: "OK",
                      style: "primary",
                      onPress: async () => {
                        await logout();
                      },
                    },
                  ]
                );
              } else {
                showAlert(
                  "Deletion Failed",
                  result.message || "Could not delete account at this time.",
                  [{ text: "OK", style: "primary" }]
                );
              }
            } catch (error) {
              console.error("Delete account error:", error);
              showAlert(
                "Deletion Error",
                "Failed to delete account. Please try again.",
                [{ text: "OK", style: "primary" }]
              );
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={[styles.scrollView, { backgroundColor: containerBg }]}>
      <Animated.View
        style={[
          styles.container,
          { backgroundColor: containerBg, opacity: fadeAnim },
        ]}
      >
        {/* Profile Section */}
        <View
          style={[styles.profileSection, { backgroundColor: primaryColor }]}
        >
          <TouchableOpacity
            onPress={pickImage}
            onLongPress={profileImage ? clearProfileImage : undefined}
            style={styles.profileImageContainer}
          >
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
            ) : (
              <View
                style={[
                  styles.profileImage,
                  {
                    backgroundColor: lightPurple,
                    justifyContent: "center",
                    alignItems: "center",
                  },
                ]}
              >
                <Icon name="camera" size={40} color={primaryColor} />
              </View>
            )}
            <Text style={[styles.changePhoto, { color: lightPurple }]}>
              {profileImage ? "Change Photo" : "Add Photo"}
            </Text>
            {profileImage && (
              <Text
                style={[
                  styles.removePhoto,
                  { color: lightPurple, fontSize: 12 },
                ]}
              >
                Long press to remove
              </Text>
            )}
          </TouchableOpacity>
          <Text style={[styles.greetingText, { color: "#ffffff" }]}>
            {displayName}
          </Text>
        </View>

        {/* ACCOUNT Section */}
        <View style={styles.sectionGroup}>
          <Text style={[styles.sectionHeader, { color: sectionHeaderColor }]}>
            ACCOUNT
          </Text>
          <View
            style={[
              styles.sectionCard,
              { backgroundColor: cardBg, borderColor: borderColor },
            ]}
          >
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("EditProfile")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                Edit Profile
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("ChangePassword")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                Change Password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rowNoBorder}
              onPress={() => navigation.navigate("ManageAddresses")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                Manage Addresses
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SECURITY & PRIVACY Section */}
        <View style={styles.sectionGroup}>
          <Text style={[styles.sectionHeader, { color: sectionHeaderColor }]}>
            SECURITY & PRIVACY
          </Text>
          <View
            style={[
              styles.sectionCard,
              { backgroundColor: cardBg, borderColor: borderColor },
            ]}
          >
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("PrivacySettings")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                Privacy Settings
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowNoBorder} onPress={handleLogout}>
              <Text style={[styles.rowText, { color: textColor }]}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SUPPORT Section */}
        <View style={styles.sectionGroup}>
          <Text style={[styles.sectionHeader, { color: sectionHeaderColor }]}>
            SUPPORT
          </Text>
          <View
            style={[
              styles.sectionCard,
              { backgroundColor: cardBg, borderColor: borderColor },
            ]}
          >
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("HelpCenter")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                Help Center
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rowNoBorder}
              onPress={() => navigation.navigate("ContactSupport")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                Contact Support
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* LEGAL Section */}
        <View style={styles.sectionGroup}>
          <Text style={[styles.sectionHeader, { color: sectionHeaderColor }]}>
            LEGAL
          </Text>
          <View
            style={[
              styles.sectionCard,
              { backgroundColor: cardBg, borderColor: borderColor },
            ]}
          >
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("TermsAndConditions")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rowNoBorder}
              onPress={() => navigation.navigate("About")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>About</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* MORE Section */}
        <View style={styles.sectionGroup}>
          <Text style={[styles.sectionHeader, { color: sectionHeaderColor }]}>
            MORE
          </Text>
          <View
            style={[
              styles.sectionCard,
              { backgroundColor: cardBg, borderColor: borderColor },
            ]}
          >
            <TouchableOpacity style={styles.row} onPress={handleDeleteAccount}>
              <Text style={[styles.rowText, { color: dangerColor }]}>
                Delete Account
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rowNoBorder}
              onPress={() => navigation.navigate("InviteFriends")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                Invite Friends
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 40,
  },
  profileSection: {
    width: "100%",
    paddingVertical: 30,
    alignItems: "center",
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  profileImageContainer: {
    marginBottom: 10,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.5)",
    marginBottom: 5,
  },
  changePhoto: {
    fontSize: 14,
    fontWeight: "bold",
  },
  greetingText: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  sectionGroup: {
    width: "90%",
    marginBottom: 15,
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 8,
    marginLeft: 10,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  sectionCard: {
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#eee",
  },
  rowNoBorder: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 15,
  },
  rowText: {
    fontSize: 16,
  },
});
