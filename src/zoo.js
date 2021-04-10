/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/
const data = require('./data');

function animalsByIds(...ids) {
  return data.animals.filter(({ id }) => ids.includes(id));
}

function animalsOlderThan(animal, age) {
  const animalFound = data.animals.find(({ name }) => name === animal);
  return animalFound.residents.every(({ age: ageAnimal }) => ageAnimal >= age);
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(
    ({ firstName, lastName }) =>
      employeeName === firstName || employeeName === lastName,
  );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const add = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(add);
}

function animalCount(species) {
  const animalFound = data.animals.find(
    ({ name: nameOfSpecie }) => nameOfSpecie === species,
  );
  const namesAndQtde = data.animals.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
  if (!species) {
    return namesAndQtde;
  }
  return animalFound.residents.length;
}

// function entryCalculator(entrants) {
//   // seu código aqui
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  // entryCalculator,
  // schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
