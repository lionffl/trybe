const readline = require('readline-sync');

const fibonacci = (n) => {
  let result = console.log('Invalid number');
  if (n === 0) return result;
  let x = 0;
  let y = 1;
  let counter = 1
  result = [];
  let sum;

 while (counter <= n) {
  sum = x + y;
  result.push(sum);
  y = x
  x = sum
  counter++
 }
  console.log(result);
};

const number = readline.questionInt('Enter a number greater than zero: ');

fibonacci(number);