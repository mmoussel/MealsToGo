import React from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safeArea";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [expandedLunch, setExpandedLunch] = React.useState(false);
  const [expandedBreakfast, setExpandedBreakfast] = React.useState(false);
  const [expandedDinner, setExpandedDinner] = React.useState(false);
  const [expandedDrinks, setExpandedDrinks] = React.useState(false);
  const [expandedFood, setExpandedFood] = React.useState(false);

  const handlePressFood = () => setExpandedFood(!expandedFood);
  const handlePressLunch = () => setExpandedLunch(!expandedLunch);
  const handlePressBreakfast = () => setExpandedBreakfast(!expandedBreakfast);
  const handlePressDinner = () => setExpandedDinner(!expandedDinner);
  const handlePressDrinks = () => setExpandedDrinks(!expandedDrinks);

  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      {console.log(restaurant)}
      <ScrollView>
        <List.Section title="menu">
          <List.Accordion
            title="Food"
            left={(props) => <List.Icon {...props} icon="food" />}
            expanded={expandedFood}
            onPress={handlePressFood}
          >
            <List.Accordion
              title="breakfast"
              left={(props) => <List.Icon {...props} icon="bread-slice" />}
              expanded={expandedBreakfast}
              onPress={handlePressBreakfast}
            >
              <List.Item title="Eggs Benedict" />
              <List.Item title="Classic Breakfast" />
            </List.Accordion>
            <List.Accordion
              title="Lunch"
              left={(props) => <List.Icon {...props} icon="hamburger" />}
              expanded={expandedLunch}
              onPress={handlePressLunch}
            >
              <List.Item title="Burger w/ Fries" />
              <List.Item title="Steak Sandwich" />
              <List.Item title="Mushroom Soup" />
            </List.Accordion>
            <List.Accordion
              title="Dinner"
              left={(props) => <List.Icon {...props} icon="food-variant" />}
              expanded={expandedDinner}
              onPress={handlePressDinner}
            >
              <List.Item title="Spaghetti Bolognese" />
              <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
              <List.Item title="Steak Frites" />
            </List.Accordion>
          </List.Accordion>
          <List.Accordion
            title="drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={expandedDrinks}
            onPress={handlePressDrinks}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
