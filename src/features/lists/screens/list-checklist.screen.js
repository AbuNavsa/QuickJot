import React from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components";
import { ChecklistItemRow } from "../../../../src/features/lists/components/list-checklist.component.js";

const Checklist = styled.FlatList.attrs({
  contentContainerStyle: {},
})``;

export const ListChecklistScreen = ({ route }) => {
  const { list } = route.params;
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
        <ChecklistItemRow name="Apple Juice" color="lightBlue" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow name="Milk" color="lightBlue" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow name="Chicken Fillet" color="red" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow name="Orange Juice" color="orange" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow name="Deodorant" color="orange" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow name="Toothpaste" color="pink" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <ChecklistItemRow name="Vaseline" color="pink" />
      </TouchableOpacity>
    </SafeArea>
  );
};
