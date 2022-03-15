let result;

// 1)

result = document.getElementById('elementoOndeVoceEsta');

console.log(result);

// 2)

const parentNode1 = document.getElementById('elementoOndeVoceEsta').parentNode

result = parentNode1.style.color = 'green';

// 3)

result = document.getElementsByTagName('section')[3].innerText = 'Adding a text';

console.log(result);

// 4)

const parentNode2 = document.getElementById('pai').firstElementChild;

result = parentNode2;

console.log(result);

// 5) 

result = document.getElementById('elementoOndeVoceEsta').previousElementSibling;


console.log(result);

// 6)

result = document.getElementById('elementoOndeVoceEsta').nextSibling;

console.log(result);

// 7)

result = document.getElementById('elementoOndeVoceEsta').nextElementSibling;

console.log(result);

// 8)

result = document.getElementById('pai').children[2];

console.log(result);