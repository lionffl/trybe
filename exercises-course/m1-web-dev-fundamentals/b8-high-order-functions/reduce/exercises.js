const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, cValue) => acc.concat(cValue));
}

console.log(flatten())

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((acc, cValue) => `${acc + cValue.author.name}, `, '')
}

console.log(reduceNames());

// const expectedResult = 43;

function averageAge() {
  return (books.reduce(
    (acc, cValue) => acc + cValue.releaseYear - cValue.author.birthYear, 0)) / books.length;
}

console.log(averageAge());


const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((acc, cValue) => acc.name.length > cValue.name.length ? acc : cValue)
}

// console.log(longestNamedBook());

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  let counter = 0;
  names.forEach((value) => {
    counter += (value.match(/a/g) || []).length + (value.match(/A/g) || []).length;
  })
  return counter;
}

// console.log(containsA())



const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  let averages = [];
  grades.forEach((value) => {
    averages.push(value.reduce((acc, cValue) => acc + cValue) / value.length);
  })
  return students.reduce((acc, cValue, index) => {
    const obj = {
      name: cValue,
      average: averages[index]
    }
    acc.push(obj);
    return acc;
  }, [])
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage());

// const n = [2, 2, 3, 2, 1];

// const average = (n.reduce((acc, cValue) => acc + cValue)) / n.length;

// console.log(average)