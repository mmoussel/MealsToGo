import React, { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { AuthenticationContext } from "../../services/Authentication/Authentication.context";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigate";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
