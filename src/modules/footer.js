import { basicContainer } from "./basic-container";

export const footer = () => {
  const footerContainer = basicContainer("footer");
  footerContainer.textContent = "123 Park Place, New York, NY";

  const toTop = document.createElement("div");
  toTop.className = "footer-container__to-top";
  toTop.setAttribute("id", "footer-container__to-top");
  footerContainer.appendChild(toTop)
  return footerContainer;
}