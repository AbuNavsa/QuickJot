import React, { useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { ListItemRow } from "../components/list-item-row.component";
import { Spacer } from "../../../components/spacer.component";

import { ListsContext } from "../../../services/lists/lists.context";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[1]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const MainList = styled.FlatList.attrs({
  contentContainerStyle: {},
})``;

export const ListsScreen = () => {
  const { isLoading, error, lists } = useContext(ListsContext);
  console.log(error);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar style={{ elevation: 5 }} />
      </SearchContainer>
      <MainList
        style={{ backgroundColor: "#FFFFFF" }}
        data={lists}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <ListItemRow listItem={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
