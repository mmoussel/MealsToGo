import React from "react";
import { Button, TextInput } from "react-native-paper";
import { ImageBackground } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/back.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
position :absolute;
width :100%;
height :100%
background-color : rgba(255,255,255,0.5)
`;
export const AccountContainer = styled.View`
  background-color: rgba(265, 266, 266, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.secondary,
})`
  padding: ${(props) => props.theme.space[2]};
`;
export const AuthInput = styled(TextInput)`
  width: 300px;
`;
export const Title = ({ children }) => <Text variant="header">{children}</Text>;

export const ErrorWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[2]};
`;
export const InputWrapper = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.space[2]};
`;
export const AnimationWrapper = styled.View`
  position: absolute;
  top: 6%;
  width: 100%;
  height: 30%;
  padding: ${(props) => props.theme.space[2]};
`;
