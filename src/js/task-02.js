const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("#ingredients");

const listOfIngredients = ingredients.map((ingredient) => {
  const itemLi = document.createElement('li');
  itemLi.textContent = ingredient;
  itemLi.classList.add('item');
  return itemLi;
});

ulEl.append(...listOfIngredients);
console.log(listOfIngredients);