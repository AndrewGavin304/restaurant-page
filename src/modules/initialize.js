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

backgroundContainer.appendChild(backgroundImg(1));
backgroundContainer.appendChild(backgroundImg(2));
backgroundContainer.appendChild(backgroundImg(3));
content.appendChild(backgroundContainer);

content.appendChild(home());
}