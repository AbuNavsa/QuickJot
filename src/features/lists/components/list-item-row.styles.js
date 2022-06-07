import styled from "styled-components";
import { Card } from "react-native-paper";

export const ListItem = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  shadow-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: 0;
  // border-bottom-width: 1px;
  // border-bottom-color: #e3e3e3;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.View`
  background-color: ${(props) => props.color};
  padding: ${(props) => props.theme.space[2]};
  width: 50px;
  height: 50px;
  border-radius: 100;
  align-items: center;
  justify-content: center;
`;

export const IconInitial = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.cats.text};
`;
