import React from "react";
import * as firebase from "firebase";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/Authentication/Authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyBJnTaMb7m8UiWbzRXfBrtK1m6E3BaupgI",
  authDomain: "mealstogo-a802e.firebaseapp.com",
  projectId: "mealstogo-a802e",
  storageBucket: "mealstogo-a802e.appspot.com",
  messagingSenderId: "1010096300",
  appId: "1:1010096300:web:f9d47c739f12a1205e6709",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  const [bangerLoaded] = useFonts({
    Bangers_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded || !bangerLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
