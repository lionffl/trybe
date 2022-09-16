const readline = require('readline-sync');
const { sum, div, mul, sub } = require('./operations');

console.log('Running Calculator...');
console.log('Below follow the math operations avaiable');

const operationsMenu = ['addition', 'subtraction', 'multiplication', 'division']
const operation = readline.keyInSelect(operationsMenu, 'Please, select an operation ');
const firstNumber = readline.questionInt('Please, select the first number ');
const secondNumber = readline.questionInt('Please, select the second number ');

const calculate = (operation) => {
  const options = {
    'addition': () => sum(firstNumber, secondNumber),
    'subtraction': () => div(firstNumber, secondNumber),
    'multiplication': () => mul(firstNumber, secondNumber),
    'division': () => sub(firstNumber, secondNumber)
  }
  return options[operationsMenu[operation]]();
};

calculate(operation);