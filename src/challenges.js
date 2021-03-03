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

// Desafio 6 - NÃO CONSEGUI SOLUCIONAR
function highestCount(arrNumbers) {}

// Desafio 7 Ok
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = mouse - cat1;
  let cat2Position = mouse - cat2;
  if (cat1Position > cat2Position) {
    return 'cat1';
  }
  if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}
// Desafio 7 - Teste ok
console.log(catAndMouse(10, 3, 2));
console.log(catAndMouse(10, 6, 12));
console.log(catAndMouse(10, 3, 3));

// Desafio 8 - NÃO CONSEGUI SOLUCIONAR
function fizzBuzz(arrFB) {}

// Desafio 9 - NÃO CONSEGUI SOLUCIONAR
function encode(strCode) {
  // seu códgio aqui
}
function decode() {
  // seu código aqui
}
