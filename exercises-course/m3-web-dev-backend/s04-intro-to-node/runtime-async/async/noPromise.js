const division = (a, b) => {
  if (b === 0) throw new Error('Division by 0 is impossible.')

  const result = a / b;

  return result;
}

try {
  console.log(division(5, 2));
} catch (error) {
  console.log(error.message);
}


