import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts as useRoboto,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";

import { theme } from "./src/infrastructure/theme";
import { ListsScreen } from "./src/features/lists/screens/lists.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const TAB_ICONS = (focused) => ({
  Lists: focused ? "document-text" : "document-text-outline",
  Groups: focused ? "people" : "people-outline",
  Settings: focused ? "settings" : "settings-outline",
});

const screenOptions = ({ route }) => {
  const iconName = TAB_ICONS[route.name];

  return {
    tabBarIcon: ({ focused, size, color }) => (
      <Ionicons
        name={TAB_ICONS(focused)[route.name]}
        size={size}
        color={color}
      />
    ),
  };
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const Groups = () => (
  <SafeArea>
    <Text>Groups</Text>
  </SafeArea>
);

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
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
              activeTintColor: "#000000",
              inactiveTintColor: "gray",
              showLabel: false,
            }}
          >
            <Tab.Screen name="Lists" component={ListsScreen} />
            <Tab.Screen name="Groups" component={Groups} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
