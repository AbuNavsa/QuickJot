import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ListsScreen } from "../../features/lists/screens/lists.screen";
import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import { ListChecklistScreen } from "../../features/lists/screens/list-checklist.screen";

const ListStack = createStackNavigator();

export const ListsNavigator = () => {
  return (
    <ListStack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto",
        },
      }}
    >
      <ListStack.Screen name="Lists" component={ListsScreen} />
      <ListStack.Screen
        name="List-Checklist"
        component={ListChecklistScreen}
        options={{
          title: "Checklist",
        }}
      />
    </ListStack.Navigator>
  );
};
