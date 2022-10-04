function convertCapacity(value: number, baseUnit: string, unitToConvert: string) {
  const units: Units = {
    'kl': 1000,
    'hl': 100,
    'dal2': 10,
    'l': 1,
    'dl': 0.1,
    'cl': 0.01,
    'ml': 0.001,
  };

  const operation = units[baseUnit] > units[unitToConvert] && units[baseUnit] > 1 ? 'multiply' : 'divide';

  const operations: Operations = {
    'multiply': units[baseUnit] * units[unitToConvert],
    'divide': units[baseUnit] / units[unitToConvert],
  }

  const factor: number = operations[operation];
  
  const result: number = factor * value;
  
  console.log(result);
  
  return result;
}

convertCapacity(1, 'l', 'ml');