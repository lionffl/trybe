interface Units {
  [index: string]: number;
}

interface Operations {
  [index: string]: number;
}

function convert(value: number, baseUnit: string, unitToConvert: string) {
  const units: Units = {
    'km': 1000,
    'hm': 100,
    'dam': 10,
    'm': 1,
    'dm': 0.1,
    'cm': 0.01,
    'mm': 0.001,
  };

  const operation: string = units[baseUnit] > units[unitToConvert] ? 'multiply' : 'divide';

  const operations: Operations = {
    'multiply': units[baseUnit] * units[unitToConvert],
    'divide': units[baseUnit] / units[unitToConvert],
  }

  const factor: number = operations[operation];
 
  return factor * value;
}