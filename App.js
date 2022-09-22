import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import { theme } from "./src/infrastructure/theme";
import { ListsContextProvider } from "./src/services/lists/lists.context";
import { Navigation } from "./src/infrastructure/navigation";

const Tab = createBottomTabNavigator();

const TAB_ICONS = (focused) => ({
  Lists: focused ? "checkbox" : "checkbox-outline",
  Notes: focused ? "document-text" : "document-text-outline",
  Friends: focused ? "people" : "people-outline",
  Settings: focused ? "settings" : "settings-outline",
});

export default function App() {
  let [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });

  if (!robotoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ListsContextProvider>
          <Navigation />
        </ListsContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
