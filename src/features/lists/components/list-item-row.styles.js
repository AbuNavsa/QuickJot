import styled from "styled-components";
import Ionicons from "react-native-vector-icons/Ionicons";

export const ListItem = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  shadow-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Name = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
  text-decoration: ${(props) =>
    props.status == "Completed" ? "line-through" : "none"};
`;

export const Info = styled.View`
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  flex-direction: row;
  align-items: center;
  opacity: ${(props) => (props.status == "Completed" ? "0.5" : "1")};
`;

export const Icon = styled.View`
  background-color: ${(props) => props.color};
  padding: ${(props) => props.theme.space[2]};
  width: 50px;
  height: 50px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const IconInitial = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 18px;
  color: ${(props) => props.theme.colors.cats.text};
`;

export const Section = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SharingIcon = styled(Ionicons)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  right: 0;
  bottom: 0;
  border-radius: 100px;
  position: absolute;
`;
