// Create Button component here
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const NewUserButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  border-radius: 15px;
  border: 2px;
  border-color: black;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[4]};

  //add black to ui
`;

const NewUserIcon = styled(Ionicons).attrs({
  size: 24,
})`
  position: absolute;
  left: ${(props) => props.theme.space[4]};
`;

const ButtonText = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.button};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.text.primary};
`;

export const NewUserActionButton = ({ text, onPress }) => {
  return (
    <NewUserButton onPress={onPress}>
      {/* {if icon add icon code} */}
      <NewUserIcon name={"person-add-outline"} />
      <ButtonText>{text}</ButtonText>
    </NewUserButton>
  );
};
