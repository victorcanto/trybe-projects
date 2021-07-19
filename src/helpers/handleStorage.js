function handleStorage(recipeDetails, type, foodOrDrink) {
  let duplicated = false;
  let savedRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const alcoholicOrNot = type.category === 'strAlcoholic' ? 'Alcoholic' : '';
  const area = recipeDetails.strArea || '';
  // if (type.category === 'strAlcoholic') alcoholicOrNot = 'Alcoholic';
  // if (recipeDetails.strArea) area = recipeDetails.strArea;

  const favoriteRecipe = {
    id: recipeDetails[`id${type.name}`],
    type: foodOrDrink.split('s')[0],
    area,
    category: recipeDetails.strCategory,
    alcoholicOrNot,
    name: recipeDetails[`str${type.name}`],
    image: recipeDetails[`str${type.name}Thumb`],
  };

  if (savedRecipes) {
    savedRecipes = savedRecipes.filter(({ id: recipeId }) => {
      const isNotDuplicated = recipeId !== recipeDetails[`id${type.name}`];
      if (!isNotDuplicated) duplicated = true;
      return isNotDuplicated;
    });
    console.log(duplicated);
    if (duplicated) {
      return localStorage.setItem('favoriteRecipes', JSON.stringify(savedRecipes));
    }

    return localStorage
      .setItem('favoriteRecipes', JSON.stringify([...savedRecipes, favoriteRecipe]));
  }
  localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteRecipe]));
}

export default handleStorage;
