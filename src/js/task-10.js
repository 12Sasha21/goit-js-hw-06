const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

create.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getAmount() {
  const amount = document.querySelector("input").value;
  createBoxes(amount);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style = `width: ${size}px; height: ${size}px; 
    background-color: ${getRandomHexColor()}`;
    fragment.append(div);
  }
  boxes.append(fragment);
}