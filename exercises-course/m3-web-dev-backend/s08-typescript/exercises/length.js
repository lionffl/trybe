function convert(value, baseUnit, unitToConvert) {
    var units = {
        'km': 1000,
        'hm': 100,
        'dam': 10,
        'm': 1,
        'dm': 0.1,
        'cm': 0.01,
        'mm': 0.001
    };
    var operation = units[baseUnit] > units[unitToConvert] ? 'divide' : 'multiply';
    var operations = {
        'multiply': units[baseUnit] * units[unitToConvert],
        'divide': (units[baseUnit] * value) / units[unitToConvert]
    };
    var result = operations[operation];
    return result;
}

const teste = convert(1000, 'km', 'm');

console.log(teste);