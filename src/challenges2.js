// Desafio 10
function techList(arrTechList, name) {
  if (arrTechList.length === 0) {
    return 'Vazio!';
  }
  let listOfTechs = [];
  arrTechList.sort();

  for (let index in arrTechList) {
    listOfTechs.push({
      tech: arrTechList[index],
      name,
    });
  }
  return listOfTechs;
}
// Desafio 10 - Teste
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(arrNumbers) {
  let phoneNumber = '';
  if (arrNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrNumbers.length; index += 1) {
    let repeatCounter = 0;
    for (
      let indexRepeatCounter = 0;
      indexRepeatCounter < arrNumbers.length;
      indexRepeatCounter += 1
    ) {
      if (arrNumbers[index] === arrNumbers[indexRepeatCounter]) {
        repeatCounter += 1;
      }
      if (arrNumbers[indexRepeatCounter] < 0 || arrNumbers[indexRepeatCounter] > 9 || repeatCounter >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      } else {
        phoneNumber = `(${arrNumbers[0]}${arrNumbers[1]}) ${arrNumbers[2]}${arrNumbers[3]}${arrNumbers[4]}${arrNumbers[5]}${arrNumbers[6]}-${arrNumbers[7]}${arrNumbers[8]}${arrNumbers[9]}${arrNumbers[10]}`;
      }
    }
  }
  return phoneNumber;
}
// Desafio 11 - Teste
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};