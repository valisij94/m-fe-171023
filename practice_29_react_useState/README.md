# README

## Практическое занятие №29

### Тема:

Репозитарий содержит материалы по практическому занятию №29, посвященному ознакомлению с фреймворком React.js - пропсы и состояние.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
1. Пристрелочная, на освежение в памяти стейта. Нужно создать простой счетчик кликов. В компоненте `App`, добавляем локальное состояние, которое будет хранить количество кликов. Изначально это 0. В сам компонент добавляем две кнопки, для увеличения и уменьшения на 1 значения счетчика.  И нужно добавить обработчики кликов на эти кнопки. Значение счетчика выводим в параграфе, под кнопками.
2. Усложним задачу. Предположим, мы теперь хотим хранить в локальном стейте не-примитивный объект. Пусть это будет массив строк. Инициализируем его списком дел (`Learn HTML`, `Learn CSS`, `Learn JS`). Нужно его отрисовать с использованием компонента `SimpleList`.
3. Дадим возможность добавлять дела. Нужно добавить в наш компонент `App` инпут с кнопкой. В инпут будем вводить имя дела, которое надо добавить. При клике на кнопку, нужно добавлять наше дело в массив в локальном стейте.
4. Добавим в компонент `App` кнопку "Удалить дело". При клике на эту кнопку, удаляем последнее добавленное дело.
5. Форма добавления дела просится в отдельный компонент. Создадим компонент `AddTodo`, в который перенесем наши инпут и кнопку. При этом, нам нужно сделать так, чтобы при нажатии на кнопку название дела передавалось в вышестоящий компонент. Здесь нам поможет передача функции-обработчика клика на кнопку через пропсы.
6. А теперь пришла пора дать возможность удалять дела прицельно. Нужно, чтобы при клике на элемент нашего списка, дело убиралось из массива. То есть, нам нужно передавать обработчик события клика в пропсах в наш список. Этот обработчик нам предстоит написать. Обработчик будет принимать название дела, и "убирать" его из стейта (то есть делать новый стейт, уже без этого дела). И нужно его суметь правильно передать в компонент `SimpleList`, и правильно там вызвать.
7. Расширим работу с локальным стейтом. Теперь нужно в форме добавления дела (`AddTodo`), добавить выпадающее меню "приоритет". Значения - "high", "medium", "low". Также нужно добавить инпут для ввода дополнительного комментария к делу.
8. Данные формы нужно хранить в локальном стейте. Нужно создать один объект, в котором ключами будут имена инпутов (`todoName`, `todoPriority`, `todoComment`), а значениями - значения инпутов.
9. У формы должна быть валидация. Нужно, чтобы ни одно из полей не было бы пустым. Валидацию запускаем при клике на кнопку в форме. Если хоть одно поле пустое - то при нажатии на кнопку нам нужно показать внизу параграф с текстом `Fill all fields!`.
10. Еще дорабатываем форму. Под каждым инпутом нам нужно добавить параграф, где будем показывать текст ошибки. И при валидации, нужно проверять поля, и выводить сообщение `Fill this field!` под конкретным пустым полем. Рекомендуется усложнить состояние нашей формы - и вместо примитивов в значениях, теперь хранить объекты следующей структуры: `{ value: 'Learn React', error: ''}`, то есть чтобы каждый инпут хранил свое сообщение об ошибке.

### Полезные ссылки по занятию:
 - [Пропсы](https://www.w3schools.com/react/react_props.asp) - англоязычные, но заслуживают внимания.
 - Старая [документация](https://legacy.reactjs.org/docs/components-and-props.html) React. Хоть и помечена как устаревшая, но еще вполне актуальная. Можно просмотреть по диагонали.
  - [React State](https://react.dev/learn/state-a-components-memory) - англоязычная подробная документация по `useState`.
 - [React useState](https://dmitripavlutin.com/react-usestate-hook-guide/#1-state-management-using-usestate) - еще англоязычная статья про `useState`. Там более подробно, но и чуть сложнее для понимания.
 - Старая [документация](https://legacy.reactjs.org/docs/components-and-props.html) React. Хоть и помечена как устаревшая, но еще вполне актуальная. Можно просмотреть по диагонали.
