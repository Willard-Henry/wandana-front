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
import { useTranslation } from "react-i18next";


export default function MeScreen({ navigation }) {
  const { showAlert } = useContext(CustomAlertContext);
  const { logout, authState, loading: authLoading } = useAuth();

  const { t } = useTranslation();
  // Destructure loading state from useAuth

  const [profileImage, setProfileImage] = useState(null);
  const [displayName, setDisplayName] = useState(t("me.helloGuest"));
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
      setDisplayName(t("me.helloGuest"));
      setProfileImage(null);
    }
  }, [authState.user, authState.isAuthenticated, authLoading]); // Added authLoading to dependencies

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      const newImageUri = result.assets[0].uri;
      setProfileImage(newImageUri);
      // NOTE: In a real app, you would upload this image to your backend,
      // get the new URL, and then update the user profile
      // For now, it updates locally but doesn't persist beyond app session.
      // To persist, you'd integrate with updateUserProfile from api.js here.
    }
  };

  const handleLogout = async () => {
    showAlert(t("me.logoutAlertTitle"), t("me.logoutAlertMessage"), [
      { text: t("common.cancel"), style: t("common.cancel") },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          try {
            await logout();
          } catch (error) {
            console.error(t("me.logoutErrorTitle"), error);
            showAlert(t("me.logoutErrorTitle"), t("me.logErrorMessage"), [
              { text: t("common.ok"), style: "primary" },
            ]);
          }
        },
      },
    ]);
  };

  const handleDeleteAccount = async () => {
    showAlert(
      t('me.deleteAccount'),
      t("me.deleteAccountAlertMessage"),
      [
        { text: t("common.ok"), style: "cancel" },
        {
          text: t("me.deleteButton"),
          style: "destructive",
          onPress: async () => {
            try {
              const result = await deleteUserAccount();
              if (result.success) {
                showAlert(
                  t('me.accountDeletedTitle'),
                  t("me.accountDeletedMessage"),
                  [
                    {
                      text: t("common.ok"),
                      style: "primary",
                      onPress: async () => {
                        await logout();
                      },
                    },
                  ]
                );
              } else {
                showAlert(
                  t("me.deletionFailedTitle"),
                  result.message || t("me.deletionFailedMessage"),
                  [{ text: "OK", style: "primary" }]
                );
              }
            } catch (error) {
              console.error("Delete account error:", error);
              showAlert(
                t("me.deletionErrorTitle"),
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
              {t("meScreen.changePhoto")}
            </Text>
          </TouchableOpacity>
          <Text style={[styles.greetingText, { color: "#ffffff" }]}>
            {displayName}
          </Text>
        </View>

        {/* ACCOUNT Section */}
        <View style={styles.sectionGroup}>
          <Text style={[styles.sectionHeader, { color: sectionHeaderColor }]}>
            {t("meScreen.accountSection")}
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
                {t("meScreen.editProfile")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate("ChangePassword")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                {t("meScreen.changePassword")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rowNoBorder}
              onPress={() => navigation.navigate("ManageAddresses")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                {t("meScreen.manageAddresses")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SECURITY & PRIVACY Section */}
        <View style={styles.sectionGroup}>
          <Text style={[styles.sectionHeader, { color: sectionHeaderColor }]}>
            {t("meScreen.securityAndPrivacySection")}
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
                {t("meScreen.privacySettings")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rowNoBorder} onPress={handleLogout}>
              <Text style={[styles.rowText, { color: textColor }]}>{t("meScreen.logoutAlertTitle")}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SUPPORT Section */}
        <View style={styles.sectionGroup}>
          <Text style={[styles.sectionHeader, { color: sectionHeaderColor }]}>
            {t("meScreen.supportSection")}
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
                {t("meScreen.helpCenter")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rowNoBorder}
              onPress={() => navigation.navigate("ContactSupport")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                {t("meScreen.contactSupport")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* LEGAL Section */}
        <View style={styles.sectionGroup}>
          <Text style={[styles.sectionHeader, { color: sectionHeaderColor }]}>
            {t("meScreen.legalSection")}
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
                {t("meScreen.termsAndConditions")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rowNoBorder}
              onPress={() => navigation.navigate("About")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>{t("meScreen.about")}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* MORE Section */}
        <View style={styles.sectionGroup}>
          <Text style={[styles.sectionHeader, { color: sectionHeaderColor }]}>
            {t("meScreen.moreSection")}
          </Text>
          <View
            style={[
              styles.sectionCard,
              { backgroundColor: cardBg, borderColor: borderColor },
            ]}
          >
            <TouchableOpacity style={styles.row} onPress={handleDeleteAccount}>
              <Text style={[styles.rowText, { color: dangerColor }]}>
                {t("meScreen.deleteAccount")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.rowNoBorder}
              onPress={() => navigation.navigate("InviteFriends")}
            >
              <Text style={[styles.rowText, { color: textColor }]}>
                {t("meScreen.inviteFriends")}
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
