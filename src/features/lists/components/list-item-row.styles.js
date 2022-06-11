import styled from "styled-components";

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
  padding: ${(props) => props.theme.space[3]};
  flex-direction: row;
  align-items: center;
  opacity: ${(props) => (props.status == "Completed" ? "0.5" : "1")};
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
