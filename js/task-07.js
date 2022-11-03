const inputEl = document.querySelector('#font-size-control');
const abracadabra = document.querySelector('#text');

inputEl.addEventListener('input', () => {
    abracadabra.style.fontSize = inputEl.value + 'px'
})