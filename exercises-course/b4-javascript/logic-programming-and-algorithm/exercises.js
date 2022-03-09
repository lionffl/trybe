// Write a code that returns 10!

let result = 1;
let array = [];

for (let i = 1; i < 10; i++) {
    array.push(i);
}

for (let number of array) {
    result = result * number;
}

// or

// for (let j = 0; j < array.length; j++) {
//     result = result * array[j];
// }

console.log(array);
console.log(result);