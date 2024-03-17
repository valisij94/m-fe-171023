// Подопытные данные

// Массив массивов
const strangers = [
  ['Gimli', 'Axe', 'Dwarwes', 298],
  ['Legolas', 'Longbow', 'Elves', 329 ],
  ['Aragorn', 'Sword', 'People', 89],
  ['Boromir', 'Sword', 'People', 35]
];

/*
1. Ставим обработчик на событие загрузки документа (`DOMContentLoaded`). Нужно вывести в консоль сообщение с текстом `Hello World!`.
*/
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('Hello World', event);
});

/*
2. Работаем с кнопкой `button#testButton`. Добавляем на нее обработчик клика. Нужно чтобы при клике на кнопку, в консоль выводилось сообщение `Clicked!`.
*/


const btn = document.querySelector('#testButton');
btn.addEventListener('click', () => {
  console.log('Clicked!');
});

/* 3. Реализовать счетчик кликов на кнопку. Нужно чтобы при клике на кнопку, в консоль выводилось сообщение с количеством кликов по этой кнопке.
*/
let count = 0;
btn.addEventListener( 'click', () => {
  count++;
  console.log(count);
});

/*
4. Работаем с текстовым полем `input#testInput`. Наша задача - протоколировать нажатие каждой кнопки (выводить в консоль ее код).
 - нужен обработчик события нажатия кнопки на инпут. Событие - `keypress`
 - в объекте события, есть свойство `charCode` - это код нажатой кнопки. Его нужно вывести в консоль.
 */
const inputEl = document.querySelector('#testInput');
inputEl.addEventListener('keypress', (event) => {
  console.log(event.charCode);
});

/*
5. Пишем свою функцию валидации для инпута, назовем ее `validateInput`. Предположим, мы вводим количество единиц товара, и у нас разрешенные символы - только цифры. Наша задача - запретить ввод в текстовое поле не-цифровых символов.
 - нужен обработчик на `keypress` текстового поля - это будет наша функция `validateInput`
 - при обрабокте события, проверяем `event.charCode`.
 - коды клавиш-цифр - от 48 до 57.
 - здесь нам нужно ПРЕДОТВРАТИТЬ стандартное поведение (т.е. изменение текста инпута). В этом нам поможет `preventDefault`.
 */
function validateInput(event) {
  if (!(event.charCode >= 48 && event.charCode <= 57)) {
    event.preventDefault();
  }
}
// inputEl.addEventListener('keypress', validateInput);

/*
6. Усложняем валидацию. Теперь мы хотим проверять правильность ввода при "уходе" фокуса из текстового поля. Что требуется:
 - закомментировать добавление обработчика `keypress` на инпут
 - добавить обработчик события утери фокуса (`blur`) на наш инпут
 - при обработке события, проверять текст инпута (через `event.target.value`)
 - если текст не является числом (используем метод `isNaN`), то возвращаем фокус в наше текстовое поле (для этого, у DOM-элементов есть метод `focus` - то есть нам нужно вызвать этот метод у инпута).
 */
inputEl.addEventListener('blur', (event) => {
  const value = event.target.value;
  console.log(event.target)
  if (isNaN(value)) {
    event.target.focus();
  }
});

/*
7. Добавляем в DOM чекбокс с текстом "Валидация". Задача чекбокса - включать/выключать валидацию. На событие `change` чекбокса добавляем обработчик. В обработчике, если чекбокс непустой - добавляем обработчик `keypress` на инпут, в качестве функции-обработчика используем `validateInput`. Если пустой - то этот обработчик удаляем.
*/
const checkboxEl = document.querySelector('#checkbox');
checkboxEl.addEventListener('change', (event) => {
  if (event.target.checked) {
    inputEl.addEventListener('keypress', validateInput);
  }
  else {
    inputEl.removeEventListener('keypress', validateInput);
  }
});