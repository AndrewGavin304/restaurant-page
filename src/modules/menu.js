import { basicContainer } from "./basic-container";
import { createCard } from "./createCard";
import { horizontalDivider } from "./horizontalDivider";
// import carbonaraImg from "../images/food/carbonara.jpg";
// import chickenAlfredoImg from "../images/food/chicken-alfredo.jpg";
// import lasagneImg from "../images/food/lasagne.jpg";
// import margheritaImg from "../images/food/margherita-pizza.jpg";
// import mushroomRisottoImg from "../images/food/mushroom-risotto.jpg";
// import pepperoniPizzaImg from "../images/food/pepperoni-pizza.jpg";
// import pestoChickenImg from "../images/food/pesto-chicken-pasta.jpg";
// import ravioliImg from "../images/food/ravioli.jpg";
// import spaghettiImg from "../images/food/spaghetti-w-meatballs.jpg";

// class menuObject {
//   constructor(name, price, img, description) {
//     this.img = img,
//     this.name = name,
//     this.price = price,
//     this.description = description
//   }
// }

class menuObject {
  constructor(name, price, description) {
    this.name = name,
    this.description = description,
    this.price = price
  }
}

let lasagne = new menuObject("Lasagne Bolognese", "16", "\u00a0");
let spaghetti = new menuObject("Spaghetti /w Meatballs", "16", "Meatballs made with beef, veal, and lamb");
let chickenAlfredo = new menuObject("Chicken Alfredo", "14", "\u00a0");
let carbonara = new menuObject("Carbonara", "15", "Cured pork, pecorino romano, eggs, and black pepper");
let mushroomRisotto = new menuObject("Mushroom Risotto", "18", "\u00a0");
let pestoChicken = new menuObject("Pesto Chicken Pasta", "16", "\u00a0");
let ravioli = new menuObject("Ravioli", "14", "Stuffed with mozzarella and parmesan, topped with vodka sauce");
let margherita = new menuObject("Margherita Pizza", "16", "\u00a0");
let pepperoniPizza = new menuObject("Pepperoni Pizza", "17", "\u00a0");
let tiramisu = new menuObject("Tiramisu", "8", "\u00a0");
let canestrelli = new menuObject("Canestrelli", "4", "Egg yolk cookies")
let cannoli = new menuObject("Cannoli", "12", "Comes in pairs")

let menuArray = [];
menuArray.push(lasagne, chickenAlfredo, spaghetti, carbonara, mushroomRisotto, pestoChicken, ravioli, margherita, pepperoniPizza);
menuArray.push(tiramisu, canestrelli, cannoli)


export const menu = () => {
  const menuContainer = basicContainer("menu");

  content.appendChild(horizontalDivider());

  menuArray.forEach((e) => {
    const menuItem = createCard(e, "menu-card");
    menuContainer.appendChild(menuItem);
  })

  return menuContainer;
}
