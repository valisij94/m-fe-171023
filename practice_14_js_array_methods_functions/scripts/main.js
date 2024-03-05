// Подопытные данные

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11,9,2,7];

// Массив строк (примитивы)
const strings = ['this', 'is', 'an', 'array', 'of', 'simple', 'strings'];

// 1. Из массива чисел `numbers`, получить массив квадратов этих чисел.
// const squares = numbers.map( el => el ** 2 );
// console.log(squares);


// 2. Из массива строк, получить массив, который будет содержать длины этих строк.
// const lengths = strings.map( str => str.length );
// console.log(lengths);

// Написать функцию capitalizeWords. Она принимает массив строк, и должна вернуть строку, которая будет содержать эти строки, разделенные пробелом, и каждая первая буква - заглавная.
// capitalizeWords( ['this', 'is' 'array'] );
// This Is Array

// function capitalizeWords( arr ) {
//   const capitalized = arr.map( el => el.charAt(0).toUpperCase() + el.slice(1) );
//   const joined = capitalized.join(' ');
//   return joined;
//   //return arr.map( el => el.charAt(0).toUpperCase() + el.slice(1) ).join(' ');
// }
// console.log(capitalizeWords( ['this', 'is', 'array'] ));

// 3. Из массива чисел, получить новый массив, который содержит только четные элементы.
// const oddNumbers = numbers.filter( el => el % 2 === 0 );
// console.log(oddNumbers);

// 4. Из массива строк, получить массив, который будет содержать только строки длиной больше 5 символов.
// const longStrings = strings.filter( el => el.length > 5 );
// console.log(longStrings);

/* 5. Пишем функцию `getRadius`. Она принимает в аргументах радиус окружности, и должна вернуть площадь круга (Math.PI * radius ^ 2). По умолчанию, задать значение аргумента 0.
*/

function getRadius( radius = 0 ) {
  return Math.PI * radius ** 2;
}
console.log(getRadius(10));

/*
6. Пишем функцию `getCircleParam`. Она принимает 2 аргумента: радиус окружности, и требуемую характеристику (`prop`). Если `prop === 'length'`, вернуть длину окружности (2 * Math.PI * radius). Иначе - вернуть площадь круга. По умолчанию, значения аргументов - 0 и `length`.
```
getCircleParam(5, 'length'); // 31.4
getCircleParam(); // 0
```
*/
// function getCircleParam( radius = 0, prop = 'length' ) {
//   if (prop === 'length') {
//     return radius * 2 * Math.PI;
//   }
//   else {
//     return radius ** 2 * Math.PI;
//   }
// }
// console.log(getCircleParam());
// console.log(getCircleParam(5));
// console.log(getCircleParam(10, 'square'));

/*
7. Пишем функцию `createCollector`. Это будет функция, которая создаст нам нечто вроде сборщика. Она должна вернуть другую функцию, которая будет принимать в качестве аругмента строку с названием предмета, который мы кладем в корзину. Нужно обеспечить сохранение массива с предметами (использовать замыкания).
*/

function createCollector() {

  let storage = [];

  return function( productName ) {
    storage.push(productName);
    console.log(storage);
  }
}

const collector = createCollector(); // Address1, ArrayAddress1
collector('Diamond');
collector('Sapphire');

const collector2 = createCollector(); // Address2, ArrayAddress2
collector2('Gold');
