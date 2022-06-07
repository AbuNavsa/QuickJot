import React from "react";
import {
  ListItem,
  ListItemCover,
  Title,
  Info,
  Icon,
  IconInitial,
} from "./list-item-row.styles";

import { Spacer } from "../../../components/spacer.component";

export const ListItemRow = ({ listItem = {} }) => {
  const {
    name = "Shopping",
    categoryColor = "#54D6FF",
    isComplete = false,
  } = listItem;

  return (
    <ListItem elevation={0}>
      <Info>
        <Icon color={categoryColor}>
          <IconInitial>{name.charAt(0).toUpperCase()}</IconInitial>
        </Icon>
        <Spacer position="left" size="large" />
        <Title>{name}</Title>
      </Info>
    </ListItem>
  );
};
