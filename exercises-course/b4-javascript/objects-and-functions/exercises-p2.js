// 1)

function palidCheck(string) {
    for (let letter in string) {
        if (string[letter] === string[string.length - 1]) {
            return true;
        } else { return false }
    }
}

console.log(palidCheck('arara'));


// 2)Array de teste: [2, 3, 6, 7, 10, 1];

function higherIndex(array) {
    let highValue = array[0];
    // let highIndex = 0; 
    for (let number in array) {
        if (array[number] > highValue) {
            highValue = array[number];
            // highIndex = number;
        } else { highValue = highValue }
    }
    return array.indexOf(highValue,0);
    // return highIndex;
}

console.log(higherIndex([2, 3, 20, 7, 10, 50]));

// 3)Array de teste: [2, 4, 6, 7, 10, 0, -3];

function smallerIndex(array) {
    let smallerValue = array[0];
    for (let number in array) {
        if (array[number] < smallerValue) {
            smallerValue = array[number];
        } else { smallerValue = smallerValue }
    }
    return array.indexOf(smallerValue,0);
}

console.log(smallerIndex([2, 4, 6, 7, 10, 0, -3]));

// 4)  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function biggerName(array) {
    let biggerLength = array[0].length;
    let biggerName;
    for (let size in array) {
        if (array[size].length > biggerLength ) {
            biggerLength = array[size].length;
            biggerName = array[size]; 
        } else { biggerLength = biggerLength }
    }
    return biggerName;
}

console.log(biggerName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5) [2, 3, 2, 5, 8, 2, 3]

function mostPresent(array) {
    let arrayOfHits = [];

    for (let i = 0; i < array.length ; i++) {
        let counter = 0;
        for (let j = 0; j < array.length ; j++) {
            if (array[i] === array[j]) {
                counter++;
            }  
        } 
        arrayOfHits.push(counter);
    }
    let maxNumber = arrayOfHits[0];
    let indexOfMax = 0;
    for (let number in arrayOfHits) {
        if (arrayOfHits[number] > maxNumber) {
            maxNumber = arrayOfHits[number];
            indexOfMax = number;
        } else { maxNumber = maxNumber}
    }
    return array[indexOfMax];
}

console.log(mostPresent([2, 3, 2, 5, 8, 2, 3]));

// 6)

function sumAll(positiveNumber) {
    if (positiveNumber < 0) {
        positiveNumber = positiveNumber * -1;
    } else { positiveNumber = positiveNumber; }
    
    let arrayOfNumbers = [];
    let result = 0;

    for (let i = 1; i <= positiveNumber; i++) {
         arrayOfNumbers.push(i);
    }

    for (let number of arrayOfNumbers) {
        result = result + number;
    }
    return result;
}

console.log(sumAll(5));

// 7)