# README

## Практическое занятие №35

Репозитарий содержит материалы по практическому занятию №35, посвященному работе с библиотеками `Redux`, `react-redux`, и асинхронным экшнам.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия

1. Пробуем работу с асинхронными экшнами. У нас есть компонент `ProductForm`, который подразумевает форму для создания нового товара. У него, есть выпадающее меню - где мы выбираем категорию товара. Первой нашей задачей будет научиться запрашивать список категорий с адреса `https://dummyjson.com/products/categories`, и отрисовывать их в выпадающем списке. Список категорий нужно хранить в редакс-стейте, для этого мы создадим новый фрагмент стейта, `categories`, и в нем будем держать список категорий, статус загрузки, и текст ошибки.
2. Собственно, делаем экшн для запроса списка категорий. Это должен быть асинхронный экшн. Чтобы работать с асинхронными экшнами, мы при построении стора должны применить "middleware" - в нашем случае, это будет `redux-thunk`.
3. Теперь, нам нужно сделать асинхронный экшн по отправке данных товара (формы). Отправляем на адрес `'https://dummyjson.com/products/add`, методом `POST`. В теле запроса передаем преобразованный в строку объект с данными товара.
4. И закрепляем умение работать с `thunk` - перепишем нынешнюю реализацию запроса списка товаров на вариант с `redux-thunk`.


### Полезные ссылки по занятию:
 - [React Redux](https://ru.react-redux.js.org/introduction/getting-started) - официальная русскоязычная(!) документация. О качестве перевода лучше не задумываться - чем богаты. Рекомендуется в качестве справочника. Есть очень толковые примеры.
 - [Описание redux-thunk](https://redux.js.org/usage/writing-logic-thunks) - мотивация использования мидлвара, описание `redux-thunk` в чистом виде.