import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => (
  <SettingsStack.Navigator
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
    headerMode="screen"
  >
    <SettingsStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ header: () => null }}
    />
    <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    <SettingsStack.Screen name="Camera" component={CameraScreen} />
  </SettingsStack.Navigator>
);
