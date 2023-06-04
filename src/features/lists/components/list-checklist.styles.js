import styled from "styled-components";

export const ChecklistItem = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.bg.primary};
  shadow-color: ${(props) => props.theme.colors.bg.primary};
`;

export const ChecklistInfo = styled.View`
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  flex-direction: row;
  align-items: center;
  opacity: ${(props) => (props.status ? "0.5" : "1")};
`;

export const ChecklistName = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  // background-color: green;
  color: ${(props) => props.theme.colors.ui.primary};
  text-decoration: ${(props) => (props.status ? "line-through" : "none")};
`;

export const ChecklistIconContainer = styled.View``;

export const Divider = styled.View`
  height: 100%;
  width: 1.65px;
  background-color: ${(props) => props.theme.colors.ui.disabled};
`;

export const ChecklistIcon = styled.View`
  background-color: ${(props) => props.color};
  border-radius: 100px;
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

export const ChecklistMetadata = styled.View`
  padding-top: ${(props) => props.theme.space[1]};
  flex-direction: row;
`;

export const ChecklistDetails = styled.Text`
  color: ${(props) => props.theme.colors.ui.smallPrint};
  font-size: ${(props) => props.theme.fontSizes.caption};
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
