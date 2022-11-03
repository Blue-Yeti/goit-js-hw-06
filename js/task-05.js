const inputEl = document.querySelector('#name-input');
const outputSpanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
    outputSpanEl.innerText = inputEl.value ? inputEl.value : 'Anonymous';

 })