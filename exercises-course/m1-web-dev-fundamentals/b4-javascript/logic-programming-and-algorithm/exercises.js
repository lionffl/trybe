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

let charMax = 0;
let charMin = Number.MAX_SAFE_INTEGER;
let biggerWord = "";
let smallerWord = "";

for (let i = 0; i < languages.length; i++) {
    if (languages[i].length > charMax) {
        charMax = languages[i].length;
        biggerWord = languages[i];
    } 
    else if (languages[i].length < charMin) {
        charMin = languages[i].length;
        smallerWord = languages[i];
    }
}

console.log(`Smaller word: ${smallerWord}`);
console.log(`Bigger word: ${biggerWord}`);

// Print the higher prime number between 0 and 50

let prime;

for (let i = 50; i >= 0; i--) {
    let counter = 0;    
    for (let j = 0; j <= 50; j++) {
        if (i % j === 0) {
            counter++;
        }
    }
    if (counter === 2) { 
        prime = i;
        break;
    }
}

console.log(prime);






