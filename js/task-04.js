const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value')

let counterValue = 0;

btnMinus.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.innerHTML = counterValue;
})

btnPlus.addEventListener('click', () => {
    counterValue += 1;
    valueEl.innerHTML = counterValue;
});