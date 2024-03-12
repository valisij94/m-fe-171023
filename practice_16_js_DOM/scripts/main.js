// Подопытные данные

// Массив массивов
const strangers = [
  ['Gimli', 'Axe', 'Dwarwes', 298],
  ['Legolas', 'Longbow', 'Elves', 329 ],
  ['Aragorn', 'Sword', 'People', 89],
  ['Boromir', 'Sword', 'People', 35]
];

/*1. Пристрелочная. Написать блок кода, который в блоке `.firstBlock`, добавит в начало блока (ПЕРЕД существующими потомками), заголовк `h2` с текстом `First block header`. */

const targetEl = document.querySelector('.firstBlock');
const h2El = document.createElement('h2');
h2El.textContent = 'First block header';
targetEl.prepend(h2El);

/* 2. В блоке `.secondBlock`, после третьего параграфа, добавить `span` с текстом `Simple Span!`.
*/
const spanEl = document.createElement('span');
spanEl.textContent = 'SimpleSpan';
const targetEl2 = document.querySelector('.secondBlock > p:nth-of-type(3)');
targetEl2.after(spanEl);

/* 3. Еще пристрелочная. В блоке `.secondBlock`, после третьего потомка, добавить параграф с текстом `This is added after the third descendant!`.
*/
const targetEl3 = document.querySelector('.secondBlock > :nth-child(3)');
const paragraphEl = document.createElement('p');
paragraphEl.textContent = 'This is added after the third descendant!';
targetEl3.after(paragraphEl);

/*
4. Написать функцию `addParagraph`. Она должна принимать в аргументах селектор узла, куда нужно добавить параграф, и добавлять параграф с текстом `SimpleText` в конец этого узла (после уже существующих элементов).
*/
// function addParagraph(selector) {
//   let selectedElem = document.querySelector(selector)
//   let newPar = document.createElement('p')
//   newPar.innerText = 'SimpleText123'
//   selectedElem.append(newPar)
// }
// addParagraph('div.firstBlock');

/*5. Усложняем функцию `addParagraph` - теперь она должна принимать селектор узла, текст параграфа, и строку с названием, куда добавить - в начало (`start`), или в конец (`end`).
```
addParagraph('div.firstBlock', 'Dummy text', 'end'); //  в результате вызова, в конец div.firstBlock добавится параграф с текстом `Dummy text`.
```
*/
function addParagraph(selector, text, target) {
  let selectedElem = document.querySelector(selector)
  let newPar = document.createElement('p')
  newPar.innerText = text;
  if (target === 'start') {
    selectedElem.prepend(newPar);
  }
  else {
    selectedElem.append(newPar);
  }
}

addParagraph('.secondBlock', 'Timon!', 'end');

/*
6. Пишем функцию `renderParticipant` - она будет рисовать карточку участника похода к Роковой горе. Нужно создать `div` с классом `strangerData`, и в него поместить:
 - заголовок `h3` с именем участника (класс `strangerName`)
 - параграф с описанием: оружие - название оружия, возраст.
 - кнопка с текстом "Добавить".
 - и добавить получившуюся карточку в `div.strangersContainer`.

Теперь нужно пройтись по массиву `strangers`, и для каждого участника похода вызвать эту функцию.
*/

let strangersContainer = document.querySelector('.strangersContainer')

function renderParticipant(part) {
  let strangerData = document.createElement('div')
  strangerData.classList.add('strangerData')
  let strangerName = document.createElement('h3');
  strangerName.innerText = part[0];
  strangerName.classList.add('strangerName');
  let describtion = document.createElement('p');
  describtion.innerText = `Оружие - ${part[1]}, возраст - ${part[3]}`
  let btn = document.createElement('button');
  btn.innerText = 'Добавить'

  strangerData.append(strangerName, describtion, btn)
  strangersContainer.append(strangerData)
}

strangers.forEach(participant => renderParticipant(participant))