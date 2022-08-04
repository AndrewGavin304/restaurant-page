export const horizontalDivider = () => {
  const div = document.createElement("div");

  div.classList.add("horizontal-divider");
  div.setAttribute("id", "horizontal-divider");

  return div;
}