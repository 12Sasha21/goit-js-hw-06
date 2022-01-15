const allCategoriesEl = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${allCategoriesEl.length}`);

for (const element of allCategoriesEl) {
    const titleElement = element.firstElementChild.textContent;
    console.log(`Category: ${titleElement}`);

    const numberElements = element.lastElementChild.querySelectorAll('li').length;
    console.log(`Elements: ${numberElements}`);
}
