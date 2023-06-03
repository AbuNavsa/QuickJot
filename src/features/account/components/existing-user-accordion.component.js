import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

const UserCard = styled.View`
  flex-direction: row;
  border: 2px lightgrey;
  border-radius: 15px;
  padding: ${(props) => props.theme.space[4]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

const Avatar = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.ui.unknown};
  border-radius: 100px;
`;

const UsernameText = styled.Text`
  align-self: center;
  font-size: ${(props) => props.theme.fontSizes.button};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const ExistingUserButton = ({ user = {} }) => {
  const { avatar = null, username = null, last_logged_in = null } = user;

  return (
    <UserCard>
      <Avatar />
      <UsernameText>{username}abunavsa</UsernameText>
    </UserCard>
  );
};
