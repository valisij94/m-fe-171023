// код писать здесь!

//console.log('Hello World!');

// function customizedLog(text) {
//   console.log(text);
// }

// customizedLog('Timon!'); // window.customizedLog('Timon')

// 3rd task

// function customizedLog(text) {
//   console.log('Logged by Dev: ' + text);
//   //console.log(`Logged by Dev: ${text}`)
// }

// let functionResult = customizedLog('Simba!');
// console.log(functionResult)

// 4th task
function add(num1, num2) {
  return num1 + num2;
}

// 5th task
function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function handleAddBtnClick() {
  // 1. Find inputs via document.querySelector
  let input1 = document.querySelector('#numberFirst');
  let input2 = document.querySelector('#numberSecond');
  // 2. Get values from inputs
  let value1 = input1.value;
  let value2 = input2.value;
  // 3. Convert values into numbers
  // 4. Get the sum
  let result = +value1 + +value2;
  // 5. Print the result into console
  console.log(result);
}

function handleSubtractBtnClick() {
  // 1. Find inputs via document.querySelector
  let input1 = document.querySelector('#numberFirst');
  let input2 = document.querySelector('#numberSecond');
  // 2. Get values from inputs
  let value1 = input1.value;
  let value2 = input2.value;
  // 3. Convert values into numbers
  // 4. Get the sum
  let result = +value1 - +value2;
  // 5. Print the result into console
  console.log(result);
}
