import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/maps/screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";

import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favouritet.context";

const TAB_ICON = {
  Restaurants: (focused) => (focused ? "restaurant" : "restaurant-outline"),
  Settings: (focused) => (focused ? "settings" : "settings-outline"),
  Map: (focused) => (focused ? "map" : "map-outline"),
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
export const AppNavigator = () => {
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
        <Tab.Screen name="Settings" component={SettingsNavigator} />
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
