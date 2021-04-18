import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

import { LocationContext } from "../../../services/location/location.context";
import { TouchableOpacity } from "react-native-gesture-handler";

const HeaderContainer = styled.View`
  flex-direction: row;
  background-color: white;
  align-items: center;
`;
const SearchContainer = styled.View`
  flex-grow:1
  padding: 15px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const FavBar = styled(AntDesign)`
  padding-left: 8px;
`;

export const Search = ({ favIsToggle, favOnToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <HeaderContainer>
      <TouchableOpacity onPress={favOnToggle}>
        <FavBar
          name={favIsToggle ? "heart" : "hearto"}
          size={34}
          color="tomato"
        />
      </TouchableOpacity>

      <SearchContainer>
        <Searchbar
          placeholder="Search for location"
          value={searchKeyword}
          onSubmitEditing={() => {
            search(searchKeyword);
          }}
          onChangeText={(text) => {
            setSearchKeyword(text);
          }}
        />
      </SearchContainer>
    </HeaderContainer>
  );
};
