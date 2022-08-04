import { basicContainer } from "./basic-container";
import { createCard } from "./createCard";
import carbonaraImg from "../images/food/carbonara.jpg";
import chickenAlfredoImg from "../images/food/chicken-alfredo.jpg";
import lasagneImg from "../images/food/lasagne.jpg";
import margheritaImg from "../images/food/margherita-pizza.jpg";
import mushroomRisottoImg from "../images/food/mushroom-risotto.jpg";
import pepperoniPizzaImg from "../images/food/pepperoni-pizza.jpg";
import pestoChickenImg from "../images/food/pesto-chicken-pasta.jpg";
import ravioliImg from "../images/food/ravioli.jpg";
import spaghettiImg from "../images/food/spaghetti-w-meatballs.jpg";

class menuObject {
  constructor(itemName, price, img, description) {
    this.img = img,
    this.itemName = itemName,
    this.price = price,
    this.description = description
  }
}

let lasagne = new menuObject("Lasagne Bolognese", "16", lasagneImg, "A traditionally rich lasagne, baked in single servings");
let chickenAlfredo = new menuObject("Chicken Alfredo", "14", chickenAlfredoImg, "A chicken alfredo, made with a sauce of cream, butter, and parmesan");
let spaghetti = new menuObject("Spaghetti with Meatballs", "16", spaghettiImg, "Spaghetti with savory meatballs, topped with our marinara");
let carbonara = new menuObject("Carbonara", "15", carbonaraImg, "Cured pork, pecorino romano, eggs, and black pepper combine in this classic fare");
let mushroomRisotto = new menuObject("Mushroom Risotto", "18", mushroomRisottoImg, "Arborio rice, mushrooms, and from-scratch-broth, reduced to perfection");
let pestoChicken = new menuObject("Pesto Chicken Pasta", "16", pestoChickenImg, "In-house pesto and succulent chicken, over a bed of pasta, with a touch of parmesan");
let ravioli = new menuObject("Ravioli", "14", ravioliImg, "Ravioli stuffed with mozarella and parmesan, topped with our light vodka sauce");
let margherita = new menuObject("Margherita Pizza", "16", margheritaImg, "Traditional margherita pizza with basil and mozarella");
let pepperoniPizza = new menuObject("Pepperoni Pizza", "17", pepperoniPizzaImg, "A crowd-pleasing pepperoni pizza with mozarella and a lightly spiced marinara");

let menuArray = [];
menuArray.push(lasagne, chickenAlfredo, spaghetti, carbonara, mushroomRisotto, pestoChicken, ravioli, margherita, pepperoniPizza);


export const menu = () => {
  const menuContainer = basicContainer("menu");

  menuArray.forEach((e) => {
    const menuItem = createCard(e, "menu-card");
    menuContainer.appendChild(menuItem);
  })

  return menuContainer;
}
