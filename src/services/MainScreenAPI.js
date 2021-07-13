export async function fetchRecipes(key, domain, qtd) {
  const response = await fetch(`https://www.${domain}.com/api/json/v1/1/search.php?s=`);
  const data = await response.json();
  const results = data[key].slice(0, qtd);
  return results;
}

export async function fetchCategories(key, domain, qtd) {
  const response = await fetch(`https://www.${domain}.com/api/json/v1/1/list.php?c=list`);
  const data = await response.json();
  const results = data[key].slice(0, qtd);
  return results;
}

export async function fetchIngredient({ key, domain }) {
  const response = await fetch(`https://www.${domain}.com/api/json/v1/1/list.php?i=list`);
  const data = await response.json();
  const qtd = 12;
  const results = data[key].slice(0, qtd);
  return results;
}

export async function fetchRecipesByCategory(key, category, domain, qtd) {
  const response = await fetch(
    `https://www.${domain}.com/api/json/v1/1/filter.php?c=${category}`,
  );
  const data = await response.json();
  const results = data[key].slice(0, qtd);

  if (data.meals === null) throw new Error('Meals don\'t found');

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
