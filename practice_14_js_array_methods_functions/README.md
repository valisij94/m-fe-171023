## Практическое занятие №14

### Тема: Циклы.

Репозитарий содержит материалы по практическому занятию №14, посвященному работе с методами массивов в JavaScript.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Задачи занятия
1. Из массива чисел `numbers`, получить массив квадратов этих чисел.
2. Из массива строк, получить массив, который будет содержать длины этих строк.
3. Из массива чисел, получить новый массив, который содержит только четные элементы.
4. Из массива строк, получить массив, который будет содержать только строки длиной больше 5 символов.
5. Пишем функцию `getRadius`. Она принимает в аргументах радиус окружности, и должна вернуть площадь круга (Math.PI * radius ^ 2). По умолчанию, задать значение аргумента 0.
6. Пишем функцию `getCircleParam`. Она принимает 2 аргумента: радиус окружности, и требуемую характеристику (`prop`). Если `prop === 'length'`, вернуть длину окружности (2 * Math.PI * radius). Иначе - вернуть площадь круга. По умолчанию, значения аргументов - 0 и `length`.
```
getCircleParam(5, 'length'); // 31.4
getCircleParam(); // 0
```
7. Пишем функцию `createCollector`. Это будет функция, которая создаст нам нечто вроде сборщика. Она должна вернуть другую функцию, которая будет принимать в качестве аругмента строку с названием предмета, который мы кладем в корзину. Нужно обеспечить сохранение массива с предметами (использовать замыкания).
8. Пишем функцию `countVovels`. Она должна принимать строку, и возвращать количество гласных в этой строке. Гласные - `a,o,e,i,u,y`.  Функция должна быть регистронезависимой.
```
countVovels('timon'); // 2
countVovels('PUMBA'); // 2
```
9. Задача "со звездочкой". Не используя встроенные методы массивов, реализовать свой метод `map`.
10. Задача "со звездочкой". Не используя встроенные методы массивов, реализовать свой метод `filter`.

### Полезные ссылки
- (Русскоязычный гайд)[https://learn.javascript.ru/array-methods] по методам массивов
- (Для гурманов)[https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array] спецификация MDN, местами русскоязычная.
- (Замыкания)[https://learn.javascript.ru/closure] - максимально подробно. Настоятельно рекомендуется к прочтению.