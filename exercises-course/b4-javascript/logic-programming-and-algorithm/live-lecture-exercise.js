// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma de 1 a 50 é: X.

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum = sum + i;
}

console.log(`A soma de 1 a 50 e' ${sum}.`)

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let counter = 0;
let a = 2;
let b = 150;


for (let i = a; i <= b; i++) {
    if (i % 3 === 0) {
        counter++;
    }
}

if (counter === 50) {
    console.log(`Mensagem secreta: entre ${a} e ${b} existem ${counter} divisores de 3.`)
} else { console.log(`Entre ${a} e ${b} existem ${counter} divisores de 3.`)
}


//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 


let moves = ["papel","tesoura","pedra"];
let playerOne = Math.floor(Math.random() * 3);
let playerTwo = Math.floor(Math.random() * 3);


switch (moves[playerOne]) {
    case "tesoura":
        if (moves[playerTwo] === "pedra"){
            console.log(`Player 1: "${moves[playerOne]}!`)
            console.log(`Player 2: "${moves[playerTwo]}!`)
            console.log("Player 2 won");
        } else if (moves[playerTwo] === "papel"){
            console.log(`Player 1: "${moves[playerOne]}!`)
            console.log(`Player 2: "${moves[playerTwo]}!`)
            console.log("Player 1 won");
        } else {
            console.log(`Player 1: "${moves[playerOne]}!`)
            console.log(`Player 2: "${moves[playerTwo]}!`)
            console.log("A tie");
        }
        break;
    case "pedra":
        if(moves[playerTwo] === "pedra"){
            console.log(`Player 1: "${moves[playerOne]}!`)
            console.log(`Player 2: "${moves[playerTwo]}!`)
            console.log("A tie");
        } else if (moves[playerTwo] === "papel"){
            console.log(`Player 1: "${moves[playerOne]}!`)
            console.log(`Player 2: "${moves[playerTwo]}!`)
            console.log("Player 2 won");
        } else {
            console.log(`Player 1: "${moves[playerOne]}!`)
            console.log(`Player 2: "${moves[playerTwo]}!`)
            console.log("Player 1 won");
        }
        break;

    case "papel":
        if(moves[playerTwo] === "pedra"){
            console.log(`Player 1: "${moves[playerOne]}!`)
            console.log(`Player 2: "${moves[playerTwo]}!`)
            console.log("Player 1 won");
        } else if (moves[playerTwo] === "papel"){
            console.log(`Player 1: "${moves[playerOne]}!`)
            console.log(`Player 2: "${moves[playerTwo]}!`)
            console.log("A tie");
        } else {
            console.log(`Player 1: "${moves[playerOne]}!`)
            console.log(`Player 2: "${moves[playerTwo]}!`)
            console.log("Player 2 won");
        }
        break;
}

// ​
//4. Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".

let age;
let minorCheck = 18;

age = 18;
if (minorCheck - age <= 0) {
    console.log(`A pessoa e' maior de idade.`);
} else { console.log(`A pessoa e' menor de idade.`)
}

// ​
//5. Crie um algoritmo que recebe a idade de Manu, Ana e Ronald e imprime quem é a mais nova no formato:
// "Pessoa" é a mais nova.

let manuAge = 19;
let anaAge = 18;
let ronaldAge = 20;
let younger;

if (manuAge > anaAge && anaAge < ronaldAge) {
    younger = "Ana";
} 
else if (manuAge < anaAge && manuAge < ronaldAge) {
    younger = "Manu";
} else { younger = "Ronald" }

switch(younger) {
    case "Manu":
        console.log(`Manu e' a mais jovem.`);
        break;
    case "Ana":
        console.log(`Ana e' a mais jovem.`);
        break;
    case "Ronald":
        console.log(`Ronald e' o mais jovem.`);
        break;
}