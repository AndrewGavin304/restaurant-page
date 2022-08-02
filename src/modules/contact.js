import { basicContainer } from "./basic-container";
import receptionImg from "../images/reception.jpg";
import managerImg from "../images/manager.jpg";
import chefImg from "../images/chef.jpg";

class contactObject {
  constructor(name, title, number, email, imgURL) {
    this.name = name;
    this.title = title;
    this.number = number,
    this.email = email,
    this.imgURL = imgURL
  }
}

let reception = new contactObject("Desk", "Reception", "1-334-359-0677", "FiamataInquiries@gmail.com", receptionImg)
let manager = new contactObject("Luciana Scutari", "Manager", "1-669-985-3966", "ScutariWay@gmail.com", "../images/manager.jpg")
let chef = new contactObject("Nico Lombardo", "Chef", "1-566-711-6236", "LombaroCreations@gmail.com", "../images/chef.jpg")

const createContactCard = (object) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card");

  const title = document.createElement("span");
  const name = document.createElement("span");
  const number = document.createElement("span");
  const email = document.createElement("span");
  const image = document.createElement("img");

  title.classList.add("card__title");
  name.classList.add("card__name");
  number.classList.add("card__number");
  email.classList.add("card__email");
  image.classList.add("card__img");

  title.textContent = object.title;
  name.textContent = object.name;
  number.textContent = object.number;
  email.textContent = object.email;
  image.src = object.imgURL;

  cardContainer.appendChild(title);
  cardContainer.appendChild(name);
  cardContainer.appendChild(number);
  cardContainer.appendChild(email);
  cardContainer.appendChild(image);

  return cardContainer;
}

export const contact = () => {
  const contactContainer = basicContainer("contact");

  contactContainer.appendChild(createContactCard(reception));

  return contactContainer;
}