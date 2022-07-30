const createHomepage = () => {
  const content = document.getElementById("content");

  const backgroundContainer = document.createElement("div")
  backgroundContainer.classList.add("background-container")

  backgroundContainer.appendChild(backgroundImg(1));
  backgroundContainer.appendChild(backgroundImg(2));
  backgroundContainer.appendChild(backgroundImg(3));

  content.appendChild(backgroundContainer);

  content.appendChild(restaurantName());
}

const backgroundImg = (num) => {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("background-container__img", `background-container__img-${num}`);
  imgContainer.setAttribute("id", `background-container__img-${num}`)
  return imgContainer;
}

const restaurantName = () => {
  const nameContainer = document.createElement("div");
  nameContainer.classList.add("name-container_homepage");
  nameContainer.setAttribute("id", "name-container");
  
  const nameText = document.createElement("span");
  nameText.textContent = "Fiamata";
  nameContainer.appendChild(nameText);
  return nameContainer;
}

export default createHomepage;