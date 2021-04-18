import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../../services/Authentication/Authentication.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthInput,
  AuthButton,
  Title,
  ErrorWrapper,
  InputWrapper,
} from "../components/account.component.style";
import { Text } from "../../../components/typography/text.component";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, onLogin, error, setError } = useContext(
    AuthenticationContext
  );

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Log in</Title>
      <AccountContainer>
        <InputWrapper>
          <AuthInput
            label="Email"
            value={email}
            //   textContentType="email-address"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <Spacer size="large" />
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
            onSubmitEditing={() => onLogin(email, password)}
          />
        </InputWrapper>
        {error && (
          <ErrorWrapper>
            <Text variant="error">{error}</Text>
          </ErrorWrapper>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="login"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton
          icon="keyboard-return"
          mode="contained"
          onPress={() => {
            navigation.goBack();
            setError(null);
          }}
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
