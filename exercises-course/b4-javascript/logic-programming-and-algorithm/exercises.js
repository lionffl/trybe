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

// Print the reverse of word

let word = "tryber";
let sizeWord = word.length;
let newWord = "";

for (let i = sizeWord-1; i >= 0; i--) {
    newWord = newWord + word[i];
}

console.log(newWord);

// Consider the array below and print the bigger and the smaller words

let languages = ['java', 'javascript', 'python', 'html', 'css'];



// Print the higher prime number between 0 and 50