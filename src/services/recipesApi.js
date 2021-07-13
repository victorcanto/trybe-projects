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

export default async function fetchRecipeById(id, key, domain) {
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
