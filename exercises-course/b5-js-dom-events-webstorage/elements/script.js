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

// 9)

const paiDoElementoOndeVoceEsta = document.getElementById('pai');

const paragraph = document.createElement('p');

paragraph.innerText = "This is a paragraph."

paiDoElementoOndeVoceEsta.appendChild(paragraph);

// 10)

const filhoDoElementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const headTitle = document.createElement('h1');

headTitle.innerText = "This is a h1 title.";

filhoDoElementoOndeVoceEsta.appendChild(headTitle);

// 11)

const bisneto = document.getElementById('primeiroFilhoDoFilho');

const bisnetoDiv = document.createElement('div');

bisnetoDiv.innerText = "This is a div.";

bisneto.appendChild(bisnetoDiv);

// 12 )

const paiDoBisneto = document.getElementById('primeiroFilhoDoFilho').parentNode;

result = paiDoBisneto.nextElementSibling;

console.log(result);

// 13)

let pai = document.getElementById('elementoOndeVoceEsta');

let filhoRemovido = document.getElementById('segundoEUltimoFilhoDoFilho');

pai.removeChild(filhoRemovido);

pai = document.getElementById('pai');

filhoRemovido = document.getElementById('primeiroFilho');

pai.removeChild(filhoRemovido);

filhoRemovido = document.getElementById('terceiroFilho');

pai.removeChild(filhoRemovido);

filhoRemovido = document.getElementById('quartoEUltimoFilho');

pai.removeChild(filhoRemovido);

