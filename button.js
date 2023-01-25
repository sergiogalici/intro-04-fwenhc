export const createButton = (title) => {
  const button = document.createElement("button")
  button.classList.add("tickets-container__ticket--button")
  button.innerText = title
  return button
}