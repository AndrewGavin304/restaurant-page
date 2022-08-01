export const basicContainer = (name) => {
  const container = document.createElement("div");
  container.classList.add(`${name}-container`);
  container.setAttribute("id", `${name}-container`);
  return container;
}