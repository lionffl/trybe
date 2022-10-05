type callback<T> = (item: T, index?: number, array?: T[]) => boolean;

function myFilter<T>(array: T[], fn: callback<T>): T[] {
  const filtredArray = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (fn(element, index, array)) {
      filtredArray.push(element);  
    }
  }
  return filtredArray;
}

const teste = myFilter([0, 1, 2], (a) => a > 1)

console.log(teste);