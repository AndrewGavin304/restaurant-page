import { basicContainer } from "./basic-container";
import { createCard } from "./createCard";
import receptionImg from "../images/reception.jpg";
import managerImg from "../images/manager.jpg";
import chefImg from "../images/chef.jpg";
import ownerImg from "../images/owner.jpg";

class contactObject {
  constructor(name, title, number, email, img) {
    this.img = img,
    this.name = name,
    this.title = title,
    this.number = number,
    this.email = email
  }
}

let reception = new contactObject("Reception Desk", "!!hideme!!", "1-334-359-0677", "FiamataInquiries@gmail.com", receptionImg)
let owner = new contactObject("Anselmo Endrizzi", "Owner", "1-458-238-3927", "EndrizziFiamata@gmail.com", ownerImg)
let manager = new contactObject("Luciana Scutari", "Manager", "1-669-985-3966", "ScutariWay@gmail.com", managerImg)
let chef = new contactObject("Nico Lombardo", "Chef", "1-566-711-6236", "LombaroCreations@gmail.com", chefImg)

export const contact = () => {
  const contactContainer = basicContainer("contact");

  const contactHeader = document.createElement("span");

  contactContainer.appendChild(createCard(reception, `contact-card`));
  contactContainer.appendChild(createCard(owner, `contact-card`));
  contactContainer.appendChild(createCard(manager, `contact-card`));
  contactContainer.appendChild(createCard(chef, `contact-card`));

  return contactContainer;
}