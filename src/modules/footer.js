import { basicContainer } from "./basic-container";

export const footer = () => {
  const footerContainer = basicContainer("footer");

  const footerSpan = document.createElement("span");
  footerSpan.classList.add("footer-container__span");
  footerSpan.textContent = "123 Park Place, New York, NY";

  const toTop = document.createElement("div");
  toTop.classList.add("footer-container__to-top");
  toTop.setAttribute("id", "footer-container__to-top");

  footerContainer.appendChild(footerSpan)
  footerContainer.appendChild(toTop)
  return footerContainer;
}