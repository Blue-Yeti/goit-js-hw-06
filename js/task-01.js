const categoriesEl = document.querySelector('#categories')
const listOfCategories = categoriesEl.querySelectorAll('.item')

console.log(`Number of categories: ${listOfCategories.length}`);
console.log(' ');

listOfCategories.forEach(el => {
    const elTitle = el.querySelector('h2')
    const listOfSubcotegories = el.querySelectorAll('ul > li')

    console.log(`Category: ${elTitle.innerText}`);
    console.log(`Elements: ${listOfSubcotegories.length}`);
    console.log(' ');
})

