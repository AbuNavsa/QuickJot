import React, { useLayoutEffect } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { ListsScreen } from "../../features/lists/screens/lists.screen";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { useTheme } from "react-native-paper";
import { ListChecklistScreen } from "../../features/lists/screens/list-checklist.screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import styled from "styled-components";

export const HeaderButton = styled(Ionicons)`
  padding: ${(props) => props.theme.space[2]};
`;

export const HeaderRight = styled.View`
  flex-direction: row;
  margin-right: ${(props) => props.theme.space[2]};
`;

const ListStack = createStackNavigator();

export const ListsNavigator = () => {
  return (
    <ListStack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto",
          color: "black",
          fontSize: 18,
        },
        headerTintColor: "#54D6FF",
      }}
    >
      <ListStack.Screen
        name="Lists"
        component={ListsScreen}
        options={{ title: "Lists" }}
      />
      <ListStack.Screen
        name="List-Checklist"
        component={ListChecklistScreen}
        options={{
          title: "Checklist",
          headerRight: () => (
            <HeaderRight>
              <HeaderButton onPress={() => alert("Search")} title="Info">
                <Ionicons name={"search"} size={24} color="#54D6FF" />
              </HeaderButton>
              <HeaderButton onPress={() => alert("Options")} title="Info">
                <Ionicons
                  name={"ellipsis-vertical"}
                  size={24}
                  color="#54D6FF"
                />
              </HeaderButton>
            </HeaderRight>
          ),
        }}
      />
    </ListStack.Navigator>
  );
};
