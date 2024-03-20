// Подопытные данные

const jobData = {
  position: 'Director',
  experience: 5,
  salary: 100500
}

// 1. Пристрелочная. Вывести в консоль значение свойства `salary` объекта `jobData`.

// console.log(jobData.salary);

const complexObject = {
  firstname: 'Name',
  lastname: 'LastName',
  age: 32,
  address: {
    city: 'The best City',
    street: 'The longest street',
    house: 5
  }
};

// 2. Еще пристрелочная. Вывести в консоль улица адреса проживания у объекта `complexObject`.
// console.log(complexObject.address.street);

// 3. Создать переменную `addressClone`, в которую нужно сделать ГЛУБОКОЕ КОПИРОВАНИЕ объекта адреса из `complexObject`.

// const addressClone = JSON.parse(JSON.stringify(complexObject.address));
// console.log(addressClone);
// console.log(addressClone === complexObject.address);

// const assignedClone = Object.assign({}, complexObject.address);


/*
4. Пишем функцию `setObjectProperty`, она принимает 3 аргумента: объект, ключ и значение. Нужно чтобы в результате работы функции у объекта добавлялось бы свойство с таким ключом, и значением.
*/
// function setObjectProperty(object, key, value) {
//   object[key] = value;
// }

// const obj = { name: 'Dummy' };

// setObjectProperty(obj, 'foo', 'bar');
// console.log(obj);



const ball = {
  name: "Ball",
  category: "Sport",
  img: "./assets/ball.jpeg",
  price: 100
};
const gloves = {
  name: "Gloves",
  category: "Sport",
  img: "./assets/gloves.jpg",
  price: 140
};
const shoes = {
  name: "Sport shoes",
  category: "Sport",
  discount: true,
  img: "./assets/shoes.png",
  price: 320
};
const hammer = {
  name: "Hammer",
  category: "Tools",
  img: "./assets/hammer.jpeg",
  price: 40
};
const saw = {
  name: "Saw",
  category: "Tools",
  discount: true,
  img: "./assets/saw.jpeg",
  price: 75
};
const shark = {
  name: "Shark toy",
  category: "Other",
  img: "./assets/shark.jpeg",
  price: 45
};

// Массив объектов
let products = [ball, gloves, shoes, hammer, saw, shark];

/*
5. Теперь поработаем с массивами объектов. У нас есть массив `products`. Нужно пройтись по массиву, и вывести в консоль наименование каждого товара (свойство `name`). */

// products.forEach( elem => {
//   console.log(elem.name);
// });

/* 6. Посчитаем суммарную цену всех товаров. */
// const sum = products.reduce( (acc, el) => {
//   let result = el.price + acc;
//   return result;
// }, 0);

// console.log(sum);

/* 7. Получить объект, в котором будут категории товаров, и количество товаров по категориям.
*/

// const summaryProducts = products.reduce( (acc, el) => {
//   if (acc[el.category]) {
//     acc[el.category] += 1;
//   }
//   else {
//     acc[el.category] = 1;
//   }
//   return acc;
// }, {});

// console.log(summaryProducts);

/*
8. Пишем функцию `addProduct`. Она будет принимать 4 аргумента: название, категорию, ссылку на изображение, и цену товара. Задача функции - создать объект, и добавить его в массив товаров (`products`).
*/

// function addProduct(name, category, imgRef, price) {
//   const product = {};
//   product.name = name;
//   product.category = category;
//   product.img = imgRef;
//   product.price = price;
//   products.push(product);
// }

// addProduct('Product1', 'Tools', '', 100);
// addProduct('Prod', 'Tools', '', 100);
// addProduct('P', 'Tools', '', 100);
// console.log(products)

/*
10. Реализуем сохранение данных инпута. Для инпута `#simpleInput`, реализовать такую функциональность, что при каждом изменении инпута (событие `change`), нужно сохранять в `localStorage` значение этого инпута. Используем ключ `inputData`.
*/

let simpleInput = document.querySelector('#simpleInput');

simpleInput.addEventListener('input', (event) => {
  localStorage.setItem('inputData', event.target.value)
});
