function convertArea(value: number, baseUnit: string, unitToConvert: string) {
  const units: Units = {
    'km2': 1000000,
    'hm2': 10000,
    'dam2': 100,
    'm2': 1,
    'dm2': 0.01,
    'cm2': 0.0001,
    'mm2': 0.000001,
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

convertArea(1, 'hm2', 'm2');