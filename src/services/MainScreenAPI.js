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

export async function fetchRecipesByCategory(key, category, domain, qtd) {
  const response = await fetch(
    `https://www.${domain}.com/api/json/v1/1/filter.php?c=${category}`,
  );
  const data = await response.json();
  const results = data[key].slice(0, qtd);

  if (data.meals === null) throw new Error('Meals don\'t found');

  return results;
}
