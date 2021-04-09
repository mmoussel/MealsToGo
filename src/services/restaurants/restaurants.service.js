import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("location not found");
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({ results = [] }) => {
  const mapedresults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(() => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      ID: restaurant.userRatingsTotal,
      isOpening: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mapedresults);
};

// restaurantsRequest()
//   .then(restaurantTransform)
//   .then((transformedRespons) => {
//     console.log(transformedRespons);
//   });

// restaurantsRequest().catch((err) => {
//   console.log("error", err);
// });
