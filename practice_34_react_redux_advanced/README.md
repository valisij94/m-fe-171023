# README

## Практическое занятие №34

Репозитарий содержит материалы по практическому занятию №34, посвященному работе с библиотеками `Redux`, `react-redux`.

### Цели занятия
- закрепление знаний, полученных на лекции;
- разбор практических примеров;
- практическое применение полученных знаний.

### Задачи занятия
1. У нас есть страница со списком товаров, `ProductsPage`. Массив товаров хранится в редакс-стейте. Сейчас мы перезапрашиваем список товаров каждый раз, когда заходим в компонент. Давайте это исправим - сделаем так, чтобы товары запрашивались только в ситуации, когда у нас еще нет списка товаров в редакс-стейте.
2. Реализуем компонент для фильтрации товаров. Это будет компонент `ProductsFilter`. Пока что он будет содержать только выпадающее меню, для фильтра товаров по категориям. Нужно, чтобы данные фильтра хранились в редакс-стейте - то есть, нам предстоит создать еще один фрагмент стейта. Этот фрагмент стейта должен содержать объект, в котором будут настройки фильтра товаров. Пока что, будет только фильтр по категориям. И пока будет только один экшн `applyCategoryFilter`.
3. Реализовать применение фильтрации в компоненте `ProductsList`. Нужно взять данные фильтра из редакс-стейта, и показать только те товары, которые удовлетворяют критерию.
4. Усложняем - добавим в фильтрацию диапазон цен. То есть, в компонент `ProductsFilter` нужно добавить 2 инпута (цена от и цена до). Эти данные тоже будем хранить в редакс стейте, в том фрагменте, который отвечает за фильтрацию. Теперь тут будут еще свойства `minPrice`, `maxPrice`. Также, нужно добавить соответствующие экшны, и внести изменения в редьюсер.

### Полезные ссылки по занятию:
 - [React Redux](https://ru.react-redux.js.org/introduction/getting-started) - официальная русскоязычная(!) документация. О качестве перевода лучше не задумываться - чем богаты. Рекомендуется в качестве справочника. Есть очень толковые примеры.
 - [Описание React-Redux](https://medium.com/swlh/react-redux-hooks-5e5dbb52d057) - англоязычное, но рекомендуется к прочтению. Немало полезной информации о хуках, о том, как это работает "под капотом". Также там упоминается "старый" редакс, без хуков (`connect`). Имеет смысл ознакомиться - на собесах попадается.
 - [О работе редакс под капотом](https://ivaneroshkin.medium.com/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82-redux-a967d8616398) - это для глубокого понимания, как работает редакс, и для демонстрации того, что он НЕ зависит от реакта, и может использоваться в plain JS code.