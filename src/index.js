import "./sass/_style.scss";
import { initialize } from './modules/initialize';
import { clear } from './modules/clear';
import { home } from './modules/home';
import { contact } from './modules/contact';

initialize();

const background = document.getElementById("background-container");
const content = document.getElementById("content");

background.addEventListener('click', (event) => {
  if (event.target.id === 'background-container__button_home') {
    clear();
    // content.appendChild(home());
  }

  if (event.target.id === 'background-container__img-1') {
    clear();
  }

  if (event.target.id === 'background-container__img-2') {
    clear();
  }

  if (event.target.id === 'background-container__img-3') {
    clear();
    content.appendChild(contact())
  }
})