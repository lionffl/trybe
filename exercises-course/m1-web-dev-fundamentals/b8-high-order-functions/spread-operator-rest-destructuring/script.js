const numbers = [1, 2, 3, 4];

console.log(Math.max(...numbers));

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'maca'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leiteEmPo', 'leiteNinho', 'nescau'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));