type callback<T> = (element: T, index?: number, array?: T[]) => boolean;

function myFilter<T>(array: T[], fn: callback<T>): T[] {
  const filtredArray: T[] = [];

  for (let index = 0; index < array.length; index++) {
    const element: T = array[index];

    if (fn(element, index, array)) {
      filtredArray.push(element);  
    }
  }
  return filtredArray;
}

const teste = myFilter([0, 1, 2], (a) => a > 1)

console.log(teste);