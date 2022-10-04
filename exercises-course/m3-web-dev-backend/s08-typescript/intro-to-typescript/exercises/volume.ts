function convertVolume(value: number, baseUnit: string, unitToConvert: string) {
  const units: Units = {
    'km3': 1000000000,
    'hm3': 1000000,
    'dam3': 1000,
    'm3': 1,
    'dm3': 0.001,
    'cm3': 0.000001,
    'mm3': 0.000000001,
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

convertVolume(1, 'm3', 'mm3');