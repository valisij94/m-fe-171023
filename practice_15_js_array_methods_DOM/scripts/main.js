// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

// Массив массивов
const strangers = [
  ['Gimli', 'Axe', 'Dwarwes', 298],
  ['Legolas', 'Longbow', 'Elves', 329 ],
  ['Aragorn', 'Sword', 'People', 89],
  ['Boromir', 'Sword', 'People', 35]
];

// 1. Получить сумму массива чисел. Решить задачу двумя способами: с использованием `forEach`, `reduce`.

// let result1 = 0;
// numbers.forEach( num => result1 += num );
// console.log('ForEach result: ', result1);

// let result2 = numbers.reduce(
//   (acc, val) => {
//     console.log('Current state: ', acc, val);
//     return  acc + val;
//   },
//   0
// );
// console.log('Reduce result: ', result2);

// 2. Из массива строк, получить суммарную длину всех строк. Использовать тот/те метод(ы) массивов, которые сочтете нужным.
// let result3 = strings.reduce( (acc, val) => acc + val.length, 0);
// console.log(result3);

// let result4 = strings.join('').length;
// console.log(result4);

// let result5 = 0;
// strings.forEach( str => result5 += str.length );
// console.log(result5);

/*
3. Есть массив `strangers` с данными участников похода к Роковой Горе. Данные хранятся в виде массивов из 4 элементов: имя, основное оружие, раса, возраст. Нужно получить суммарный возраст участников похода.
*/
// const totalAge = strangers.reduce( (acc, val) => {
//   return acc + val[3];
// }, 0);
// console.log(totalAge);

/* 4. Из массива `strangers`, получить другой массив, который будет содержать вооружения участников похода.
*/
// const weapons = strangers.reduce( (acc, value) => {
//   acc.push(value[1]);
//   return acc;
// }, []);
// console.log(weapons)

/*
6. Теперь поработаем с DOM. Пристрелочная задача - вывести в консоль количество всех параграфов (`p`) на странице.
*/
// const paragraphs = document.querySelectorAll('p');
// console.log(paragraphs.length);

/*
7. Создадим элемент. Нужно в `div` с id `strangersContainer` добавить заголовок `h3` с текстом "Участники похода к Роковой Горе". Нужно также присвоить этому элементу класс `strangersHeader`.
*/
const containerEl = document.querySelector('#strangersContainer');
const headerEl = document.createElement('h3');
headerEl.innerText = 'Participants';
//headerEl.className = 'strangersHeader';
headerEl.classList.add('strangersHeader');
containerEl.append(headerEl);