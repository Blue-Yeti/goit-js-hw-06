function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body> через 
// инлайн стиль при клике на button.change - color 
// и выводит значение цвета в span.color.

const bodyEl = document.querySelector('body');
const changeColorBtnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', (e) => {
  const hexValue = getRandomHexColor();
  bodyEl.style.backgroundColor = hexValue
  spanEl.innerText = hexValue
  // e.preventDefault();
}) 


