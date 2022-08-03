import { basicContainer } from "./basic-container";
import { createCard } from "./createCard";
import receptionImg from "../images/reception.jpg";
import managerImg from "../images/manager.jpg";
import chefImg from "../images/chef.jpg";

class contactObject {
  constructor(name, title, number, email, img) {
    this.name = name;
    this.title = title;
    this.number = number,
    this.email = email,
    this.img = img
  }
}

let reception = new contactObject("Desk", "Reception", "1-334-359-0677", "FiamataInquiries@gmail.com", receptionImg)
let manager = new contactObject("Luciana Scutari", "Manager", "1-669-985-3966", "ScutariWay@gmail.com", "../images/manager.jpg")
let chef = new contactObject("Nico Lombardo", "Chef", "1-566-711-6236", "LombaroCreations@gmail.com", "../images/chef.jpg")

export const contact = () => {
  const contactContainer = basicContainer("contact");

  contactContainer.appendChild(createCard(reception, "contact-card"));

  return contactContainer;
}