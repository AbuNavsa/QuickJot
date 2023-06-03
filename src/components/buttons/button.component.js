// Create Button component here
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  background-color: ${(props) => props.theme.colors.brand.primary};
  border-radius: 15px;
  border: none;
  padding: ${(props) => props.theme.space[4]};
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.button};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: white;
`;

export const ActionButton = ({ text, onPress }) => {
  return (
    <Button onPress={onPress}>
      {/* {if icon add icon code} */}
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};
