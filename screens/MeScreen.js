// screens/MeScreen.js
import React, { useState, useContext, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
  Platform,
  Animated, // Import Animated for fade transition
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ThemeContext } from "../ThemeContext"; // Assuming ThemeContext is in the root as 'ThemeContext.js'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteUserAccount } from "../api";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook
import { CustomAlertContext } from "../context/CustomAlertContext";
import Icon from "react-native-vector-icons/Ionicons"; // Ensure Ionicons are imported for sun/moon icons

export default function MeScreen({ navigation }) {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  const { showAlert } = useContext(CustomAlertContext);
  const { logout, user: authUser } = useAuth();

  const [profileImage, setProfileImage] = useState(null);
  const [notifications, setNotifications] = useState(true);
  const [username, setUsername] = useState(authUser?.username || "Guest");
  const [userEmail, setUserEmail] = useState(
    authUser?.email || "guest@example.com"
  );

  // Animated value for fade transition
  const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity 1 (fully visible)

  // Define primary theme color for easier use
  const primaryColor = "#7f00ff";
  const lightPurple = "#f0e6ff";
  const darkerPurple = "#5f00cc";
  const lightGrey = "#e0e0e0";
  const darkGrey = "#333333";
  const dangerColor = "crimson"; // For delete account

  // Styles based on theme
  const containerBg = darkTheme ? "#1a1a1a" : "#f5f5f5";
  const cardBg = darkTheme ? "#2a2a2a" : "#ffffff";
  const textColor = darkTheme ? "#ffffff" : darkGrey;
  const subTextColor = darkTheme ? "#cccccc" : "#666666";
  const sectionHeaderColor = darkTheme ? "#bbbbbb" : "#888888";
  const borderColor = darkTheme ? "#444444" : "#e8e8e8";

  // Effect to update user data when authUser changes (preferred method)
  useEffect(() => {
    if (authUser) {
      setUsername(authUser.username || "User");
      setUserEmail(authUser.email || "No email");
      if (authUser.profileImageUrl) {
        setProfileImage(authUser.profileImageUrl);
      }
    } else {
      setUsername("Guest");
      setUserEmail("guest@example.com");
      setProfileImage(null);
    }
  }, [authUser]);

  // Optional: Fallback to load user data from AsyncStorage if AuthContext hasn't provided it yet
  useEffect(() => {
    const loadInitialUserDataFromStorage = async () => {
      try {
        const userString = await AsyncStorage.getItem("user");
        if (userString) {
          const user = JSON.parse(userString);
          if (!authUser || !authUser.username) {
            setUsername(user.username || "User");
            setUserEmail(user.email || "No email");
            if (user.profileImageUrl) {
              setProfileImage(user.profileImageUrl);
            }
          }
        }
      } catch (error) {
        console.error("Failed to load user data from AsyncStorage:", error);
      }
    };

    if (!authUser) {
      loadInitialUserDataFromStorage();
    }
  }, [authUser]);

  // Effect for fade transition when theme changes
  useEffect(() => {
    // Animate opacity to 0, then toggle theme, then animate back to 1
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150, // Fast fade out
      useNativeDriver: true, // Use native driver for performance
    }).start(() => {
      // After fading out, the theme has already changed from ThemeContext.js
      // Now, fade back in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 150, // Fast fade in
        useNativeDriver: true,
      }).start();
    });
  }, [darkTheme, fadeAnim]); // Re-run animation when darkTheme changes

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
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
                <Text style={{ fontSize: 40, color: primaryColor }}>+</Text>
              </View>
            )}
            <Text style={[styles.changePhoto, { color: lightPurple }]}>
              Change Photo
            </Text>
          </TouchableOpacity>
          <Text style={[styles.nameText, { color: "#ffffff" }]}>
            {username}
          </Text>
          <Text style={[styles.emailText, { color: lightPurple }]}>
            {userEmail}
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
              style={styles.row}
              onPress={() => navigation.navigate("ManageAddresses")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                Manage Addresses
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rowNoBorder}
              onPress={() => navigation.navigate("PaymentMethods")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                Payment Methods
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* PREFERENCES Section */}
        <View style={styles.sectionGroup}>
          <Text style={[styles.sectionHeader, { color: sectionHeaderColor }]}>
            PREFERENCES
          </Text>
          <View
            style={[
              styles.sectionCard,
              { backgroundColor: cardBg, borderColor: borderColor },
            ]}
          >
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("LocationAndCurrency")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                Location & Currency
              </Text>
            </TouchableOpacity>
            <View style={styles.row}>
              <Text style={[styles.rowText, { color: textColor }]}>
                Notifications
              </Text>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: lightGrey, true: primaryColor }}
                thumbColor={darkTheme ? lightGrey : "#fff"}
                ios_backgroundColor={lightGrey}
              />
            </View>

            {/* NEW THEME TOGGLE ROW */}
            <TouchableOpacity style={styles.rowNoBorder} onPress={toggleTheme}>
              <Text style={[styles.rowText, { color: textColor }]}>
                {darkTheme ? "Light Mode" : "Dark Mode"}
              </Text>
              <Icon
                name={darkTheme ? "sunny" : "moon"}
                size={24}
                color={darkTheme ? "gold" : primaryColor}
              />
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
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 2,
  },
  emailText: {
    fontSize: 16,
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
