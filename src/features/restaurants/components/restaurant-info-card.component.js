/* eslint-disable prettier/prettier */
import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantsCard,
  Icon,
  Info,
  Section,
  SectionEnd,
  Rating,
  ResCardCover,
} from "./restaurant-info-card-style";

export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restautant",
    icon = "https://visitskye.scot/images/restaurants-icon-larger_2x.png?crc=366233570",
    photos = [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    ],
    address = "some place 100 street",
    isOpening = true,
    rating = 4.3,
    isClosedTemporarily = true,
    ID,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <>
      <RestaurantsCard>
        <ResCardCover source={{ uri: photos[0] }} />
        <Info>
          <Text variant={"label"}>{name}</Text>
          <Section>
            <Rating>
              {ratingArray.map((_, i) => (
                <SvgXml
                  width="20"
                  height="20"
                  xml={star}
                  key={`star-${ID}-${i}`}
                />
              ))}
            </Rating>
            <SectionEnd>
              {isClosedTemporarily && <Text variant={"error"}>IS CLOSED</Text>}
              <Spacer position={"left"} size={"large"} />
              {isOpening && <SvgXml width="20" height="20" xml={open} />}
              <Spacer position={"left"} size={"large"} />
              <Icon source={{ uri: icon }} />
            </SectionEnd>
          </Section>
          <Text variant={"caption"}>{address}</Text>
        </Info>
      </RestaurantsCard>
    </>
  );
};
