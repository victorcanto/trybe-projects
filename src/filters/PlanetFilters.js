const maiorQue = 'maior que';
const menorQue = 'menor que';
const igualA = 'igual a';

export function filterPlanetsByName(planets, name) {
  if (planets.length) {
    return planets
      .filter(({ name: planetName }) => planetName
        .toLowerCase().includes(name.toLowerCase()));
  }
}

export function filterPlanetsByValues(planets, column, comparison, value) {
  if (planets.length) {
    switch (comparison) {
    case maiorQue:
      return planets.filter((planet) => planet[column] > Number(value));
    case menorQue:
      return planets.filter((planet) => planet[column] < Number(value));
    case igualA:
      return planets.filter((planet) => planet[column] === value);
    default:
    }
  }
}
