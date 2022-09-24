import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../components/utility/safe-area.component";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ListsNavigator } from "./list.navigator";

export const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  const TAB_ICONS = (focused) => ({
    Lists: focused ? "checkbox" : "checkbox-outline",
    Notes: focused ? "document-text" : "document-text-outline",
    Friends: focused ? "people" : "people-outline",
    Settings: focused ? "settings" : "settings-outline",
  });

  const screenOptions = ({ route }) => {
    const iconName = TAB_ICONS[route.name];

    return {
      headerShown: false,
      tabBarIcon: ({ focused, size, color }) => (
        <Ionicons
          name={TAB_ICONS(focused)[route.name]}
          size={size}
          color={color}
        />
      ),
      // tabBarStyle: {
      //   borderTopWidth: 0,
      //   elevation: 0,
      // },
    };
  };
  const Settings = () => (
    <SafeArea>
      <Text>Settings</Text>
    </SafeArea>
  );

  const Friends = () => (
    <SafeArea>
      <Text>Friends</Text>
    </SafeArea>
  );
  const Notes = () => (
    <SafeArea>
      <Text>Notes</Text>
    </SafeArea>
  );

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: "#000000",
          inactiveTintColor: "gray",
          showLabel: false,
        }}
      >
        <Tab.Screen name="Lists" component={ListsNavigator} />
        <Tab.Screen name="Notes" component={Notes} />
        <Tab.Screen name="Friends" component={Friends} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
