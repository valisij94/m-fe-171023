// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// а. добавить элемент в конец массива чисел (число 45);
numbers.push(45);

// добавить несколько элементов в конец массива чисел (числа 45, 68, 23);
numbers.push(45, 68, 23);

//  г. удалить последний элемент из массива чисел.
numbers.pop();

//  д. добавить элемент в начало массива чисел (число 9)
numbers.unshift(9);

//  е. удалить первый элемент из массива чисел
numbers.shift();

//  ж. получить "срез" массива чисел - это должен быть новый массив, который содержит элементы массива `numbers` со 2 по 5.
const slicedArray = numbers.slice(2,6);

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

/*  и. добавить в массив строк новые элементы. Нужно добавить после строки 'simple' две строки: 'and', 'lowercased'. То есть вставляем элементы в середину массива. */
strings.splice(6, 0, 'and', 'lowercased');
// ['this', 'is', 'an', 'array', 'of', 'simple', 'and', 'lowercased', 'strings']

/*  и. заменить в массиве элементы: вместо строк 'simple', 'and', 'lowercased', теперь должна быть строка 'tiny'. Здесь нам пригодится метод `splice`
*/
/*strings.splice(5, 3, 'tiny');
console.log(strings);*/

const indexOfSimpleEl = strings.indexOf('simple');
strings.splice(indexOfSimpleEl, 3, 'tiny');


/*
2. Методы поиска в массиве
 а. проверить, содержит ли массив строк строку 'array'.
 б. найти индекс числа 0  в массиве чисел
 в. найти индекс последнего вхождения числа 9 в массиве чисел
*/

// const result = strings.includes('array');
// console.log(result);

// const zeroIndex = numbers.indexOf(0);
// console.log(zeroIndex);

// const lastIndex = numbers.lastIndexOf(9);
// console.log(lastIndex)

/*
3. Другие методы массивов
 а. объединить наш массив строк в одно предложение. Результатом должна быть строка, разделенная пробелами.
 б. объединить наш массив чисел в одно большое число (т.е. без разделителей). Подсказка - используем тот же метод, что и в предыдущей задаче.
*/
// const joined = strings.join(' ');
// console.log(joined)

// const joinedNumbers = numbers.join('');
// console.log(joinedNumbers);

/*
4. Методы строк
 а. Пройтись по массиву строк, и вывести в консоль все строки, приведенные к верхнему регистру.
 б. Пройтись по массиву строк, и в каждом элементе заменить букву `a` на заглавную `A`
 в. пишем функцию `capitalize`. Она должна принять строку. Функция должна удалить с начала и конца строки пробелы (если есть), и вернуть строку, приведенную к нижнему регистру, но первая буква должна быть заглавной. Пример:
 ```
 capitalize('timon'); // Timon
 capitalize('   puMBA  '); // Pumba
 capitalize(' sIMbA'); // Simba
 ```
 */

 for (let i = 0; i < strings.length; i++) {
  console.log( strings[i].toUpperCase() );
 }

for (let i = 0; i < strings.length; i++) {
  console.log( strings[i].replace(/a/g, 'A') );
}
