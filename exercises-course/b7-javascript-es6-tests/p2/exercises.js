// 1)

const fator = number => number === 1 ? 1 : number * fator(number - 1);

console.log(fator(5));

// 2

const longestWord = word => {
  const array = word.split(' ');
  let bigger = array[0];
  for (const word of array) {
    word.length > bigger.length
    bigger = word;
  }
  return console.log(bigger);
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// 3

const btn = document.getElementById('btn-counter');
const number = document.getElementById('number');
let counter = 0;

btn.addEventListener('click', () => {
  counter += 1;
  number.innerHTML = counter;
})

// 4

const skills = ['Unix', 'HTML', 'CSS', 'Javascript', 'SQL'];

const replaceX = (string1, string2) => {
  const result = string1.replace('x',string2)
  return result;
}
console.log(replaceX('Tryber x aqui!', 'Bebeto'));

const constructor = (string1,array) => {
  let result;
  array.sort(); 
  
  result = `${replaceX('Tryber x aqui!', string1)} Minhas cinco principais habilidades sao:
  ${array}.`;

  return result;
}

console.log(constructor('Felipe',skills));
