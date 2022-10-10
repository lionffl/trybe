function convertLength(value: number, baseUnit: string, unitToConvert: string) {
  const units: Units = {
    'km': 1000,
    'hm': 100,
    'dam': 10,
    'm': 1,
    'dm': 0.1,
    'cm': 0.01,
    'mm': 0.001,
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

convertLength(1, 'm', 'mm');
