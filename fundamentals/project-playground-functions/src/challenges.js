// Desafio 1 - OK
function compareTrue(boo1, boo2) {
  if (boo1 === true && boo2 === true) {
    return true;
  }
  if (boo1 === false && boo2 === false) {
    return false;
  }
  return false;
}
// Desafio 1 - Teste ok
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2 - OK
function calcArea(base, height) {
  let areaTriangle = (base * height) / 2;
  return areaTriangle;
}
// Desafio 2 - Teste ok
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3 - Ok
function splitSentence(str) {
  return str.split(' ');
}
// Desafio 3 - Teste ok

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4 - OK
function concatName(arr) {
  let firstItem = arr[0];
  let lastItem = arr[arr.length - 1];

  return `${lastItem}, ${firstItem}`;
}
// Desafio 4 - Teste ok
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5 - Ok
function footballPoints(wins, ties) {
  let victoryPoints = wins * 3;
  let tiePoints = ties;
  let totalPoints = victoryPoints + tiePoints;
  return totalPoints;
}
// Desafio 5 - Teste ok
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6 - ok
// Link do vídeo sobre linguagem C que me ajudou a resolver este desafio: https://youtu.be/pkJXwPvselI
function getMaxNumbersAux(maxNumbers, arrNumbers) {
  for (let number of arrNumbers) {
    if (number > maxNumbers) {
      maxNumbers = number;
    }
  }
  return maxNumbers;
}

function getRepeatCounterAux(repeatCounter, arrNumbers, max) {
  for (let number of arrNumbers) {
    if (number === max) {
      repeatCounter += 1;
    }
  }
  return repeatCounter;
}

function highestCount(arrNumbers) {
  let maxNumbers = arrNumbers[0];
  let repeatCounter = 0;

  const max = getMaxNumbersAux(maxNumbers, arrNumbers);
  const counter = getRepeatCounterAux(repeatCounter, arrNumbers, max);

  return counter;
}
// Desafio 6 - Teste ok
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7 Ok
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(mouse - cat1);
  let cat2Position = Math.abs(mouse - cat2);
  if (cat1Position > cat2Position) {
    return 'cat2';
  }
  if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
}
// Desafio 7 - Teste ok
console.log(catAndMouse(10, 3, 2));
console.log(catAndMouse(10, 6, 12));
console.log(catAndMouse(10, 3, 3));

// Desafio 8 ok
function auxFizzBuzz(FB, newArrFB) {
  switch (true) {
  case FB % 3 === 0 && FB % 5 === 0:
    FB = newArrFB.push('fizzBuzz');
    break;
  case FB % 3 === 0:
    FB = newArrFB.push('fizz');
    break;
  case FB % 5 === 0:
    FB = newArrFB.push('buzz');
    break;
  default:
    FB = newArrFB.push('bug!');
  }
}
function fizzBuzz(arrFB) {
  let newArrFB = [];
  for (let FB of arrFB) {
    auxFizzBuzz(FB, newArrFB);
  }
  return newArrFB;
}
// Desafio 8 - Teste ok
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encodeAux(letter) {
  let vowel = letter;
  const vowelAndNumbers = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let prop in vowelAndNumbers) {
    if (letter === prop) {
      vowel = vowelAndNumbers[prop];
    }
  }
  return vowel;
}

function encode(strCode) {
  let encoded = '';
  for (let letter of strCode) {
    encoded += encodeAux(letter);
  }
  return encoded;
}
// Teste encode
console.log(encode('hi there!'));

function decodeAux(n) {
  let number = n;
  const numbersAndVowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let prop in numbersAndVowels) {
    if (n === prop) {
      number = numbersAndVowels[prop];
    }
  }
  return number;
}

function decode(strDecode) {
  let decoded = '';

  for (let number of strDecode) {
    decoded += decodeAux(number);
  }

  return decoded;
}
// Teste decode
console.log(decode('h3 th2r2!'));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
