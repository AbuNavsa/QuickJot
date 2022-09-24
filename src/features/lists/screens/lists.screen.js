import React, { useContext } from "react";
import styled from "styled-components/native";
import { ActivityIndicator, TouchableOpacity } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { ListItemRow } from "../components/list-item-row.component";
import { Spacer } from "../../../components/spacer.component";

import { ListsContext } from "../../../services/lists/lists.context";
import { Search } from "../components/search.component";

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
  return (
    <SafeArea>
      <Search />
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
