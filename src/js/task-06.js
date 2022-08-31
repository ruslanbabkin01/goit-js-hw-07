// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const input = document.getElementById('validation-input');
const totalSymbol = document.querySelector('input[data-length = "6"]');
const totalLength = Number(totalSymbol.dataset.length);

console.log(totalLength);

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
   let totalLengthInput = event.currentTarget.value.length;
   console.log(totalLengthInput);

   if (totalLength === totalLengthInput) {
      input.classList.add('valid');
   } else {
      input.classList.add('invalid')
   }
}