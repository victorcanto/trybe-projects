export async function fetchRecipes(key, domain, qtde) {
  const response = await fetch(`https://www.${domain}.com/api/json/v1/1/search.php?s=`);
  const data = await response.json();
  const results = data[key].slice(0, qtde);
  return results;
}

export async function fetchCategories(key, domain, qtde) {
  const response = await fetch(`https://www.${domain}.com/api/json/v1/1/list.php?c=list`);
  const data = await response.json();
  const results = data[key].slice(0, qtde);
  return results;
}
