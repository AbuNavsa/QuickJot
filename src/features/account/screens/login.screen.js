import React, { useState, useContext } from "react";
import { Text } from "../../../components/typography/text.component";
import { InputField } from "../../../components/input/text-input.component";
import { Spacer } from "../../../components/spacer.component";
import { ScrollView } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";

import {
  AccountPage,
  AccountContainer,
  AccountImageContainer,
  AccountImage,
  TextWithLines,
  MutedText,
  ExistingUserContainer,
  UserCardsContainer,
} from "../components/account.styles";
import { NewUserActionButton } from "../components/new-user-button.component";

import { ActionButton } from "../../../components/buttons/button.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = () => {
  const [username, setUsername] = useState(username);
  const { onOfflineLogin, error } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: colors.ui.quaternary }}
      >
        <AccountPage>
          <AccountImageContainer>
            <AccountImage
              source={require("../../../../assets/illustration-laptop-ideas.png")}
            />
          </AccountImageContainer>
          <AccountContainer>
            <Text variant="heading1">Login</Text>
            <Spacer size="xlarge">
              <InputField
                placeholder="Username"
                label="Username"
                value={username}
                textContentType="username"
                autoCapitalize="none"
                onChangeText={(u) => setUsername(u)}
                onSubmitEditing={() => onOfflineLogin(username)}
              />
            </Spacer>
            <Spacer size="xlarge">
              <ActionButton
                text={"Login"}
                onPress={() => onOfflineLogin(username)}
              />
            </Spacer>
            <Spacer size="large">
              <TextWithLines text={"or"} />
            </Spacer>
            <Spacer size="xlarge">
              <NewUserActionButton
                text={"Create a new user"}
                onPress={() => console.log("New User Pressed")}
              />
            </Spacer>
            <Spacer size="xxlarge">
              <ExistingUserContainer>
                <MutedText>Existing users</MutedText>
                {/* <Spacer size="xxlarge">
                  <UserCardsContainer>
                    <ExistingUserButton />
                  </UserCardsContainer>
                </Spacer> */}
              </ExistingUserContainer>
            </Spacer>
          </AccountContainer>
          {/* <ExistingUserAccordion /> */}
        </AccountPage>
      </ScrollView>
    </SafeArea>
  );
};
