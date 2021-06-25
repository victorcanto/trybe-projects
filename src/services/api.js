const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchApi() {
  const response = await fetch(API_URL);
  const { results } = await response.json();
  return results;
}

export default fetchApi;
