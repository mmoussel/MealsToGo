import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safeArea";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.components";
import { FavouritesBar } from "../../../components/favourites/favourites.bar.component";
import { FavouritesContext } from "../../../services/favourites/favouritet.context";
import { FadeView } from "../../../components/animation/animation.component";

const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    backgroundColor: "white",
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 45%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const [isToggled, setIsToggled] = useState(false);

  const { favourites } = useContext(FavouritesContext);
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
        <Search
          favOnToggle={() => setIsToggled(!isToggled)}
          favIsToggle={isToggled}
        />
        {isToggled && (
          <FavouritesBar
            favourites={favourites}
            onNavigate={navigation.navigate}
          />
        )}

        <RestaurantsList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantsDetail", {
                    restaurant: item,
                  })
                }
              >
                <FadeView>
                  <RestaurantsInfoCard
                    restaurant={item}
                    onNavigate={navigation.navigate}
                  />
                </FadeView>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
