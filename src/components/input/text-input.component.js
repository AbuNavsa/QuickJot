import React from "react";
import styled from "styled-components";

import { TextInput } from "react-native-paper";
import { theme } from "../../infrastructure/theme";

export const InputField = styled.TextInput.attrs({
  underlineColorAndroid: "transparent",
})`
  font-size: ${(props) => props.theme.fontSizes.input};
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.input.textBox};
  border: ${(props) =>
    props.error ? `1.5px ${props.theme.colors.ui.error}` : "none"};
  padding-top: ${(props) => props.theme.space[3]};
  padding-bottom: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[5]};
  padding-right: ${(props) => props.theme.space[5]};
`;
