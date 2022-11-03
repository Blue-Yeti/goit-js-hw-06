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