const allCategoriesEl = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${allCategoriesEl.length}`);

allCategoriesEl.forEach(function (el) {
  console.log(`Category: ${el.firstElementChild.textContent}`);

  console.log(`Elements: ${el.lastElementChild.querySelectorAll("li").length}`);
});
