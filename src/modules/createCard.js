export const createCard = (object, classname) => {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add(`${classname}`);

  for (const [key, value] of Object.entries(object)) {

    if (key == "img") {
      const img = document.createElement("img");
      img.classList.add(`${classname}__${key}`)
      img.src = value;
      cardContainer.appendChild(img)
    }

    else {
      const span = document.createElement("span");
      span.classList.add(`${classname}__${key}`, "span");
      span.textContent = value;
      cardContainer.appendChild(span)
    }
  }
  
  return cardContainer;
}
