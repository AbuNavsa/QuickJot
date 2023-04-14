import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { ListsContext } from "../../../services/lists/lists.context";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SearchBar = styled(Searchbar)`
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Search = () => {
  const { keyword, search } = useContext(ListsContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchContainer>
      <SearchBar
        placeholder="Search lists"
        value={searchKeyword}
        inputStyle={{ fontSize: 16 }} // Change to props
        onIconPress={() => {
          search(searchKeyword);
        }}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
          // search(text);
        }}
      />
    </SearchContainer>
  );
};
