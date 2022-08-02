export const clear = () => {
  removeContainer("contact-container");
  removeContainer("about-container");
  removeContainer("menu-container");
}

const removeContainer = (name) => {
  if (document.getElementById(`${name}`)) {
    const container = document.getElementById(`${name}`);
    container.parentNode.removeChild(container);
  }
}