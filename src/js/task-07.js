const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener('input', function () {
  span.style.fontSize = input.value + 'px';
});