# README

## Практическое занятие №27

### Тема:

Репозитарий содержит материалы по практическому занятию №27, посвященному ознакомлению с фреймворком React.js.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Структура каталогов в create-react-app
 - node_modules - здесь содержатся все зависимости проекта, то есть библиотеки, которые мы подключили (или которые были подключены по умолчанию к проекту create-react-app). Эту папку мы не трогаем, и руками в ней ничего не меняем - ее содержимым управляет NPM при установке/обновлении/удалении зависимостей
 - public - в этой директории хранится файл `index.html`, а также ресурсы проекта (картинки, файл манифеста и файл для поисковых роботов). В этой папке нам будет интересен только `index.html`.
 - src - здесь все исходники (JS, CSS, юнит-тесты). Здесь мы будем работать: создавать свои каталоги, файлы, писать код и стили и многое другое.
 - `package-lock.json` - эталонный файл зависимостей проекта. Вручную ничего в нем не меняем.
 - `package.json` - файл с описанием проекта и его зависимостей. Вручную менять можно, но пока мы этого делать не будем.

### Задачи занятия
1. Разбираемся с тем, как работает JSX. В файле `App.js`, удаляем все из `<div className='App'>`. Вместо этого содержимого, нам нужно добавить туда параграф с текстом `Hello World!`
2. Еще пробуем добавлять элементы. Теперь нужно добавить в наш `<div className='App'>` заголовок `h2` с текстом `Welcome, guest!`. Под ним нужно добавить блок (`div`) с двумя кнопками. Тексты кнопок - "Enter", "Register".
3. Работаем с JavaScript в JSX. Теперь в наш параграф к существующему тексту нам нужно добавить текущую дату (`new Date()`). Чтобы работать с JS, нам понадобится обернуть содержимое нашего параграфа в фигурные скобки.
4. Еще работаем с динамикой. Объявим в нашем компоненте переменную `currentSeason`, и запишем в нее значение `winter` (у нас сейчас зима). Теперь нужно в компоненте (внутри `<div className='App'>`), под нашими кнопками, вывести параграф с классом `seasonParagraph`, и текстом "Now is: " + значение переменной `currentSeason`.
5. Работаем с условным рендерингом.
 - объявляем в функции `App` (вне `return`), переменную `randomValue`, и присваиваем ей случайное значение (`Math.random`)
 - в блоке return, нужно обеспечить следующее: если randomValue > 0.5, то выводим заголовок `h1` с текстом `Heading1`, а иначе - выводим заголовок `h2` с текстом `Heading2`.
6. Создаем свой компонент. Для этого:
 - в папке src создаем подпапку `components`
 - в папке `components` создаем файл `SimpleParagraph.js`
 - в этом файле, наша задача - создать компонент, который отрендерит нам параграф с текстом `Hello From new component!`
7. Применяем созданный компонент в `App.js`. Нам нужно:
 - импортировать свежесозданный компонент (`import`)
 - отрендерить его (например, в самом низу нашего блока `return`). Важный момент! React не умеет возвращать несколько DOM-узлов (или компонентов), поэтому нам нужно ВЕСЬ возвращаемый результат обернуть в `<div></div`. То есть, мы должны гарантировать, что наша функция, в блоке return вернет нам ОДИН DOM-элемент или React-компонент.
8. Реализуем еще один компонент, `LoginForm`. Он должен рендерить нам несложную форму входа. Она содержит логин, пароль, и кнопку "Вход".
9. Поработаем с отрисовкой списков. Создаем новый компонент, `SimpleList`. В нем нам нужно отрисовать простой список. Его мы рисуем как `<ul>`. В компоненте ВНЕ return создаем массив `dataSet = ['Dwarwes', 'Hobbits', 'Orcs']` - это будет источник данных для нашего списка. Нужно, чтобы компонент возвращал ul, в котором будут li с наименованиями из массива.

### Полезные ссылки по занятию:
 - Описание [create-react-app](https://create-react-app.dev/).
 - Свежая [документация](https://react.dev/) по React. Имеет смысл посмотреть "по диагонали", погулять по сайту, и посмотреть на примеры.
 - React [основы](https://react.dev/learn). Рекомендуется просмотреть хотя бы до раздела "Responding to events".
 - Бесплатный курс [React.JS - Путь самурая](https://www.youtube.com/watch?v=gb7gMluAeao), от Димыча. Курс длинный, местами скучноватый, но дает отличное понимание о том, как в реакте многое работает "под капотом". Возможно, он сейчас уже устарел (курсу несколько лет), но базовые концепции реакта не поменялись, так что для ознакомления очень подходит. Можно смотреть на скорости х1.5.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
