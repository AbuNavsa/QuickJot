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

const MainList = styled.FlatList.attrs({
  contentContainerStyle: {},
})``;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const ListsScreen = ({ navigation }) => {
  const { isLoading, error, lists } = useContext(ListsContext);
  const [displaySearchbar, setDisplaySearchbar] = useState(false);

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
      {displaySearchbar && <Search />}
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
              <Spacer position="bottom" size="large">
                <ListItemRow listItem={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
      {isLoading && (
        <LoadingContainer>
          <Loading
            size={50}
            animating={true}
            color={(props) => props.theme.colors.brand.primary}
          />
        </LoadingContainer>
      )}
    </SafeArea>
  );
};
