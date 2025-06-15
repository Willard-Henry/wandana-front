import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import TrendsScreen from "./screens/TrendsScreen";
import MeScreen from "./screens/MeScreen";
import WishlistScreen from "./screens/WishlistScreen";
import NotificationScreen from "./screens/NotificationScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import CartScreen from "./screens/CartScreen";

// ✅ Import the CartProvider
import { CartProvider } from "./context/CartContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Category":
              iconName = focused ? "list" : "list-outline";
              break;
            case "Trends":
              iconName = focused ? "trending-up" : "trending-up-outline";
              break;
            case "Cart":
              iconName = focused ? "cart" : "cart-outline";
              break;
            case "Me":
              iconName = focused ? "person" : "person-outline";
              break;
            default:
              iconName = "ellipse";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#7f00ff",
        tabBarInactiveTintColor: "#7F55B1",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Trends" component={TrendsScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Me" component={MeScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <CartProvider> {/* ✅ Wrap the whole app here */}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="Wishlist" component={WishlistScreen} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
            <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </CartProvider>
  );
}