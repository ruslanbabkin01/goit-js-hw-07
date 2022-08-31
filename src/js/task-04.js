// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

let amounOfValue = document.getElementById('value')

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);

function onDecrementClick() {
   console.log(counterValue);
   counterValue--;
   amounOfValue.textContent = counterValue;
}

function onIncrementClick() {
   console.log(counterValue);
   counterValue++;
   amounOfValue.textContent = counterValue;
}