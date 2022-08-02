import { footer } from './footer';
import { navbar } from './navbar';
import { home } from './home';
import { backgroundImg } from './background-image';
import { basicContainer } from './basic-container';

export const initialize = () => {
const content = document.getElementById("content")
content.appendChild(footer());
content.appendChild(navbar());

const backgroundContainer = basicContainer("background")

backgroundContainer.appendChild(backgroundImg(1, "Home"));
backgroundContainer.appendChild(backgroundImg(2, "Menu"));
backgroundContainer.appendChild(backgroundImg(3, "Contact"));
content.appendChild(backgroundContainer);

content.appendChild(home());
}