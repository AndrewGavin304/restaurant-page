import { basicContainer } from "./basic-container"

export const home = () => {
  const homeContainer = basicContainer("home");

  homeContainer.appendChild(restaurantName());
  
  return homeContainer
}

const restaurantName = () => {
  const restaurantNameContainer = basicContainer("restaurant-name");
  
  const nameText = document.createElement("span");
  nameText.textContent = "Fiamata";
  restaurantNameContainer.appendChild(nameText);

  return restaurantNameContainer;
}