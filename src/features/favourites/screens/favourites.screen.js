import React from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "styled-components";
import { FavouritesRow } from "../components/favourites-row.component";

import { FAB } from "react-native-paper";

const AddButton = styled(FAB)`
  position: absolute;
  z-index: 99;
  border: none;
  bottom: ${(props) => props.theme.space[3]};
  right: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;
<AddButton
  icon="plus"
  // animated={true}
  color="white"
  onPress={() => console.log("Pressed")}
/>;

export const FavouritesScreen = () => {
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
        <FavouritesRow name="Milk" color="lightBlue" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <FavouritesRow name="Toast" color="lightBlue" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <FavouritesRow name="Orange Juice" color="green" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <FavouritesRow name="Toothpaste" color="pink" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <FavouritesRow name="Deodorant Sticks" color="pink" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <FavouritesRow name="Apple Juice" color="orange" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <FavouritesRow name="Chicken Fillet" color="orange" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("onPress");
        }}
        onLongPress={() => {
          alert("onLongPress");
        }}
      >
        <FavouritesRow name="Cheese and Crackers" color="red" />
      </TouchableOpacity>
    </SafeArea>
  );
};
