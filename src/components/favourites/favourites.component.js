import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favouritet.context";

const FavouriteIcon = styled(TouchableOpacity)`
  position: absolute;
  top:18px;
  right : 18px
  z-index :9
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(
    FavouritesContext
  );

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <FavouriteIcon
      onPress={() =>
        isFavourite
          ? removeFromFavourites(restaurant)
          : addToFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={34}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteIcon>
  );
};
