const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) =>
({
  [product]: listPrices[index]
}));

const listProducts = updateProducts(products, prices);
console.log(listProducts);
// => [
//   { Arroz: 2.99 },
//   { Feijao: 3.99 },
//   { Alface: 1.5 },
//   { Tomate: 2 },
// ] 

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

// nome do livro - genero do livro - nome do autor

const makeNewArray = (array) => {
  return `${array.name} - ${array.genre} - ${array.author.name}`;
}

const newArray = books.map(makeNewArray);

console.log(newArray);

const makeNewArray2 = (array) => {
  return {
    age: array.releaseYear - array.author.birthYear,
    author: array.name,
  };
};

const sortArrayByAge = (array) => array.sort((x, y) => x.age - y.age);

const newArray2 = books.map(makeNewArray2);

console.log(sortArrayByAge(newArray2));

const filterByGenre = (array) => {
  return array.genre === 'Fantasia' || array.genre === 'Ficção Científica';
};

const newArray3 = books.filter(filterByGenre);

console.log(newArray3);

const orderArrayByAge = (array) => {
  return 2022 - array.releaseYear > 60;
};

const newArray4 = books.filter(orderArrayByAge);

const sortArrayByAge2 = (array) => array.sort((x, y) => x.releaseYear - y.releaseYear);

console.log(sortArrayByAge2(newArray4));

const arrayOfAuthors = (array) => {
    return array.author.name;
};

const newArray5 = newArray3.map(arrayOfAuthors);

console.log(newArray5.sort());

const arrayOfOldBooks = (array) => {
  return array.name;
};

const newArray6 = newArray4.map(arrayOfOldBooks);

console.log(newArray6);


const countPoint = (array, index) => {
  array[index].split(' ');
}

const newArray7 = books.map(arrayOfAuthors);

console.log(newArray7);

const expectedResult = 'O Senhor dos Anéis';

// function authorWith3DotsOnName() {
//   return books.find((book) => (
//     book.author.name.split(' ')
//       .filter((word) => word.endsWith('.')).length === 3
//   )).name;
// }

// console.log(authorWith3DotsOnName());