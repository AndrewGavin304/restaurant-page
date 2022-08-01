import "./sass/_style.scss";
import { initialize } from './modules/initialize';
import { clear } from './modules/clear';
import { home } from './modules/home';
import { contact } from './modules/contact';

initialize();

const navbar = document.getElementById("navbar-container");
const content = document.getElementById("content");

navbar.addEventListener('click', (event) => {
  if (event.target.id === 'navbar-container__button_home') {
    clear();
    content.appendChild(home());
  }

  if (event.target.id === 'navbar-container__button_menu') {
    clear();
  }

  if (event.target.id === 'navbar-container__button_contact') {
    clear();
    content.appendChild(contact())
  }

  if (event.target.id === 'navbar-container__button_about') {
    clear();
  }

})