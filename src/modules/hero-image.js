export const heroImg = (num, text) => {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("hero-container__img", `hero-container__img-${num}`);
  imgContainer.setAttribute("id", `hero-container__img-${num}`)

  const span = document.createElement("span");
  span.textContent = `${text}`;
  span.classList.add("hero-container__text", `hero-container__text-${num}`);
  imgContainer.appendChild(span);

  if (num === 1) {
    const a = document.createElement('a');
    a.setAttribute('href', "https://github.com/AndrewGavin304/restaurant-page");
    a.setAttribute('target', "_blank");
    a.appendChild(imgContainer);
    return a;
  }

  else {
    return imgContainer
  };
}