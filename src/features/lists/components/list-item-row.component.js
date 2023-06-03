import React from "react";
import {
  ListItem,
  Name,
  Info,
  Icon,
  IconInitial,
  Section,
  SectionEnd,
  SharingIcon,
  SharingIconContainer,
} from "./list-item-row.styles";

import { Spacer } from "../../../components/spacer.component";
import Ionicons from "react-native-vector-icons/Ionicons";

export const ListItemRow = ({ listItem = {} }) => {
  const {
    name = "List Item",
    categoryColor = "#54D6FF",
    status = "Active",
    isLocked = false,
    isShared = false,
    isDeleted = false,
    sortOrder = "",
    LastUpdated = "",
  } = listItem;

  return (
    <ListItem>
      <Info status={status}>
        <Icon color={(props) => props.theme.colors.cats[categoryColor]}>
          <IconInitial>{name.charAt(0).toUpperCase()}</IconInitial>
          {isShared && (
            <SharingIconContainer>
              <SharingIcon name={"people-circle"} size={20} color={"grey"} />
            </SharingIconContainer>
          )}
        </Icon>
        <Spacer position="left" size="large" />
        <Name status={status}>{name}</Name>
        <Section>
          <SectionEnd>
            {isLocked && (
              <Ionicons name={"lock-closed"} size={18} color={"grey"} />
            )}
          </SectionEnd>
        </Section>
      </Info>
    </ListItem>
  );
};
