import React from "react";
import styled from "styled-components";

import { Text } from "../../../components/typography/text.component";

export const AccountPage = styled.View`
  flex: 1;
  align-items: center;
`;

export const AccountImageContainer = styled.View`
  margin-top: ${(props) => props.theme.space[6]};
  padding: ${(props) => props.theme.space[0]};
  height: 275px;
  width: 95%;
  justify-content: center;
  align-items: center;

  /* margin-top: ${(props) => props.theme.space[6]}; */
`;

export const AccountImage = styled.Image`
  width: 75%;
  flex: 1;
  resize-mode: contain;
`;

export const AccountContainer = styled.View`
  width: 100%;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  padding-right: ${(props) => props.theme.space[7]};
  padding-left: ${(props) => props.theme.space[7]};
  /* margin-top: ${(props) => props.theme.space[6]}; */
`;

export const ExistingUserContainer = styled.View`
  align-items: center;
  padding-top: ${(props) => props.theme.space[7]};
  padding-bottom: ${(props) => props.theme.space[3]};
`;

export const UserCardsContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

// Styled Divider text with lines next to it

const DividerLine = styled.View`
  height: 1.25px;
  flex: 1;
  background-color: ${(props) => props.theme.colors.ui.muted};
`;

const DividerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 5px;
`;

export const MutedText = styled.Text`
  margin-horizontal: 30px;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text.muted};
`;

export const TextWithLines = ({ text }) => {
  return (
    <DividerContainer>
      <DividerLine />
      <MutedText>{text}</MutedText>
      <DividerLine />
    </DividerContainer>
  );
};

//
