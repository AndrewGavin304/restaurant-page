import { basicContainer } from "./basic-container";

export const navbar = () => {
  const navbarContainer = basicContainer("navbar");

  const createMenuButton = (name) => {
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const menuButton = document.createElement("button");
    menuButton.textContent = `${capitalizedName}`;
    menuButton.classList.add ("navbar-container__button", "btn");
    menuButton.setAttribute("id", `navbar-container__button_${name}`)
    navbarContainer.appendChild(menuButton);
  }

  createMenuButton("home");
  createMenuButton("menu");
  createMenuButton("contact");

  return navbarContainer;
}