/*
 1. написать цикл, который 10 раз выведет в консоль "Простая итерация". Написать 3 разных варианта: с предусловием (`while`), с постусловием (`do ... while`), и с параметром (`for`).
 */

 // Pre-condition
 let i = 0;
 while (i < 10) {
  console.log('Simple iteration');
  i++;
 }

 // Post-condition
 let j = 0;
 do {
  console.log('Simple iteration from postCondition');
  j++;
 }
 while (j < 10);

 // Parameter
 for (let k = 0; k < 10; k++) {
  console.log('Simple iteration with parameter');
 }

 /*
  2. немного усложним задачу. Теперь в консоль нужно выводить номер итерации. Т.е. "простая итерация 0", "простая итерация 1", и т.д. Рекомендуется использовать цикл с параметром.
  */
  for (let k = 0; k < 10; k++) {
    console.log(`Simple "iteration" number ${ k }`);
    //console.log('Simple iteration number ' + k);
   }

/*
 3. пишем блок кода, который посчитает сумму чисел от 0 до числа, которое ввел пользователь, и выведет результат в консоль. Т.е. например, пользователь ввел 5 - считаем 1 + 2 + 3 + 4 + 5 = 15.
*/

// const num = +prompt('Enter a number');
// let result = 0;
// for (let i = 0; i <= num; i ++ ) {
//   result += i;
// }
// console.log(`Sum is ${result}`);

/*
 4. пишем блок кода, который вычисляет факториал числа. Факториал - это произведение всех чисел от 1 до текущего числа. Т.е. факториал от 3 - это 1 * 2 * 3. Факториал от 5 - это 1 * 2 * 3 * 4 * 5. Наша задача - спросить у пользователя число методом `prompt`, запустить цикл (рекомендую с параметром), который посчитает факториал этого числа, и вывести в консоль результат.
 */
// const factorialBase = +prompt('Enter factorial base');
// let factorialResult = 1;
// for (let i = 1; i <= factorialBase; i++) {
//   factorialResult *= i;
// }
// console.log(`Factorial is ${factorialResult}`)

/*
 5. добавляем условие. Теперь, запускаем расчет факториала только если введенное число меньше 15. Если пользователь ввел число больше 15 - выводим сообщение "Это я считать не буду - тяжко."
 */

// let num = +prompt("Please write number");
// let result = 1;

// if (num >= 15){
//     console.log("Это я считать не буду - тяжко.");
// } else {
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   console.log(`Factorial ${result}`);
// }

// Массив чисел (примитивы)
const numbers = [1,3,6,2,4,0,9,7,5,10,15,12,11];

/* 1. дан массив numbers. Посчитать сумму элементов массива, результат вывести в консоль.
*/
let arraySum = 0;
for (let i = 0; i < numbers.length; i++) {
  arraySum += numbers[i];
}
console.log(arraySum);

/*
 2. вывести в консоль только четные элементы массива numbers (те, которые делятся на 2 без остатка)
 */
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i])
  }
}

/*
 3. вывести в консоль только те элементы массива numbers, которые делятся без остатка на 2 и на 3.
*/
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0 && numbers[i] % 3 === 0) {
    console.log(`Dividable by 2, 3: ${numbers[i]}`)
  }
}

/*
 4. добавить в массив numbers число 11 (в конец).

 numbers.push(11);

 5. убрать из массива numbers число 11 (из конца).

 numbers.pop();

 */


 const num1 = 5;
 const num2 = prompt('Enter nu,');
 console.log(num1 - num2);
