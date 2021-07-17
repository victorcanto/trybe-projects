const FILTER_FOODS_API = 'https://www.themealdb.com/api/json/v1/1/filter.php';
const FILTER_DRINKS_API = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php';

export async function fetchRecipes(domain, key, amount) {
  const response = await fetch(`https://www.${domain}.com/api/json/v1/1/search.php?s=`);
  const data = await response.json();
  const results = data[key].slice(0, amount);
  return results;
}

export async function fetchCategories(domain, key, amount) {
  const response = await fetch(`https://www.${domain}.com/api/json/v1/1/list.php?c=list`);
  const data = await response.json();
  const results = data[key].slice(0, amount);
  return results;
}

export async function fetchIngredient({ key, domain }) {
  const response = await fetch(`https://www.${domain}.com/api/json/v1/1/list.php?i=list`);
  const data = await response.json();
  const qtd = 12;
  const results = data[key].slice(0, qtd);
  return results;
}

export async function fetchRecipesByCategory(domain, key, category) {
  const RECIPES_AMOUNT = 12;
  const response = await fetch(
    `https://www.${domain}.com/api/json/v1/1/filter.php?c=${category}`,
  );
  const data = await response.json();
  const results = data[key].slice(0, RECIPES_AMOUNT);

  if (data.meals === null) throw new Error('Meals don\'t found');

  return results;
}

export default async function fetchRecipeById(domain, key, id) {
  const response = await fetch(
    `https://www.${domain}.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const data = await response.json();
  const results = data[key];
  return results;
}

export async function fetchRandomApiFood() {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/random.php',
  );
  const { meals } = await response.json();
  return meals[0];
}

export async function fetchRandomApiDrink() {
  const response = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/random.php',
  );
  const { drinks } = await response.json();
  return drinks[0];
}

export const filterIngredient = async (query, currentPage) => {
  const INGREDIENT_API = currentPage === 'Drinks'
    ? FILTER_DRINKS_API
    : FILTER_FOODS_API;
  const api = await fetch(`${INGREDIENT_API}?i=${query}`);
  const result = await api.json();
  return result;
};

export const filterName = async (query, currentPage) => {
  const SEARCH_BASE_API = currentPage === 'Foods'
    ? 'https://www.themealdb.com/api/json/v1/1/search.php'
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

  const api = await fetch(`${SEARCH_BASE_API}?s=${query}`);
  const result = await api.json();
  return result;
};

export const filterFirstLetter = async (query, currentPage) => {
  const SEARCH_BASE_API = currentPage === 'Foods'
    ? 'https://www.themealdb.com/api/json/v1/1/search.php'
    : 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

  const api = await fetch(`${SEARCH_BASE_API}?f=${query}`);
  const result = await api.json();
  return result;
};

export const filterCategory = async (query, currentPage) => {
  const CATEGORY_API = currentPage === 'Foods'
    ? FILTER_FOODS_API
    : FILTER_DRINKS_API;
  const api = await fetch(`${CATEGORY_API}?c=${query}`);
  const result = await api.json();
  return result;
};

export async function fetchArea() {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
  const response = await fetch(URL);
  const data = await response.json();
  return data.meals;
}
