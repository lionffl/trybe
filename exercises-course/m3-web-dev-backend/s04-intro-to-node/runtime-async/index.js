// const convert = require('./brValue');

// const usd = 10
// const brl = convert(usd);

// console.log(brl);

const { brl, usdToBrl } = require('./brValue');
const usd = 10

console.log(`BRL value is equal to ${brl}`);
console.log(`10 USD is equal to ${usdToBrl(usd)}BRL`);