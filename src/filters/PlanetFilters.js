export default function filterPlanetsByName(planets, name) {
  if (planets.length) {
    return planets
      .filter(({ name: planetName }) => planetName
        .toLowerCase().includes(name.toLowerCase()));
  }
}
