import { basicContainer } from "./basic-container";

export const footer = () => {
  const footerContainer = basicContainer("footer");
  footerContainer.textContent = "123 Park Place, New York, NY"
  return footerContainer;
}