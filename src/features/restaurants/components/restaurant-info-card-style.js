import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Info = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
export const Section = styled.View`
  flex-direction: row;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: ${(props) => props.theme.space[3]};
`;
export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantsCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

export const ResCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;
export const Icon = styled.Image`
width: 30px
height: 30px
`;
