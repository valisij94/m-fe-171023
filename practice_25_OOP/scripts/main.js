/*
1. Работаем в предметной области интернет-магазина. Нам нужно создать класс для хранения информации о конкретном товаре. У товара есть наименование, категория, цена, описание. Это нужно отразить в создаваемом классе.
2. Написать конструктор для класса. Он ожидает на вход 4 аргумента (наименование, категорию, цену и описание товара), и должен инициализировать соответствующие поля класса переданными значениями.
*/

class Product {


  myProperty = 0; // свойство класса, оно будет присуще ВСЕМ объектам этого класса
  myMethod() { } // метод класса, присущ прототипу, доступен для всех объектов

  static staticProp = 0; // статическое свойство, оно будет присуще КЛАССУ в целом, но НЕ каждому объекту
  static staticMethod() {} // статический метод класса, присущ КЛАССУ в целом.

  static count = 0;

  static getCurrentCounter() {
    return Product.count;
  }

  constructor(name, category, price, description) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.description = description;
    Product.count += 1;

    this.currentCount = Product.count;
  }

  // static instancesCounter(count) {
  //   count += 1;
  // };

  changePrice(addPrice) {
    this.price += addPrice;
    if (this.price < 1) {
      console.log('Too low price!');
      this.price = 1;
    }
  }

  logProduct() {
    console.log(`Product ${this.name}, price: ${this.price}`);
    console.log('Now counter is', Product.count);
  }
}

/*
3. Работаем с методами. Добавим нашему товару функцию `changePrice`. Она должна менять цену нашего товара - прибавлять к ней переданное значение.
*/

/*
4. Добавляем еще метод, `logProduct`. Он должен выводить в консоль информацию о товаре, в виде строки типа "Товар ИМЯ, цена ЦЕНА".
*/

const product = new Product('Toy1', 'Toys', 50, 'Super');
const product1 = new Product('Toy1', 'Toys', 50, 'Super');
const product2 = new Product('Toy1', 'Toys', 50, 'Super');
product2.logProduct();
const product3 = new Product('Toy1', 'Toys', 50, 'Super');
console.log(product);
console.log(product1);
console.log(product2);
console.log(product3);
product2.logProduct();

console.log('Counter is', Product.getCurrentCounter())

// Product.outerMethod = function() {
//   console.log('HEllo from static method defined outside');
// }

// console.dir(Product);

/*
5. Оптимизируем работу метода из п.3. Нужно при изменении цены проверять, что она не меньше 1. Если новая цена будет меньше 1 - то нужно выводить в консоль сообщение об этом, а цену товару ставить 1.
*/

/*
7. Создаем "внутренний счетчик" товаров. Нужно обеспечить, чтобы при создании объекта класса `Product` (то есть при вызове конструктора), мы увеличивали бы этот счетчик. Подсказка: это стоит сделать статическим свойством.
*/
