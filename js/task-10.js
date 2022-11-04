function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesDivEl = document.querySelector('#boxes');
const controlsEl = document.querySelector('#controls');
const inputEl = document.querySelector('input[type="number"]')
const createBtnEl = document.querySelector('button[data-create]')
const deleteBtnEl = document.querySelector('button[data-destroy]')
console.log(createBtnEl,deleteBtnEl,inputEl);


createBtnEl.addEventListener('click', () => { 
  const x = Number.parseInt(inputEl.value)
  createBoxes(x);  
})

deleteBtnEl.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  [...boxesDivEl.children].forEach(el => {
    console.log(el);
    
    el.remove()
  })
}

function createBoxes(amount) {
  let elements = []
  let i = 0;
  let elWidth = 30
  let elHeight = 30
  
  while (i < amount) {
    elements.push(document.createElement('div'))
    elements[i].style.width = elWidth + 'px';
    elements[i].style.height = elHeight + 'px';
    elements[i].style.backgroundColor = getRandomHexColor();
    console.log(elements[i].style.color);
    

    elWidth += 2;
    elHeight += 2;
    i += 1;

  }
  boxesDivEl.append(...elements)
}








// function incrementString(strng) {
//   // return incrementedString
//   let counter = 0 
//   for (let i = strng.length - 1; i !== -1; i -= 1) {
//     if (Number.isInteger(Number(strng[i]))) {
//       counter += 1
//     } else{
//       break
//     }
//   }

//   const letters = strng.slice(0, strng.length - counter)
//   const numbers = strng.slice(strng.length - counter).split('')
//   console.log('letters', letters);
//   console.log('numbers',numbers);

  
//   if (!numbers[0] && numbers.length === 0) {
//     return strng + 1;
//   }

//   //sort numbers
//   let zeroes = []
//   let numbersSorted = []
//   for (const i of numbers) {
//     if (i === '0') {
//       zeroes.push(i)
//     } else {
//       numbersSorted.push(i)
//     }
//   }

//   console.log('zeroes',zeroes);
//   console.log('numbersSorted',numbersSorted);


//   const ifEvery9 = numbersSorted.every(el => el === '9')
//   if (ifEvery9 && zeroes.length) {
//     zeroes.pop()
//   }

//   numbersSorted = Number(numbersSorted.join(''))+1
//   console.log('after JOIN', numbersSorted);
  
//   return [...letters, ...zeroes, numbersSorted].join('')
// }


// console.log(incrementString('foo'));
// console.log(incrementString('foo5fafa6'));
// console.log(incrementString('foo23'));
// console.log(incrementString('foo0042'));
// console.log(incrementString('foo9'));
// console.log(incrementString('foo099'));




