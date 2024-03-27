/*
1. Пишем сетевой запрос. Наша задача - обратиться к "бэку" по адресу `https://dummyjson.com/products/categories` GET-запросом, и вывести в консоль результат в "удобоваримом" виде (результат нам возвращается в виде JSON). Этот запрос нам вернет массив с категориями товаров.
*/

// const requestCategories = async () => {
//   const res = await fetch('https://dummyjson.com/products/categories');
//   const data = await res.json();
//   console.log(data);
// }

// const requestWithPromises = () => {
//   const res = fetch('https://dummyjson.com/products/categories')
//     .then( response => response.json())
//     .then( data => console.log(data));
// }

// requestCategories();
// requestWithPromises();

/*
2. Усложняем задачу. Нужно написать функцию `renderSelect`, которая будет заполнять выпадающий список данными категорий товаров. Добавляем в разметку ПЕРЕД блоком `.productsContainer` компонент `select` (выпадающее меню). Нужно заполнить этот `select` опциями (`<option value='value'>option_text</option>`), которые нам пришли с "бэка" в предыдущей задаче. То есть, пройтись по массиву результатов, для каждого создать элемент `option`, и добавить его в наш `select`. В качестве `value` используем значение, в качестве `option_text` используем то же, но с большой буквы (т.е. надо сделать первую букву значения заглавной).
*/

const selectEl = document.querySelector('#categoriesSelect');
// const renderSelect = async () => {
//   try {
//     const res = await fetch('https://dummyjson.com/products/categories');
//     const data = await res.json();
//     data.forEach( category => {
//       const optionEl = document.createElement('option');
//       optionEl.text = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
//       optionEl.value = category;
//       selectEl.append(optionEl);
//     });
//   }
//   catch (err) {
//     console.log(err);
//   }
// }

// renderSelect();

/*
3. Пишем функцию `getProducts`. В качестве аргумента, она принимает категорию товаров. Она должна сделать запрос по адресу `https://dummyjson.com/products/category/ИМЯ_КАТЕГОРИИ`. В ответ нам придет список товаров этой категории. Наша задача - пока что вывести их в консоль.
*/

// const getProducts = (categoryName) => {
//   fetch(`https://dummyjson.com/products/category/${categoryName}`)
//     .then( response => response.json())
//     .then( data => console.log(data) );
// }

// getProducts('smartphones');

/*
4. Дорабатываем функцию `getProducts`. Нужно добавить рассмотрение случая, когда у нас не задана категория (хотим запросить все товары). Нужно сделать так, чтобы, если в аргументе не передана категория, то запрос шел на адрес `https://dummyjson.com/products/`.
*/

// const getProducts = (categoryName) => {
//   fetch(`https://dummyjson.com/products/${categoryName ? `category/${categoryName}` : ``}`)
//     .then( response => response.json())
//     .then( data => console.log(data) );
// }

/*
5. Добавляем обработчик события `change` на наш `select`. При событии, нам нужно вызывать функцию из п.4 с соответствующей категорией - т.е. мы рисуем список товаров выбранной категории.
*/
selectEl.addEventListener('change', (event) => {
  getProducts(event.target.value);
});

/*
6. Добавляем "иконку загрузки" на нашу страницу. Добавляем перед нашим `select` контейнер (`div.loader`) с текстом "Подождите, идет загрузка...". По умолчанию он скрыт (`display: none`). Нам нужно показывать этот блок при начале запроса списка товаров, и скрывать, когда список товаров успешно загружен.
*/
const loaderEl = document.querySelector('div.loader');
loaderEl.classList.add('xHidden');

const getProducts = (categoryName) => {
  loaderEl.classList.remove('xHidden');
  return new Promise( (resolve, reject) => {
    fetch(`https://dummyjson.com/products/${categoryName ? `category/${categoryName}` : ``}`)
    .then( response => response.json())
    .then( data => {
      loaderEl.classList.add('xHidden');
      resolve(data);
    });
  })

}

/*
8. Делаем "промисификацию" функции `renderSelect`. Нам нужно, чтобы функция:
 - возвращала промис
 - запрашивала категории
 - заполняла наш `select` нужными категориями
 - резолвила бы возвращаемый промис списком категорий ПОСЛЕ того, как они будут отрендерены в селекте
*/
const requestCategories = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.log(error);
  }
}

const renderCategories = (categories) => {
  categories.forEach( category => {
    const optionEl = document.createElement('option');
    optionEl.text = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
    optionEl.value = category;
    selectEl.append(optionEl);
  });
}

const renderPromisifiedSelect = () => {
  // request categories
  const res = requestCategories('https://dummyjson.com/products/categories');
  // render result
  res.then( categoriesList => renderCategories(categoriesList));
}

// renderPromisifiedSelect();

/*
9. Дорабатываем всю страничку. Нам нужно, чтобы при запуске скрипта мы:
 - показывали иконку загрузки (п.6)
 - запускали запрос категорий (функция п.8)
 - запускали запрос ВСЕХ товаров (функция из п.4, БЕЗ аргумента)
 - по завершении ОБОИХ запросов, мы скрываем иконку загрузки. В этом нам поможет `Promise.all`
 */

 const categoriesPromise = requestCategories('https://dummyjson.com/products/categories');
 const productsPromise = getProducts();

 Promise.all( [categoriesPromise, productsPromise] )
  .then(res => {
    renderCategories(res[0]);
    // render Products list with res[1]
  })
