// Considere the array below and answer the questions

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1) Print every value

for (let number of numbers) {
    console.log(number)
}

// or

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Print the sum result of all values

let sum = 0;

for (let number of numbers) {
    sum = sum + number;
}

console.log(sum);

// Print the average of all values

let average = sum / numbers.length;

console.log(average);

// Check if the average value is higher or lower than 20 and print the result

let higherThan20 = average > 20;

if (higherThan20) {
    console.log("The average is higher than 20.")
} else { console.log ("The average is lower than 20.")}

// Using for loop, print the higher value

let maxNumber = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i]
    }
}
console.log(maxNumber);

// Check if theres any odd number and print the amount.

let isOddCounter = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        isOddCounter++;
    }
}
console.log(isOddCounter);

// Using for loop, print the lower value

let minNumber = Number.MAX_SAFE_INTEGER;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < maxNumber) {
        maxNumber = numbers[i]
    }
}
console.log(maxNumber);

// Using for loop, define an array that contains from 1 to 25 and print

let arrayOfNumbers = [];

for (i = 0; i <= 25; i++) {
    arrayOfNumbers.push(i);
}
console.log(arrayOfNumbers);

// Using the array above, print the result of division by 2 of all the values

for (i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i] / 2);
}