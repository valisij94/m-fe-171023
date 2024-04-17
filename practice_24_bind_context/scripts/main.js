const productInfo = {
  name: 'Electric Saw',
  price: 250,
  category: 'Tools',
  describeSelf: function() {
    console.log(`Product: ${this.name}, price: ${this.price}`);
  }
};

/*
1. У нас в скрипте есть объект `productInfo`. Нужно добавить в этот объект метод `describeSelf`, который будет выводить данные о товаре, вида "Товар НАЗВАНИЕ, цена - ЦЕНА".
*/

/*2. Пишем функцию `showProductInfo()`. Задача функции - выводить в консоль информацию о товаре, вида: "Товар НАЗВАНИЕ, цена - ЦЕНА". Функция должна быть контексто-ориентированной, т.е. предполагается, что она будет вызвана в контексте объекта товара. Вызываем функцию `showProductInfo()` в контексте объекта из п.1. Для этого, нам понадобится явно привязать контекст.
*/

function showProductInfo() {
  // console.log(`Product: ${this.name}, price: ${this.price}`);
}

showProductInfo.call(productInfo);
showProductInfo.apply(productInfo);
const bindedFunction = showProductInfo.bind(productInfo);
bindedFunction();

/*
3. Пишем функцию `customMap`, которая повторяет функциональность метода массивов `map`. Нам нужно, чтобы эта функция была бы контекстно-ориентированной, то есть работала с `this`, и ориентировалась бы на то, что в качестве `this` будет массив.
*/

const arr = [1,2,3];
const arr2 = [5,7,9];
const mappingFunction = (el) => el * el;

let result1 = arr.map( mappingFunction );
// console.log('Embdedded map', result1);

function customMap( mappingFunction ) {
  // console.log('Current context', this)
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push( mappingFunction( this[i] ) );
  }
  return result;
}
const result2 = customMap.call(arr, mappingFunction );
// console.log('Custom map', result2);
const result3 = customMap.call(arr2, (el) => Math.pow(el, 3) );
// console.log('Custom map', result3);

/*
5. Задача повышенной сложности. Есть объект `weirdArray`. У него есть свойство length, и ключи очень похожи на индексы массива. Но это не массив. Нужно применить к нему метод `forEach`, и вывести в консоль каждое его свойство, у которого ключ - число (т.е. 0, 1, 2, ...). Для этого, нам нужно привязать контекст явно к методу forEach, и вызвать его. Такой прием называется заимствованием методов.
*/


const weirdArray = {
  2: 'Timon',
  length: 3,
  0: 'Saw',
  1: 'Hammer',
};

function myFunc(arg1, arg2) {
  console.log(this, arg1, arg2);
  arg2();
}

myFunc.call(weirdArray, 'Foo', () => console.log('Hello from callback') );
myFunc.apply(weirdArray, ['Foo',  () => console.log('Hello from callback')]);

// Array.prototype.forEach.apply(weirdArray, [(el) => console.log(el)] )

// const veryWeirdArray = {
//   0: 'Drill',
//   1: 'Axe',
//   2: 'Nails',
// };