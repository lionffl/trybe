function convertMass(value: number, baseUnit: string, unitToConvert: string) {
  const units: Units = {
    'kg': 1000,
    'hg': 100,
    'dag': 10,
    'g': 1,
    'dg': 0.1,
    'cg': 0.01,
    'mg': 0.001,
  };

  const operation = units[baseUnit] > units[unitToConvert] && units[baseUnit] > 1 ? 'multiply' : 'divide';

  const operations: Operations = {
    'multiply': units[baseUnit] * units[unitToConvert],
    'divide': units[baseUnit] / units[unitToConvert],
  }

  const factor: number = operations[operation];
  
  const result = factor * value;
  
  console.log(result);
  
  return result;
}

convertMass(1, 'kg', 'g');