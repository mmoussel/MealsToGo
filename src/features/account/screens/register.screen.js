import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { AuthenticationContext } from "../../../services/Authentication/Authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthInput,
  AuthButton,
  Title,
} from "../components/account.component.style";
import { Text } from "../../../components/typography/text.component";
export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { isLoading, onRegister, error, setError } = useContext(
    AuthenticationContext
  );

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Register</Title>
      <AccountContainer>
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
        />
        <Spacer size="large" />
        <AuthInput
          label="Password Repeated"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
        />
        {error && (
          <Spacer>
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
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
