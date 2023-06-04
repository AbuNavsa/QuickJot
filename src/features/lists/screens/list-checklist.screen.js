import React from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components";
import { ChecklistItemRow } from "../../../../src/features/lists/components/list-checklist.component.js";

const Checklist = styled.FlatList.attrs({
  contentContainerStyle: {},
})``;

export const ListChecklistScreen = ({ route, navigation }) => {
  const { list } = route.params;

  console.log("😊😊😊", list);

  navigation.setOptions({
    title: list.name,
  });

  // Change all Touchable opacity components to a dynamic FlatList, see lists.screen.js
  return (
    <SafeArea style={{ backgroundColor: "#FFFFFF" }}>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow
          name="Apple Juice"
          color="lightBlue"
          status="complete"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow name="Milk" color="lightBlue" status={true} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow name="Chicken Fillet" color="red" status={true} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow name="Orange Juice" color="orange" status={true} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow name="Deodorant" color="orange" status={true} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow name="Toothpaste" color="pink" status={false} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow name="Vaseline" color="pink" status={false} />
      </TouchableOpacity>
    </SafeArea>
  );
};
