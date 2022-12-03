import styled from "styled-components";

export const FavouriteListItem = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  shadow-color: ${(props) => props.theme.colors.bg.primary};
`;

export const FavouriteName = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const FavouriteInfo = styled.View`
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  flex-direction: row;
  align-items: center;
`;

export const FavouriteIcon = styled.View`
  border: 6px;
  border-color: ${(props) => props.color};
  padding: ${(props) => props.theme.space[2]};
  width: 50px;
  height: 50px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;
