const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')

// const arr = []

// for (const i of ingredients) {
//   const tempLi = document.createElement('li')
//   tempLi.innerText = i;
//   tempLi.classList.add('item')
//   arr.push(tempLi)
// }

// ingredients.forEach(el => {
//   const tempLi = document.createElement('li')
//   tempLi.innerText = el;
//   tempLi.classList.add('item')
//   arr.push(tempLi)
// })

const arr = ingredients.map(el => {
  const tempLi = document.createElement('li')
  tempLi.innerText = el;
  tempLi.classList.add('item')
  return tempLi
})

ulEl.append(...arr)

