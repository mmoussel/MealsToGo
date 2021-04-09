import React, { useContext } from "react";
import { FlatList, View } from "react-native";

import styled from "styled-components/native";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safeArea";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import { Search } from "../components/search.components";

const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 45%;
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <ActivityIndicator
              animating={true}
              color={Colors.red800}
              size={"large"}
            />
          </LoadingContainer>
        )}
        <Search />
        <RestaurantsList
          data={restaurants}
          renderItem={({ item }) => <RestaurantsInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
