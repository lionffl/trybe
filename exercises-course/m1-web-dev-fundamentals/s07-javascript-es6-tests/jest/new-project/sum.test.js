const { 
  sum
} = require('./sum.js');

test('sums two values', () => {
  expect(sum(4, 5)).toEqual(9);
});

test('sums two values', () => {
  expect(sum(0, 0)).toEqual(0);
});

test('check if two values are numbers', () => {
  function sum() {
    sum(4, '5');
  }
  expect(sum).toThrow();
});

  //   expect(() => {
//     sum(4, '5');
//   }).toThrow();
// })