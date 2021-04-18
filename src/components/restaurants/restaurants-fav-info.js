import React from "react";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";
import { Text } from "../typography/text.component";

const isAndroid = Platform.OS === "android";

export const RestaurantCompactInfo = ({ restaurant }) => {
  const CompactImage = styled.Image`
    border-radius: 30px;
    width: 120px;
    height: 100px;
  `;
  const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
  `;
  const TextName = styled(Text)`
    margin-top: 10px;
  `;

  return (
    <Item>
      <CompactImage source={{ uri: restaurant.photos[0] }} />
      <TextName>{restaurant.name}</TextName>
    </Item>
  );
};
