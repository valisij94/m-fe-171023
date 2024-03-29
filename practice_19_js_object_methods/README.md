## Практическое занятие №19

### Тема: Методы работы с объектами.

Репозитарий содержит материалы по практическому занятию №19, посвященному работе с объектами в JS.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
1. Пристрелочная задача. У нас есть объект `simpleObject`. Нужно создать его ГЛУБОКУЮ копию такими способами:
 - с использованием `spread`-оператора
 - с использованием `Object.assign`
 - с использованием сериализации и десериализации (JSON)
2. Усложняем задачу. Теперь нужно сделать глубокую копию объекта `complexObject`. Также, тремя способами.
3. Теперь поработаем с методами объектов. У нас есть объект `DEVELOPER_SKILLS`, который содержит данные о навыках программиста. Нужно создать массив, в котором будут содержаться только названия навыков (то есть, ключи объекта `DEVELOPER_SKILLS`), отсортировать его в алфавитном порядке, и вывести в консоль.
4. Теперь создаем массив объектов с данными навыках программиста (значения свойств объекта `DEVELOPER_SKILLS`), сортируем его по возрастанию навыка (`skil`), и выводим в консоль.
5. Нужно получить массив всех комментариев к навыкам. То есть, пройтись по свойствам объекта `DEVELOPER_SKILLS`, взять из каждого комментарий, и сложить в массив. Результат вывести в консоль.
6. Собираем данные по скиллам и комментариям. Нужно получить объект, где в качестве ключей будут использоваться названия навыков, а в качестве значений  - комментарии.
```
{
  javascript: 'Plain old JS',
  css: 'With preprocessors',
  react: 'Functional React'
}
```
7. Сделаем тренажер программистов. Пишем функцию `programmerHardSkillTrainer`. Она примет на вход объект-программиста. У него есть ОБЪЕКТ `skills`, где содержатся данные о его навыках, и уровень владения навыком. Нужно пройтись по значениям этого объекта, и для каждого навыка с `type = hardSkill` увеличить `skill` на 1. То есть, учим программиста программировать. При этом, нужно выводить в консоль протокол: вида "javascript skll had been increased!".
8. Теперь пишем функцию `getSoftSkills` - она должна определить софт-скиллы у программиста. Принимает на вход объект-программиста, и должна вернуть массив, который содержит названия навыков, у которых категория - `softSkill`.
9. И напишем функцию `getSkills`. Она будет определять суммарный навык программиста по навыкам в категории. В аргументах - все тот же программист. Задача - пройтись по его навыкам, и на выходе получить объект, в котором будут суммарные навыки по категориям.
```
const programmerObject = {
  name: 'Programmer',
  age: 35,
  skills: {
    javascript: {
      skill: 9,
      type: 'hardSkill'
    },
    react: {
      skill: 10,
      type: 'hardSkill'
    },
    communication: {
      skill: 7,
      type: 'softSkill'
    },
    attention: {
      skill: 8,
      type: 'softSkill'
    }
  }
};

const result = getSkills(programmerObject);
// Expected result:
// {
//    softSkill: 15,
//    hardSkill: 19
// }
```

### Полезные ссылки по занятию:
 - [spread, rest](https://learn.javascript.ru/rest-parameters-spread-operator) операторы.
 - Распространенные методы класса [Object](https://learn.javascript.ru/keys-values-entries)
 - Спецификация MDN для [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) - рекомендуется использовать как справочник