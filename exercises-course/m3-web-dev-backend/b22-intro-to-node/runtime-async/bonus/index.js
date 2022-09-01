const calc = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    const checkTypeNumber = typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number';
    if (checkTypeNumber) reject(Error('Not a number'))
    const checkMinimunValue = ((a + b) * c) < 50;
    if (checkMinimunValue) reject(Error('Value is too low'))
    const result = (a + b) * c;
    resolve(result);
  })
  return promise;
};

const firstRun = async () => {
  try {
    const result = await calc(5, 3, 1);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

firstRun();

const secondRun = async () => {
  try {
    const result = await calc(50, 23, 1);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

secondRun();

const thirdRun = async () => {
  try {
    const result = await calc(5, 'b', 1);
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};

thirdRun();
