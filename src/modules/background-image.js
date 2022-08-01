export const backgroundImg = (num) => {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("background-container__img", `background-container__img-${num}`);
  imgContainer.setAttribute("id", `background-container__img-${num}`)
  return imgContainer;
}