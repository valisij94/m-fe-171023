
// setTimeout( () => {
//   console.log('Delayed message');
// }, 5000);

/*
2. Делаем блок на странице, который будет запускать отложенное выполнение. Нужно сделать инпут, в который будем вводить задержку в секундах, и кнопку "Запуск". При нажатии на кнопку "Запуск", нужно через N секунд вывести сообщение "Delayed message". N - это кол-во секунд, введенное в инпуте.
*/

// const timerInputEl = document.querySelector('#timerInput');
// const timerBtnEl = document.querySelector('#timerStartBtn');

// timerBtnEl.addEventListener('click', () => {
//   setTimeout( () => {
//     console.log('Delayed message');
//   }, timerInputEl.value * 1000);
// });

/*
3. Дорабатываем наш блок. Добавляем кнопку "Отмена". Изначально она должна быть скрыта (рекомендуется воспользоваться CSS).
 - когда мы нажимаем на кнопку "Запуск", мы показываем кнопку "Отмена".
 - при нажатии на кнопку "Отмена", нам нужно отменить запланированное в `setTimeout` выполнение.
 - если выполнение все же произошло (т.е. функциональность внутри `setTimeout` выполнилась), то кнопку "Отмена" скрываем.
*/

// const timerInputEl = document.querySelector('#timerInput');
// const timerBtnEl = document.querySelector('#timerStartBtn');
// const timerCancelBtnEl = document.querySelector('#timerCancelBtn');
// let timerId = null;

// timerBtnEl.addEventListener('click', () => {
//   timerCancelBtnEl.style.visibility = 'visible';
//   timerId = setTimeout( () => {
//     console.log('Delayed message');
//     timerCancelBtnEl.style.visibility = 'hidden';
//   }, timerInputEl.value * 1000);
// });

// timerCancelBtnEl.addEventListener('click', () => {
//   if (timerId) {
//     clearTimeout(timerId);
//   }
//   timerCancelBtnEl.style.visibility = 'hidden';
// });

/*
4. Работаем с другой асинхронной операцией. Наша задача - каждые 5 секунд выводить в консоль сообщение "Прошло 5 секунд".
*/

// setInterval( () => {
//   console.log('5 seconds passed!')
// }, 5000);

/*
5. Добавляем на страницу текущие дату и время. Нужно добавить в разметку блок, в котором должны отображаться текущие дата и время, вида `01.01.2000 11:23:55`. И нужно сделать так, чтобы дата и время отображались актуальные (т.е. обновлять текст ежесекундно).
*/

// const timerEl = document.querySelector('#currentDateTimeText');
// timerEl.innerText = new Date().toLocaleString();

// setInterval( () => {
//   timerEl.innerText = new Date().toLocaleString();
// }, 1000);

/*
6. Реализуем простой секундомер. Нужно добавить в блок с id=`simpleTimerContainer` секундомер. В блоке будут:
 - параграф, в котором будем выводить текущее время секундомера
 - кнопка "Старт" - при нажатии запускаем секундомер
 - кнопка "Сброс" - при нажатии сбрасываем секундомер.
*/

// const startCounterBtnEl = document.querySelector('#counterStartBtn');
// const stopCounterBtnEl = document.querySelector('#counterStopBtn');
// const counterTextEl = document.querySelector('#counterValueText');
// let intervalId; // undefined

// startCounterBtnEl.addEventListener('click', () => {
//   intervalId = setInterval( () => {
//     counterTextEl.innerText = +counterTextEl.innerText + 1;
//   }, 1000);
// });

// stopCounterBtnEl.addEventListener('click', () => {
//   if (intervalId) {
//     clearInterval(intervalId);
//     counterTextEl.innerText = '0';
//   }
// });

/*
8. Работаем с промисами. Задача - написать промис, который через 5 секунд будет успешно завершен текстом "Successfully finished!". Этот текст нужно вывести в консоль.
*/

const myPromise = new Promise( (resolve, reject) => {
  setTimeout( () => {
    // говорим промису, что он должен быть успешно завершен,
    // с результатом 'Successfully finished!'
    //resolve('Successfully finished!');
    reject('Something went wrong!');
  }, 5000);
});

myPromise.then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log('Rejected!', error);
  }
);


const findProductById = (id) => {
    return new Promise((resolve, reject) => {
        let findProduct = data.find(product => product.id === id);

        if(findProduct){
            resolve(findProduct);
        }else {
            reject(`Product ${id} not found!`)
        }
    })
}