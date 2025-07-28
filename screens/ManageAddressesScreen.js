// screens/ManageAddressesScreen.js
import React, { useState, useContext, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  Platform,
  ActivityIndicator, // For potential future loading states (e.g., geocoding)
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import Icon from "react-native-vector-icons/Ionicons"; // For the back icon
import { AddressContext } from "../context/AddressContext";
import { CustomAlertContext } from "../context/CustomAlertContext";
import { ThemeContext } from "../ThemeContext"; // Import ThemeContext
import AsyncStorage from "@react-native-async-storage/async-storage"; // For persisting default address

const { width } = Dimensions.get("window");

// Define theme colors
const primaryColor = "#7f00ff"; // Vibrant Purple
const lightPurple = "#f0e6ff"; // Very light purple
const darkGrey = "#333333";
const lightGreyBorder = "#ddd";
const placeholderColor = "#999";
const dangerColor = "#e74c3c"; // Red for destructive actions

export default function ManageAddressesScreen() {
  const navigation = useNavigation();
  const { setSelectedAddress } = useContext(AddressContext);
  const { showAlert } = useContext(CustomAlertContext);
  const { darkTheme } = useContext(ThemeContext);

  const [addresses, setAddresses] = useState([]); // Start with empty array, load from storage
  const [label, setLabel] = useState("");
  const [address, setAddress] = useState("");
  const [marker, setMarker] = useState({
    latitude: 5.56, // Default to Accra, Ghana
    longitude: -0.205, // Default to Accra, Ghana
  });
  const [region, setRegion] = useState({
    // For MapView initial and onRegionChange
    latitude: 5.56,
    longitude: -0.205,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  // Theme-dependent styles
  const containerBg = darkTheme ? "#1a1a1a" : "#f5f5f5";
  const cardBg = darkTheme ? "#2a2a2a" : "#ffffff";
  const textColor = darkTheme ? "#ffffff" : darkGrey;
  const inputBg = darkTheme ? "#333333" : "#f9f9f9";
  const sectionHeaderColor = darkTheme ? "#bbbbbb" : "#888888";

  // Function to save addresses to AsyncStorage
  const saveAddressesToStorage = useCallback(async (currentAddresses) => {
    try {
      await AsyncStorage.setItem(
        "userAddresses",
        JSON.stringify(currentAddresses)
      );
    } catch (error) {
      console.error("Failed to save addresses to AsyncStorage:", error);
    }
  }, []);

  // Function to load addresses from AsyncStorage on mount
  useEffect(() => {
    const loadAddresses = async () => {
      try {
        const storedAddresses = await AsyncStorage.getItem("userAddresses");
        if (storedAddresses) {
          const parsedAddresses = JSON.parse(storedAddresses);
          setAddresses(parsedAddresses);
          // Also set the global AddressContext if a default is found
          const defaultAddr = parsedAddresses.find((a) => a.selected);
          if (defaultAddr) {
            setTimeout(() => {
              setSelectedAddress(defaultAddr);
              setRegion({
                latitude: defaultAddr.latitude,
                longitude: defaultAddr.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              });
              setMarker({
                latitude: defaultAddr.latitude,
                longitude: defaultAddr.longitude,
              });
            }, 0);
          }
        } else {
          // If no addresses saved, initialize with default if needed, or leave empty
          // For now, let's keep it truly empty if nothing is in storage
        }
      } catch (error) {
        console.error("Failed to load addresses from AsyncStorage:", error);
      }
    };
    loadAddresses();
  }, [setSelectedAddress]); // Depend on setSelectedAddress to avoid lint warnings

  const selectAddress = useCallback(
    (id) => {
      setAddresses((prevAddresses) => {
        const updatedAddresses = prevAddresses.map((a) => ({
          ...a,
          selected: a.id === id,
        }));
        const selected = updatedAddresses.find((a) => a.id === id);
        if (selected) {
          setSelectedAddress(selected); // Update global context
          saveAddressesToStorage(updatedAddresses); // Save to AsyncStorage
        }
        return updatedAddresses;
      });
    },
    [setSelectedAddress, saveAddressesToStorage]
  );

  const removeAddress = useCallback(
    (id) => {
      showAlert(
        "Remove Address",
        "Are you sure you want to remove this address?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Remove",
            style: "destructive",
            onPress: () => {
              setAddresses((prevAddresses) => {
                const updatedAddresses = prevAddresses.filter(
                  (a) => a.id !== id
                );
                saveAddressesToStorage(updatedAddresses); // Save updated list
                // If the removed address was selected, clear global context
                const wasSelected = addresses.find(
                  (a) => a.id === id
                )?.selected;
                if (wasSelected) {
                  setSelectedAddress(null);
                }
                return updatedAddresses;
              });
            },
          },
        ]
      );
    },
    [addresses, showAlert, setSelectedAddress, saveAddressesToStorage]
  );

  const addAddress = useCallback(() => {
    if (!label.trim() || !address.trim()) {
      showAlert(
        "Missing Fields",
        "Please enter both a label and the full address.",
        [{ text: "OK", style: "primary" }]
      );
      return;
    }

    setAddresses((prevAddresses) => {
      const newId = (
        Math.max(0, ...prevAddresses.map((a) => parseInt(a.id))) + 1
      ).toString();
      const newAddress = {
        id: newId,
        label: label.trim(),
        address: address.trim(),
        latitude: marker.latitude,
        longitude: marker.longitude,
        selected: true, // New address becomes default
      };

      const updatedAddresses = prevAddresses.map((a) => ({
        ...a,
        selected: false,
      })); // Deselect others
      const finalAddresses = [...updatedAddresses, newAddress];

      setSelectedAddress(newAddress); // Update global context with new default
      saveAddressesToStorage(finalAddresses); // Save to AsyncStorage

      showAlert(
        "Address Added",
        "Your new address has been added and set as default.",
        [{ text: "OK", style: "primary" }]
      );

      setLabel("");
      setAddress("");
      // Optionally reset marker to a central location or keep it
      // setMarker({ latitude: 5.56, longitude: -0.205 });
      // setRegion({ latitude: 5.56, longitude: -0.205, latitudeDelta: 0.01, longitudeDelta: 0.01 });

      return finalAddresses;
    });
  }, [
    label,
    address,
    marker,
    showAlert,
    setSelectedAddress,
    saveAddressesToStorage,
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.addressItem,
        { backgroundColor: item.selected ? primaryColor : cardBg },
        { borderColor: item.selected ? primaryColor : lightGreyBorder },
      ]}
      onPress={() => selectAddress(item.id)}
      onLongPress={() => removeAddress(item.id)}
    >
      <View style={styles.addressItemContent}>
        <Text
          style={[
            styles.addressLabel,
            { color: item.selected ? "#fff" : textColor },
          ]}
        >
          {item.label}
        </Text>
        <Text
          style={[
            styles.addressText,
            { color: item.selected ? lightPurple : darkGrey },
          ]}
        >
          {item.address}
        </Text>
        <Text
          style={[
            styles.coords,
            { color: item.selected ? lightPurple : "#888" },
          ]}
        >
          Lat: {item.latitude.toFixed(4)}, Lng: {item.longitude.toFixed(4)}
        </Text>
      </View>
      {item.selected && (
        <Icon
          name="checkmark-circle"
          size={24}
          color="#fff"
          style={styles.selectedIcon}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View
      style={[styles.fullScreenContainer, { backgroundColor: containerBg }]}
    >
      {/* Header */}
      <View style={[styles.header, { backgroundColor: cardBg }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color={textColor} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: textColor }]}>
          Manage Addresses
        </Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={[styles.empty, { color: darkGrey }]}>
              No addresses added yet.
            </Text>
            <Text style={[styles.emptyHint, { color: darkGrey }]}>
              Add your first address below!
            </Text>
          </View>
        }
        contentContainerStyle={styles.addressListContent}
        ListFooterComponent={
          <>
            <Text style={[styles.sectionTitle, { color: sectionHeaderColor }]}>
              ADD NEW ADDRESS
            </Text>
            <View
              style={[
                styles.card,
                { backgroundColor: cardBg, borderColor: lightGreyBorder },
              ]}
            >
              <Text style={[styles.mapHint, { color: darkGrey }]}>
                Tap on the map to set location for the new address:
              </Text>
              <MapView
                style={styles.map}
                region={region}
                onRegionChangeComplete={setRegion} // Keep map centered when marker changes
                onPress={(e) => {
                  setMarker(e.nativeEvent.coordinate);
                  setRegion({
                    ...e.nativeEvent.coordinate,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                  });
                }}
              >
                <Marker coordinate={marker} />
              </MapView>
              <Text
                style={[
                  styles.coords,
                  { color: textColor, textAlign: "center", marginBottom: 15 },
                ]}
              >
                Selected Point: Lat {marker.latitude.toFixed(4)}, Lng{" "}
                {marker.longitude.toFixed(4)}
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: inputBg,
                    borderColor: lightGreyBorder,
                    color: textColor,
                  },
                ]}
                placeholder="Label (e.g., Home, Work, Office)"
                placeholderTextColor={placeholderColor}
                value={label}
                onChangeText={setLabel}
              />
              <TextInput
                style={[
                  styles.input,
                  styles.addressInputMultiline,
                  {
                    backgroundColor: inputBg,
                    borderColor: lightGreyBorder,
                    color: textColor,
                  },
                ]}
                placeholder="Full Address (e.g., House No., Street Name, Area, City)"
                placeholderTextColor={placeholderColor}
                value={address}
                onChangeText={setAddress}
                multiline
                numberOfLines={3}
                textAlignVertical="top"
              />

              <TouchableOpacity
                style={[styles.addButton, { backgroundColor: primaryColor }]}
                onPress={addAddress}
              >
                <Text style={styles.addButtonText}>
                  Add New Address & Set as Default
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={[styles.info, { color: darkGrey }]}>
              <Text style={{ fontWeight: "bold" }}>Tap</Text> an address to set
              it as default.{"\n"}
              <Text style={{ fontWeight: "bold" }}>Long press</Text> an address
              to remove it.{"\n"}
              <Text style={{ fontWeight: "bold" }}>Tap the map</Text> above to
              select the exact coordinates for a new address.
            </Text>
          </>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingHorizontal: 15,
    paddingBottom: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#eee",
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
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  addressListContent: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 20, // Space before the add new address section
  },
  addressItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 18,
    borderRadius: 12, // Rounded corners for items
    borderWidth: 1,
    marginBottom: 10, // Space between items
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  addressItemContent: {
    flex: 1, // Take up available space
  },
  addressLabel: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 4,
  },
  addressText: {
    fontSize: 15,
    lineHeight: 22,
  },
  coords: {
    fontSize: 12,
    marginTop: 5,
    fontStyle: "italic",
  },
  selectedIcon: {
    marginLeft: 15,
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  empty: {
    fontSize: 16,
    marginBottom: 5,
  },
  emptyHint: {
    fontSize: 14,
    fontStyle: "italic",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 15,
    marginLeft: 5,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  card: {
    width: "100%",
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  mapHint: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    fontStyle: "italic",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  addressInputMultiline: {
    minHeight: 80,
    textAlignVertical: "top",
  },
  addButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  info: {
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
});
