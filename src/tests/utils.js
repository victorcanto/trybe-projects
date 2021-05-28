import pokemons from '../data';

export const getPokemon = (pokemonID) => {
  const int = parseInt(pokemonID, 10);
  return pokemons.find(({ id }) => id === int);
};

export const getLocationByPokemon = (pokemonID) => {
  const pokemon = getPokemon(pokemonID);
  return pokemon.foundAt.map(({ location }) => location);
};

export const getMapByPokemon = (pokemonID) => {
  const pokemon = getPokemon(pokemonID);
  return pokemon.foundAt.map(({ map }) => map);
};
