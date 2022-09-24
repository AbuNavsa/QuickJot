import React from "react";
import { Checkbox } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer.component";
import {
  ChecklistItem,
  ChecklistInfo,
  ChecklistName,
  ChecklistIconContainer,
  Divider,
  ChecklistIcon,
  ChecklistMetadata,
  ChecklistDetails,
  Section,
  SectionEnd,
} from "./list-checklist.styles";

export const ChecklistItemRow = ({ name, color }) => {
  return (
    <ChecklistItem>
      <ChecklistInfo>
        <ChecklistIconContainer>
          <ChecklistIcon color={(props) => props.theme.colors.cats[color]} />
        </ChecklistIconContainer>
        <Spacer position="left" size="large" />
        <Divider />
        <Spacer position="left" size="large">
          <ChecklistName>{name}</ChecklistName>
          <ChecklistMetadata>
            <ChecklistDetails>Qty: 2</ChecklistDetails>
            <Spacer position="left" size="large" />
            <ChecklistDetails>1.99</ChecklistDetails>
          </ChecklistMetadata>
        </Spacer>
        <Section>
          <SectionEnd>
            <Checkbox
              color="black"
              uncheckedColor="#AAAAAA"
              status="unchecked"
              onPress={() => {}}
            />
          </SectionEnd>
        </Section>
      </ChecklistInfo>
    </ChecklistItem>
  );
};