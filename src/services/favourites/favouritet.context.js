import React, { createContext, useEffect, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../Authentication/Authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  const addToFavourites = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const removeFromFavourites = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };
  useEffect(() => {
    loadFavourites(user.uid);
  }, [user]);
  useEffect(() => {
    saveFavourites(favourites, user.uid);
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, removeFromFavourites, addToFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
