export default async function fetchRecipeById(id, key, domain) {
  const response = await fetch(
    `https://www.${domain}.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  const data = await response.json();
  const results = data[key];
  return results;
}
