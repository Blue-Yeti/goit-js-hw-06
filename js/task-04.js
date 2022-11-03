const counterEl = document.querySelector('#counter')
let counterValue = 0

const incrementBtn = counterEl.querySelector('button[data-action="increment"]')
const decrementBtn = counterEl.querySelector('button[data-action="decrement"]')
const valueCounterEl = counterEl.querySelector('#value')

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueCounterEl.innerText = counterValue;

})

decrementBtn.addEventListener('click', () => {
    counterValue > 0 ? counterValue -= 1 : counterValue
    valueCounterEl.innerText = counterValue;
})