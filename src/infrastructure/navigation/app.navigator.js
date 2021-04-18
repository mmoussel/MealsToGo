import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../components/utility/safeArea";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/maps/screens/map.screen";
import { AuthButton } from "../../features/account/components/account.component.style";
import { AuthenticationContext } from "../../services/Authentication/Authentication.context";

import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favouritet.context";

export const AppNavigator = () => {
  const TAB_ICON = {
    Restaurants: (focused) => (focused ? "restaurant" : "restaurant-outline"),
    Settings: (focused) => (focused ? "settings" : "settings-outline"),
    Map: (focused) => (focused ? "map" : "map-outline"),
  };

  const SettingsScreen = () => {
    const { onLogout } = useContext(AuthenticationContext);
    return (
      <SafeArea
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <AuthButton icon="logout" mode="contained" onPress={() => onLogout()}>
          LOGOUT
        </AuthButton>
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
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <MyTabs />
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
