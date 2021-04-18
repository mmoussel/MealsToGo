import React from "react";
import styled from "styled-components/native";
import { WebView } from "react-native-webview";
import { Platform } from "react-native";
import { Text } from "../typography/text.component";

const isAndroid = Platform.OS === "android";

export const RestaurantCompactInfo = ({ restaurant, isMapView }) => {
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
  const CompactWebImage = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
  `;

  const Image = isAndroid && isMapView ? CompactWebImage : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};
