import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { Text } from "./src/components/typography/text.component";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SafeArea } from "./src/components/utility/safeArea";

const TAB_ICON = {
  Restaurants: (focused) => (focused ? "restaurant" : "restaurant-outline"),
  Settings: (focused) => (focused ? "settings" : "settings-outline"),
  Map: (focused) => (focused ? "map" : "map-outline"),
};

const SettingsScreen = () => {
  return (
    <SafeArea
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Settings!</Text>
    </SafeArea>
  );
};
const MapScreen = () => {
  return (
    <SafeArea
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Map!</Text>
    </SafeArea>
  );
};

const createScreenOptions = ({ route }) => {
  const iconName = (focused) => TAB_ICON[route.name](focused);
  return {
    tabBarIcon: ({ color, size, focused }) => (
      <Ionicons name={iconName(focused)} size={size} color={color} />
    ),
  };
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
