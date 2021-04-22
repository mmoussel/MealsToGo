import React, { useContext } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { FadeView } from "../../../components/animation/animation.component";
import { FavouritesContext } from "../../../services/favourites/favouritet.context";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurant-info-card.component";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  const FavouritesList = styled(FlatList).attrs({
    contentContainerStyle: {
      backgroundColor: "white",
      padding: 16,
    },
  })``;
  return (
    <View>
      <FavouritesList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantsDetail", { restaurant: item })
              }
            >
              <FadeView>
                <RestaurantsInfoCard restaurant={item} />
              </FadeView>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};
