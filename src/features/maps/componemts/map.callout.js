import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantCompactInfo } from "../../../components/restaurants/restaurants-compact-info";

export const RestaurantsCard = styled(Card)``;

export const MapCallout = ({ restaurant }) => {
  return <RestaurantCompactInfo restaurant={restaurant} isMapView />;
};
