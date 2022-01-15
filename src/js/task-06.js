const input = document.querySelector("input");
const borderColor = (event) => {
  return event.target.value.length === Number(input.dataset.length)
    ? input.setAttribute("class", "valid")
    : input.setAttribute("class", "invalid");
};
input.addEventListener("blur", borderColor);
