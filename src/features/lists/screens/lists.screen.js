import React from "react";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { ListItemRow } from "../components/list-item-row.component";
import { Spacer } from "../../../components/spacer.component";

const MainList = styled.FlatList.attrs({
  contentContainerStyle: {},
})``;

export const ListsScreen = () => (
  <SafeArea>
    <MainList
      style={{ backgroundColor: "#FFFFFF" }}
      data={[
        { name: 1, categoryColor: "#54D6FF" },
        { name: 2, categoryColor: "#54D6FF" },
        { name: 3, categoryColor: "#54D6FF" },
        // { name: 4, categoryColor: "#54D6FF" },
        // { name: 5, categoryColor: "#54D6FF" },
        // { name: 6, categoryColor: "#54D6FF" },
        // { name: 7, categoryColor: "#54D6FF" },
        // { name: 8, categoryColor: "#54D6FF" },
        // { name: 9, categoryColor: "#54D6FF" },
        // { name: 10, categoryColor: "#54D6FF" },
        // { name: 11, categoryColor: "#54D6FF" },
        // { name: 12, categoryColor: "#54D6FF" },
      ]}
      renderItem={() => <ListItemRow />}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
