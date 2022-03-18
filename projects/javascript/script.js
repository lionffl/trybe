
// Desafio 1
function compareTrue(a,b) {
    if (a === true && b === a) {
      return true;
    }
    return false 
  }
  
  // Desafio 2
  function calcArea(a,b) {
    let area = (a * b) / 2;
    return area;
  }
  
  // Desafio 3
  function splitSentence(sentence) {
    let array = sentence.split(" ");
    return array;
  }
  
  // Desafio 4
  function concatName(array) {
    let firstIndex = array[0];
    let lastIndex = array[(array.length - 1)];
    let sentence = `${lastIndex}, ${firstIndex}`;
    return sentence;
  }
  
  // Desafio 5
  function footballPoints(wins,ties) {
    let points = 0 + (3*wins) + (1*ties);
    return points;
  }
  
  // Desafio 6
  function highestCount(array) {
  
    let counter = 0;
    let arraySize = array.length
    let maxNumber = Number.MIN_SAFE_INTEGER;
  
  // Finding the max number
    for (let i = 0; i <= arraySize; i++) {
      if (array[i] > maxNumber) {
        maxNumber = array[i]
      }
    }
  // Counting how many times the max number appears
    for (let i = 0; i <= arraySize; i++) {
      if (array[i] === maxNumber) {
        counter++
      }
    }
     return counter;
  }
  
  // Desafio 7
  function catAndMouse(mouse,cat1,cat2) {
    let winner;
    let cat1MouseDistance = mouse - cat1;
    let cat2MouseDistance = mouse - cat2;
  
  // Checking if distance is a positive number
  
    if (cat1MouseDistance > 0) {
      cat1MouseDistance = cat1MouseDistance;
    } else { cat1MouseDistance = cat1MouseDistance * -1}
  
    if (cat2MouseDistance > 0) {
      cat2MouseDistance = cat2MouseDistance;
    } else { cat2MouseDistance = cat2MouseDistance * -1}
  
    // Checking winner
  
    if (cat1MouseDistance > cat2MouseDistance) {
      winner = 'cat2'
    } 
    else if (cat2MouseDistance > cat1MouseDistance){ 
      winner = 'cat1'
    } 
    else if (cat2MouseDistance === cat1MouseDistance) {
      winner = 'os gatos trombam e o rato foge';
    }
    return winner;
  }
  
  // Desafio 8
  function fizzBuzz(array) {
   let arrayResult = [];
   let arraySize = array.length;
  
   for (let i = 0; i <= arraySize; i++) {
    
    if (array[i] % 3 > 0 && array[i] % 5 > 0) {
      arrayResult.push("bug!");
    }
     else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
       arrayResult.push("fizzBuzz");
     }
     else if (array[i] % 3 === 0) {
       arrayResult.push("fizz");
     }
     else if (array[i] % 5 === 0) {
       arrayResult.push("buzz");
     }
   }
   return arrayResult;
  }
  
  // Desafio 9
  function encode(string) {
    let word = string;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let encodedVowels = ['1', '2', '3', '4', '5'];
    let arrayOfWordLetters = [];
    let encodedWord = '';
  
    for (let i = 0; i < word.length; i++) {
        arrayOfWordLetters.push(word[i]);
    }
  
  // Encoding...
  
    for (let i = 0; i < arrayOfWordLetters.length; i++) {
        for (let j = 0; j < arrayOfWordLetters.length; j++) {
            if (arrayOfWordLetters[i] === vowels[j]) {
                arrayOfWordLetters[i] = encodedVowels[j];
            } else { arrayOfWordLetters[i] = arrayOfWordLetters[i] }
        }
  }
  
  // Writting the encoded word (reconverting to string)
  
  for (let i = 0; i < arrayOfWordLetters.length; i++) {
      encodedWord = encodedWord + arrayOfWordLetters[i];
  }
  
  return encodedWord;
  
  }
    
  function decode(string) {
    let word = string;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let encodedVowels = ['1', '2', '3', '4', '5'];
    let arrayOfWordLetters = [];
    let decodedWord = '';
  
    for (let i = 0; i < word.length; i++) {
        console.log(word[i]);
        arrayOfWordLetters.push(word[i]);
    }
  
  // Decoding...
  
    for (let i = 0; i < arrayOfWordLetters.length; i++) {
        for (let j = 0; j < arrayOfWordLetters.length; j++) {
            if (arrayOfWordLetters[i] === encodedVowels[j]) {
                arrayOfWordLetters[i] = vowels[j];
            } else { arrayOfWordLetters[i] = arrayOfWordLetters[i] }
        }
  }
  
  // Writting the decoded word (reconverting to string)
  
    for (let i = 0; i < arrayOfWordLetters.length; i++) {
      decodedWord = decodedWord + arrayOfWordLetters[i];
  }
  
  return decodedWord;
  }
  
  // Desafio 10
  function techList(array,name) {
    let techList = [];
    let sortedArray = array.sort();
  
    for (let i = 0; i < sortedArray.length; i++) {
     let obj = {
       tech: `${sortedArray[i]}`,
       name: name,
     }
     techList.push(obj);
    }
  
  if (!techList.length) {  // ref: https://cibersistemas.pt/tecnologia/como-verificar-se-um-array-javascript-esta-vazio-ou-nao-com-length/
    return "Vazio!";
  } 
    return techList;
  }

  // Desafio 11

