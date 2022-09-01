const division = (a, b) => {

  const promise = new Promise((resolve, reject) => {
    
    if (b === 0) reject(Error('Division by zero is impossible'));

    const result = a / b;
    resolve(result);

  });

  return promise;

};

division(5, 2).then(result => console.log(result)).catch(error => console.log(error.message));
