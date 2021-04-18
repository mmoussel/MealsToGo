import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { RestaurantCompactInfo } from "../restaurants/restaurants-compact-info";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavWrapper = styled.View`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  const [visible, setVisible] = React.useState(false);
  if (!favourites.length) {
    return <Text>No Favourites Yet</Text>;
  }
  return (
    <FavWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant, index) => {
          return (
            <Spacer position="left" size="large" key={index}>
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantsDetail", { restaurant })}
              >
                <RestaurantCompactInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavWrapper>
  );
};
