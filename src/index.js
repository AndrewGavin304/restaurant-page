import "./sass/app.scss";
import { initialize } from './modules/initialize';
import { clear } from './modules/clear';
import { contact } from './modules/contact';
import { menu } from './modules/menu';

initialize();

const hero = document.getElementById("hero-container");
const content = document.getElementById("content");

hero.addEventListener('click', (event) => {
  if (event.target.id === 'hero-container__img-1') {
  }

  if (event.target.id === 'hero-container__img-2') {
    clear();
    content.appendChild(menu());
    const element = document.getElementById("menu-container")
    element.scrollIntoView({behavior: "smooth", block: "start"})
  }

  if (event.target.id === 'hero-container__img-3') {
    clear();
    content.appendChild(contact())
    const element = document.getElementById("contact-container")
    element.scrollIntoView({behavior: "smooth", block: "start"})
  }
})