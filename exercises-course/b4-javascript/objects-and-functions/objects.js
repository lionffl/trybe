// Write an object that contains the following variables:

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let person = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    },
}

// Print the sentence: "Player Marta Silva is 34 old age."

console.log(`Player ${person.name} ${person.lastName} is ${person.age} old age.`);

// Include in object created a key named bestInTheWorld as an array and insert dates

person.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// Print the sentence: "Player Marta Silva was the best player in the world 6 times."

console.log(`Play ${person.name} ${person.lastName} was the best player in the world ${person.bestInTheWorld.length} times.`);

// Print the sentence: "The player got 2 gold medals and 3 silver medals."

console.log(`The player got ${person.medals.golden} gold medals and ${person.medals.silver} silver medals.`)
