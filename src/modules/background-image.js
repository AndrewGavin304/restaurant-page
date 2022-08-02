export const backgroundImg = (num, text) => {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("background-container__img", `background-container__img-${num}`);
  imgContainer.setAttribute("id", `background-container__img-${num}`)

  const span = document.createElement("span");
  span.textContent = `${text}`;
  span.classList.add("background-container__text", `background-container__text-${num}`);
  imgContainer.appendChild(span);

  return imgContainer;
}