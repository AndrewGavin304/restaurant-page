import { footer } from './footer';
import { navbar } from './navbar';
import { home } from './home';
import { heroImg } from './hero-image';
import { basicContainer } from './basic-container';

export const initialize = () => {
const content = document.getElementById("content")
content.appendChild(footer());
// content.appendChild(navbar());

const heroContainer = basicContainer("hero")

heroContainer.appendChild(heroImg(1, "About"));
heroContainer.appendChild(heroImg(2, "Menu"));
heroContainer.appendChild(heroImg(3, "Contact"));
content.appendChild(heroContainer);

content.appendChild(home());
}