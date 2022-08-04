export const heroImg = (num, text) => {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("hero-container__img", `hero-container__img-${num}`);
  imgContainer.setAttribute("id", `hero-container__img-${num}`)

  const span = document.createElement("span");
  span.textContent = `${text}`;
  span.classList.add("hero-container__text", `hero-container__text-${num}`);
  imgContainer.appendChild(span);

  return imgContainer;
}