function generatePhoneNumber(array) {
    let arrayOfNumbers = array;
    let arrayOfNumbersSize = array.length;
  
  // Checking array size
  
    if (arrayOfNumbers.length !== 11) {
      return "Array com tamanho incorreto."
    }
  
  // Checking if any number inside the array is negative ou bigger then 9
  
    for (let i = 0; i < arrayOfNumbersSize; i++) {
      if (arrayOfNumbers[i] > 9 || arrayOfNumbers[i] < 0) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  // Checking if any number repeats more than 3 times
  
    for (let i = 0; i < arrayOfNumbersSize; i++) {
     let counter = 0; 
      for (let j = 0; j <= arrayOfNumbersSize; j++) {
      if (arrayOfNumbers[i] === arrayOfNumbers[j]) {
        counter++;
        }
      else if (counter === 3) {
        return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
  
    arrayOfNumbers.splice(0,0, '(').s;
    arrayOfNumbers.splice(3,0, ')');
    arrayOfNumbers.splice(4,0, ' ');
    arrayOfNumbers.splice(10,0, '-');
    arrayOfNumbersSize = arrayOfNumbers.length;
    let phoneNumber = '';
  
    for (let i = 0; i < arrayOfNumbersSize; i++) {
      phoneNumber = phoneNumber + arrayOfNumbers[i];
    }
    return phoneNumber;
    
  } 
  
  // Desafio 12
  function triangleCheck(lineA,lineB,lineC) {
    let isTriangle = true;
  
    if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
      isTriangle = true;
    }
    else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
      isTriangle = true;
    }
    else if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
      isTriangle = true;
    } else { isTriangle = false; }
  
    return isTriangle;
  }
  
  // Desafio 13
  
  function hydrate(string) {
    let array = [];
    let arrayOfNumbers = [];
    let cupOfWater = 0;    
    
    for (let i = 0; i < string.length; i++) {
      array.push(string[i])
    }
  
    for (let i = 0; i < array.length; i++) {
      if (Number.isInteger(parseInt(array[i]))) {
        arrayOfNumbers.push(array[i])
      }
    } 
  
    for (let number of arrayOfNumbers) {
      cupOfWater = cupOfWater + parseInt(number); 
    }
      
    switch (cupOfWater) {
        case 1:
            return `${cupOfWater} copo de água`;
        default:
            return `${cupOfWater} copos de água`; 
    }
  }