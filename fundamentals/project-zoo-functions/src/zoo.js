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

function entryCalculator(entrants) {
  const objIsEmpty = (obj) => Object.keys(obj).length === 0;
  if (!entrants || objIsEmpty(entrants)) return 0;
  const { prices } = data;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const sumOfTotalPrice = Adult * prices.Adult + Child * prices.Child + Senior * prices.Senior;
  return sumOfTotalPrice;
}

// function animalMap(options) {
//   // seu código aqui
// }

// Funcoes auxiliares da funcao schedule()

const readableSchedule = () => {
  const { hours } = data;
  const arrHours = Object.entries(hours);
  return arrHours
    .reduce((acc, [key, value]) => {
      acc[key] = value.open !== 0
        ? `Open from ${value.open}am until ${value.close - 12}pm`
        : 'CLOSED';
      return acc;
    }, {});
};

const getDayAndTime = (dayName) => {
  const { hours } = data;
  const arrHours = Object.entries(hours);
  if (dayName !== 'Monday') {
    return arrHours.reduce((acc, [key, value]) => {
      if (key === dayName) {
        acc[dayName] = `Open from ${value.open}am until ${value.close - 12}pm`;
      }
      return acc;
    }, {});
  }
  return { [dayName]: 'CLOSED' };
};

function schedule(dayName) {
  if (!dayName) return readableSchedule();
  return getDayAndTime(dayName);
}

function oldestFromFirstSpecies(id) {
  const manager = data.employees.find(({ id: managerId }) => managerId === id);
  const identifiedAnimal = data.animals.find(
    ({ id: animalId }) => animalId === manager.responsibleFor[0],
  );
  const oldAnimalAge = identifiedAnimal.residents.reduce(
    (acc, { age }) => (acc > age ? acc : age),
    0,
  );
  const animalObj = identifiedAnimal.residents.find(
    ({ age }) => age === oldAnimalAge,
  );
  return [animalObj.name, animalObj.sex, animalObj.age];
}

function increasePrices(percentage) {
  const { prices } = data;
  const increase = percentage / 100 + 1;
  return Object.keys(data.prices).forEach((key) => {
    prices[key] = Number(parseFloat(prices[key] * increase + 0.005).toFixed(2));
  });
}

// Funcoes auxiliares da funcao employeeCoverage();

const createListOfEmployeesAndAnimals = () => {
  const { animals } = data;
  const { employees } = data;
  return employees
    .reduce((acc, { firstName, lastName, responsibleFor }) => {
      acc[`${firstName} ${lastName}`] = animals
        .filter(({ id }) => responsibleFor.includes(id))
        .map(({ name }) => name);
      return acc;
    }, {});
};

const findEmployee = (idOrName) => {
  const { employees } = data;
  return employees.find(({ id, firstName, lastName }) =>
    id === idOrName || firstName === idOrName || lastName === idOrName);
};

const createObjOfEmployeeAndAnimals = (idOrName) => {
  const { firstName, lastName, responsibleFor } = findEmployee(idOrName);
  const { animals } = data;
  return ({ [`${firstName} ${lastName}`]: animals
    .filter(({ id }) => responsibleFor.includes(id))
    .map(({ name }) => name) });
};

function employeeCoverage(idOrName) {
  if (idOrName === undefined) return createListOfEmployeesAndAnimals();
  return createObjOfEmployeeAndAnimals(idOrName);
}
// console.log(employeeCoverage('Azevado'));

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
