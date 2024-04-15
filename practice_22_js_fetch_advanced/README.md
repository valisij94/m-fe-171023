## Практическое занятие №22

### Тема: Асинхронные операции.

Репозитарий содержит материалы по практическому занятию №22, посвященному работе с асинхронными операциями в JS.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
1. У нас есть функция `task1Demo`. В ней есть 2 промиса, каждый из которых возвращает "часть от целого". Нужно дождаться выполнения обеих промисов, и вывести в консоль сумму их результатов.
2. Освежаем в памяти нештатные ситуации. Пишем функцию `randomPromise`. Она должна возвращать промис, который будет завершен успехом или неуспехом, в зависимости от случайного значения. То есть, в функции нужно взять случайное значение (`Math.random()`), и если его значение меньше 0.5 - завершать возвращаемый промис успехом, а иначе - завершать неуспехом.
3. Работаем с нештатной ситуацией. У нас есть функция `task3Demo`, в ней также 2 промиса, но второй промис может быть завершен с ошибкой. Нужно построить такую логику, чтобы:
 - при успешном завершении обоих промисов, в консоли выводилась сумма результатов (как в предыдущей задаче)
 - в случае ошибки, в консоль выводилось "something went wrong!", и причина ошибки (то, что передается в `reject`)
 - вне зависимости от результата, чтобы в консоль выводилось "All promises are finished now!".
4. У нас есть функция `fastAndFurious`, которая готовит участников заезда. Она возвращает массив промисов, каждый из которых имитирует заезд на соревновании. Нужно определить победителя - то есть дождаться первого фиинишировавшего.
5. Пишем функцию добавления нового поста `addPost`. В аргументах она принимает:
 - title - заголовок поста
 - body - текст поста
 - userId - ID пользователя, создавшего пост

Она должна обратиться POST-запросом к адресу `https://jsonplaceholder.typicode.com/posts`, и в теле запроса передать объект со свойствами из аргументов. Объект нужно преобразовать в строку (`JSON.stringify`).
6. Пишем функцию удаления поста. Она должна принимать в аргументах ИД поста, и обращаться к адресу `https://jsonplaceholder.typicode.com/posts/POST_ID`, методом `DELETE`. В адресе нужно вместо POST_ID подставить ИД поста из аргумента.
7. Пишем свою функцию `sendJsonRequest` для отправки сетевого запроса (GET). Она должна принять в аргументе URL, к которому хотим обратиться, и вернуть ПРОМИС, который:
 - в случае успеха, будет зарезолвлен преобразованными в JSON данными с бэка
 - в случае неуспеха, будет вызван `reject`, с текстом ошибки.

### Полезные ссылки
 - [setTimeout, setInterval](https://learn.javascript.ru/settimeout-setinterval) - русскоязычный гайд по таймаутам и интервалам. Настоятельно рекомендуется к прочтению.
 - [Раздел про промисы](https://learn.javascript.ru/async) - это раздел учебника, посвященный промисам. Также настоятельно рекомендуется к прочтению - по этой теме стопроцентно будут вопросы на собеседованиях.