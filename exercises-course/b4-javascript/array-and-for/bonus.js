// Sort the numbers (ascending order) of the following array

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersSize = numbers.length;

console.log(numbers)
for (let i = 0; i < numbersSize; i++) {
    for (let j = 0; j < numbersSize; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }  
    }
}

console.log(numbers);

// Sort the numbers (descending order) of the following array

console.log(numbers)
for (let i = 0; i < numbersSize; i++) {
    for (let j = 0; j < numbersSize; j++) {
        if (numbers[j] < numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }  
    }
}

console.log(numbers);

// New array

let newArray = [];
let newNumber;
let check; 
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbersSize; i++) {
    check = false;
    for (let j = 0; j < numbersSize; j++) {
        if (j === numbersSize - 1 && check === false) {
            newNumber = numbers[j] * 2;
            newArray.push(newNumber);
            check = true;
            break;
        } else if (j !== numbersSize - 1 && check === false) { 
            newNumber = numbers[j] * numbers[j + 1];
            newArray.push(newNumber);
            check = true;
        } 
        check = false;
    }
    break;
}

console.log(newArray);

// To solve the problems above I have used as support the follow content:

// https://flexiple.com/bubble-sort-javascript/
