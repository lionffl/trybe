// Print a greeting for every person in the object bellow:

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let person in names) {
    console.log(`Hello ${names[person]}.`)
}

// Print keys and values of the object below:

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let spec in car) {
    console.log(spec, car[spec]);
}