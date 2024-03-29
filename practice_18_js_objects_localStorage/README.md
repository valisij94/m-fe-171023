## Практическое занятие №18

### Тема: DOM.

Репозитарий содержит материалы по практическому занятию №18, посвященному работе с объектами в JS.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Разогрев
1. Что будет выведено в консоль при запуске фрагмента кода?
```
const firstObj = {
  name: 'Timon',
  color: 'Orange'
}

const secondObj = {
  name: 'Timon',
  color: 'Orange'
}

console.log(firstObj === secondObj);
```

2. Что выведет код?
```
const pumba = {
  name: 'Pumba',
  color: 'Brown'
}

const pumbaClone = pumba;
pumbaClone.color = 'Black';

console.log(pumba.color);
```

3. Что выведет код?
```
const simba = {
  name: 'Simba',
  color: 'Yellow'
}

const simbaClone = Object.assign( {}, simba ); // { name: 'Simba', color: 'Yellow' }
simbaClone.color = 'Brown';

console.log(simba.color);
```

### Задачи занятия
1. Пристрелочная. Вывести в консоль значение свойства `salary` объекта `jobData`.
2. Еще пристрелочная. Вывести в консоль улица адреса проживания у объекта `complexObject`.
3. Создать переменную `addressClone`, в которую нужно сделать ГЛУБОКОЕ КОПИРОВАНИЕ объекта адреса из `complexObject`.
4. Пишем функцию `setObjectProperty`, она принимает 3 аргумента: объект, ключ и значение. Нужно чтобы в результате работы функции у объекта добавлялось бы свойство с таким ключом, и значением. Пример работы:
```
function setObjectProperty(object, key, value) {
  // ...
}
const obj = { name: 'Dummy' };

setObjectProperty(obj, 'foo', 'bar');
console.log(obj); // { name: 'Dummy', foo: 'bar' }
```
5. Теперь поработаем с массивами объектов. У нас есть массив `products`. Нужно пройтись по массиву, и вывести в консоль наименование каждого товара (свойство `name`).
6. Посчитаем суммарную цену всех товаров.
7. Получить объект, в котором будут категории товаров, и количество товаров по категориям.
8. Пишем функцию `addProduct`. Она будет принимать 4 аргумента: название, категорию, ссылку на изображение, и цену товара. Задача функции - создать объект, и добавить его в массив товаров (`products`).
9. Добавляем обработчик на клик по кнопке `Add product`. Он должен взять значения из инпутов, и вызвать нашу функцию.
10. Реализуем сохранение данных инпута. Для инпута `#simpleInput`, реализовать такую функциональность, что при каждом изменении инпута (событие `input`), нужно сохранять в `localStorage` значение этого инпута. Используем ключ `inputData`.
11. Теперь реализуем восстановление данных. На событие `DOMContentLoaded`, добавляем обработчик - он должен взять из ЛС значение по ключу `inputData`, и вставить в инпут `#simpleInput`.
12. Реализуем сохранение данных формы. Написать функцию `preserveFormData`. Она должна принимать в аргументах идентификатор узла, в котором есть инпуты. Ее задачи:
 - брать значения из ВСЕХ инпутоы внутри узла
 - собирать из них объект, где ключами будут идентификаторы инпутов, а значениями - значения инпутов
 - сериализовывать объект
 - сохранять его в `localStorage`. Ключом будет идентификатор узла (аргумент функции).
13. Пишем функцию восстановления данных инпутов `restoreInputsData`. Она также принимает в аргументах идентификатор узла, чьи инпуты мы восстанавливаем. Ее задача - извлечь из ЛС соответствующий объект с данными инпута, десериализовать, и распихать значения по соответствующим инпутам.

### Полезные ссылки по занятию:
 - Раздел учебника, посвященный [объектам](https://learn.javascript.ru/object) - много чтива, но оно стоит каждой потраченной минуты. Особое внимание следует уделить подразделам "литералы" и "квадратные скобки".