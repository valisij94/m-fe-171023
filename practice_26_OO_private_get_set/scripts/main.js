class Product {

  #purchasePrice;
  static #instancesCounter = 0;

  static purchaseCoefficient = 0.75;

  static #productsSaled = {};

  constructor(title, category, price, description) {
    this.title = title;
    this.category = category;
    this.price = price;
    this.description = description;
    this.#purchasePrice = this.price * Product.purchaseCoefficient;
    Product.#instancesCounter++;
  }

  getAnnotation() {
    return `Product ${this.title}, price - ${this.price}`;
  }

  get annotation() {
    return `Product ${this.title}, price - ${this.price}`;
  }

  get purchasePrice() {
    return this.#purchasePrice;
  }

  set purchasePrice(value) {
    if (this.price < value) {
      throw new Error('Purchase price should be less than the product price!')
    }
    else {
      this.#purchasePrice = value;
    }
  }

  set purchaseCoefficient(value) {
    if (value > 0 && value < 1) {
      Product.purchaseCoefficient = value;
    }
    else {
      throw new Error('Something went wrong!');
    }
  }

  get instancesCounter() {
    return Product.#instancesCounter;
  }

  sale() {
    if (Product.#productsSaled[this.category]) {
      Product.#productsSaled[this.category]++;
    }
    else {
      Product.#productsSaled[this.category] = 1;
    }
  }

  get productsSaled() {
    return Product.#productsSaled;
  }
}

const phone = new Product('Phone', 'electronics', 100, 'Samsung Galaxy');
const watch = new Product('Watch', 'electronics', 50, 'Smart Watch');
const ball = new Product('Ball', 'sports', 20, 'Ball. Just a ball');
phone.sale();
watch.sale();
ball.sale();
console.log(watch.productsSaled); // { electronics: 2, sports: 1 }


/*
8. Еще работа со статическими свойствами. Добавим в класс `Product` НЕстатический метод `sale` - типа продажа товара. Нам нужно вести учет проданных товаров. Нужно создать аналог счетчика из п.7 (назовем его `productsSaled`, и также сделаем приватным), только теперь это будет объект, в котором ключами будут категории проданных товаров, а значениями - количества. И нужно создать ему геттер. Пример:
```
const phone = new Product('Phone', 'electronics', 100, 'Samsung Galaxy');
const watch = new Product('Watch', 'electronics', 50, 'Smart Watch');
const ball = new Product('Ball', 'sports', 20, 'Ball. Just a ball');
phone.sale();
watch.sale();
ball.sale();
console.log(Product.productsSaled); // { electronics: 2, sports: 1 }
```
*/

/*
9. Теперь поработаем с наследованием. Создадим класс-наследник для класса `Product`, и назовем его `PowerTool` - то есть, электроинструмент. У этого класса должны быть те же свойства, что и у `Product`, а еще должно быть свойство `power` - потребляемая мощность. Это нужно отразить в конструкторе.
*/

class PowerTool extends Product {

  constructor(title, category, price, power) {
    super(title, category, price);
    this.power = power;
  }
}

const powerTool = new PowerTool('Saw', 'Tools', 200, 1.3);
powerTool.productsSaled;