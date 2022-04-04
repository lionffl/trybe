let errorMessage;

function verifyIsNumber(value1, value2) {
  if (isNaN(value1) || isNaN(value2)) {
    errorMessage = 'Please, fill with a number.'
    throw new Error(errorMessage);
  }
}

function verifyIsNull(value1, value2) {
  if (!value1 || !value2) {
    errorMessage = 'You need to define both values.'
    throw new Error(errorMessage);
  } 
}

function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;

  try {
    verifyIsNumber(value1, value2);
    verifyIsNull(value1,value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } catch (e) {
    document.getElementById('result').innerHTML = `Resultado: ${errorMessage}`;
    throw e.message;
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}