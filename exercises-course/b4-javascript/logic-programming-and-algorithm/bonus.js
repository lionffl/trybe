// 1)

let n = 5;
let line = "";

for (let i = 0; i < n; i++) {
    line = line + "*";
}

for (let i = 0; i < n; i++) {
    console.log(line);
}



// 2)

line = "";

for (let i = 0; i < n; i++) {
    line = line + "*";
    console.log(line);
}

// 3)




// 4)





// 5)




// 6)

let divisors = 0;
let number = 3;

for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
        divisors++;
    }
}

if (divisors === 2 && number > 1) {
    console.log(`${number} is a prime number.`)
} else { console.log(`${number} is not a prime number.`)}