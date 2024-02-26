let userInput = document.querySelector("#experienceInput");

function checkExperience(){
    const userInputValue = +userInput.value;
    if (userInputValue >0 && userInputValue <3) {
        console.log( "Вы приняты на должность Junior Developer!");

    } else if (userInputValue >=3 && userInputValue <=7) {
        console.log( "Вы приняты на должность Middle Developer!");
    } else {
        console.log( "Сеньоры нам тоже нужны!");
    }
}

/*
4. Добавим еще одну кнопку, "Надбавка". Напишем функцию `calculateBonus`. Она будет считать надбавку за стаж. Если стаж - 3 года, то надбавка - 10%. Если 5 - то 15%. Если 8 - то 20%, и если 10 - то 25%.
*/

function calculateBonus() {
    const inputValue = +userInput.value;

    // if (inputValue === 3) {
    //     console.log('Bonus 10%');
    // }
    // else if (inputValue === 5) {
    //     console.log('Bonus 15%');
    // }
    // else if (inputValue === 8) {
    //     console.log('Bouns 20%');
    // }
    // else if (inputValue === 10) {
    //     console.log('Bonus 25%');
    // }

    switch (inputValue) {
        case 3: { console.log('Bonus 10%'); break; }
        case 5: { console.log('Bonus 15%'); break; }
        case 8: { console.log('Bonus 20%'); break; }
        case 10: { console.log('Bonus 25%'); break; }
    }
}


const coinInput = document.querySelector('#machineInput');
let deposite = 0;

function putCoin() {
    const coin = +coinInput.value;
    deposite += coin;
    if (deposite >= 150) {
        console.log('Get your product!');
        deposite = 0;
    }
    coinInput.value = '';
}