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
function generatePhoneNumber() {
  // seu código aqui
}

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
