const sumTwoNumbers = (number1, number2) => number1 + number2;

console.log(`Sum result is: ${sumTwoNumbers(5,3)}`);

const subTwoNumbers = (number1, number2) => number1 - number2;

console.log(`Sub result is: ${subTwoNumbers(5,3)}`);

const multiplyTwoNumbers = (number1, number2) => number1 * number2;

console.log(`Multiply result is ${multiplyTwoNumbers(5,3)}`);

const divideTwoNumbers = (number1, number2) => number1 / number2;

console.log(`Division result is: ${divideTwoNumbers(6,3)}`);

const getRemainderFromDivision = (number1, number2) => number1 % number2;

console.log(`Remainder is ${getRemainderFromDivision(5,3)}`);

const getLargestNumber = (number1, number2) => number1 > number2 ? number1 : number2;

console.log(`Largest number: ${getLargestNumber(5,3)}`);

const getLargestNumberBetween3 = (number1, number2, number3) => {
  if (number1 > number2 && number1 > number3) return number1;
  if (number2 > number1 && number2 > number3) return number2;
  return number3; 
}

console.log(`Largest number between the 3 numbers is: ${getLargestNumberBetween3(6,4,5)}`);
console.log(`Largest number between the 3 numbers is: ${getLargestNumberBetween3(5,4,15)}`);
console.log(`Largest number between the 3 numbers is: ${getLargestNumberBetween3(5,20,6)}`);

const isTriangleEdges = (edge1, edge2, edge3) => {
  const isAllEdgesPositive = edge1 > 0 && edge2 > 0 && edge3 > 0;
  const isAtriangle = edge1 + edge2 + edge3 === 180;
  if (!isAllEdgesPositive) throw new Error('All edges of a triangle must be a positive number.')
  if (isAtriangle) return true;
  return false;
}

console.log(isTriangleEdges(5,2,3))
console.log(isTriangleEdges(50,50,80))
// console.log(isTriangleEdges(0,2,3))
// console.log(isTriangleEdges(1,0,3))
// console.log(isTriangleEdges(5,2,0))

const verifyIfTheresAnEvenNumber = (number1, number2, number3) => number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 === 0 ? true : false; 

console.log(verifyIfTheresAnEvenNumber(2, 4, 6))
console.log(verifyIfTheresAnEvenNumber(3, 5, 7))
console.log(verifyIfTheresAnEvenNumber(2, 5, 3))

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

const getLargestNumberFromArray = (array) => {
  let largestNumber = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > largestNumber) largestNumber = array[index];
  }
  return largestNumber;
}

const getLargestNumberFromArrayWithReduce = (array) => array.reduce((initialValue, currentValue) => currentValue > initialValue ? currentValue : initialValue);

console.log(getLargestNumberFromArray(numbers));
console.log(getLargestNumberFromArrayWithReduce(numbers));

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';

console.log(info);

const keysOfInfo = Object.keys(info);

for (index in keysOfInfo) {
  console.log(keysOfInfo[index])
};

const valuesOfInfo = Object.values(info);

for (index in valuesOfInfo) {
  console.log(valuesOfInfo[index])
};

const leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

const livroDoisInfo = {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
};

const { nome, sobrenome, livrosFavoritos} = leitor;
livrosFavoritos.push(livroDoisInfo);

const [ livroUm, livroDois ] = livrosFavoritos;
const { titulo:tituloLivroUm } = livroUm;
const { titulo:tituloLivroDois } = livroDois;

console.log(`O livro favorito da ${nome} ${sobrenome} se chama ${tituloLivroUm}.`);
console.log(`O livro ${tituloLivroDois} tambem e' um favorito da ${nome} ${sobrenome}.`);
console.log(`${nome} tem ${livrosFavoritos.length} livros favoritos.`);

const array = [6, 6, 6, 5, 2, 4, 4, 4, 4, 4, 4, 8, 9, 9, 9, 9];

const getMostFrequentNumber = (array) => {
  let mostFrequentNumber;
  let higherFrequency = 0;

  array.forEach((value) => {
    let counter = 0;
    for (number of array) if (number === value) counter += 1;
    if (counter > higherFrequency) {
      higherFrequency = counter;
      mostFrequentNumber = value;
    }
  })
  return mostFrequentNumber;
}

console.log(getMostFrequentNumber(array));

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const fruits = ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'];

const arrayToObj = (array) => array.reduce((acc, cValue) => {
  acc[cValue] = cValue
  return acc;
}, {});


const countFruits = (array) => {
  let counter = 0;
  let totalFruits = [];
  const obj = arrayToObj(array);
  array.forEach((value) => {
   for (fruit of basket) {
    if (value === fruit) counter += 1;
   }
   obj[value] = counter;
   totalFruits.push(counter);
   counter = 0;
  })
  return obj;
}



console.log(countFruits(fruits));