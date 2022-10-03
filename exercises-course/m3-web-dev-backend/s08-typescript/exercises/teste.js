function convert(value, baseUnit, unitToConvert) {
  const units = {
    'km': 1000,
    'hm': 100,
    'dam': 10,
    'm': 1,
    'dm': 0.1,
    'cm': 0.01,
    'mm': 0.001,
  };

  const operation = units[baseUnit] > units[unitToConvert] ? 'multiply' : 'divide';

  const operations = {
    'multiply': units[baseUnit] * units[unitToConvert],
    'divide': units[baseUnit] / units[unitToConvert],
  }

  const factor = operations[operation];
 
  return factor * value;
}

const teste = convert(1, 'm', 'm');

