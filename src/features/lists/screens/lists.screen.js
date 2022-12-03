import React, { useContext, useLayoutEffect, useState } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, TouchableOpacity, Button } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { ListItemRow } from "../components/list-item-row.component";
import { Spacer } from "../../../components/spacer.component";

import { ListsContext } from "../../../services/lists/lists.context";
import { Search } from "../components/search.component";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  HeaderRight,
  HeaderButton,
} from "../../../infrastructure/navigation/list.navigator";

import Collapsible from "react-native-collapsible";
import Animated, { ZoomInEasyUp, ZoomOutUp } from "react-native-reanimated";
import { FAB } from "react-native-paper";

const MainList = styled.FlatList.attrs({
  contentContainerStyle: {},
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const SearchContainer = styled(Collapsible)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const AddButton = styled(FAB)`
  position: absolute;
  z-index: 99;
  border: none;
  bottom: ${(props) => props.theme.space[3]};
  right: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const ListsScreen = ({ navigation }) => {
  const { isLoading, error, lists } = useContext(ListsContext);
  const [displaySearchbar, setDisplaySearchbar] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight>
          <HeaderButton
            onPress={() => {
              setDisplaySearchbar(!displaySearchbar);
            }}
            title="Search"
          >
            <Ionicons name={"search"} size={24} color="#54D6FF" />
          </HeaderButton>
          <HeaderButton onPress={() => alert("Options")} title="Options">
            <Ionicons name={"ellipsis-vertical"} size={24} color="#54D6FF" />
          </HeaderButton>
        </HeaderRight>
      ),
    });
  }, [navigation, displaySearchbar]);

  return (
    <SafeArea>
      {/* Floating Button */}

      <AddButton
        icon="plus"
        // animated={true}
        color="white"
        onPress={() => console.log("Pressed")}
      />

      {/* Search Function */}

      <SearchContainer collapsed={displaySearchbar}>
        {!displaySearchbar && (
          <Animated.View
            entering={ZoomInEasyUp.duration(300)}
            exiting={ZoomOutUp.duration(300)}
          >
            <Search />
          </Animated.View>
        )}
      </SearchContainer>

      {/* Main List */}

      <MainList
        style={{ backgroundColor: "#FFFFFF" }}
        data={lists}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("List-Checklist", { list: item });
              }}
            >
              <ListItemRow listItem={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} />
        </LoadingContainer>
      )}
    </SafeArea>
  );
};
