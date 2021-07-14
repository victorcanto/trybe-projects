import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import FilterButtons from './components/FilterButtons';
import styles from './favorite.module.scss';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function FavoriteScreen() {
  const FAVORITE_RECIPES = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [filteredRecipes, setFilteredRecipes] = useState(FAVORITE_RECIPES);
  const [isCopy, setIsCopy] = useState(false);

  function copyToClipBoard({ type, id }) {
    const path = `${type}s/${id}`;
    const FIVE_SECONDS = 5000;
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), FIVE_SECONDS);
    return navigator.clipboard.writeText(`http://localhost:3000/${path}`);
  }

  function removeRecipeFromLS(recipeId) {
    const recipeRemoved = filteredRecipes.filter(({ id }) => recipeId !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipeRemoved));
    setFilteredRecipes(recipeRemoved);
  }

  function renderFavoriteRecipesCard() {
    return filteredRecipes.map((recipe, index) => (
      <div className={ styles.favoriteRecipesCard } key={ index }>
        <Link to={ `${recipe.type}s/${recipe.id}` }>
          <img
            data-testid={ `${index}-horizontal-image` }
            src={ recipe.image }
            alt={ recipe.name }
          />
        </Link>
        <div>
          <p data-testid={ `${index}-horizontal-top-text` }>
            {recipe.type === 'comida'
              ? `${recipe.area} - ${recipe.category}` : recipe.alcoholicOrNot}
          </p>
          <Link to={ `${recipe.type}s/${recipe.id}` }>
            <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
          </Link>
        </div>
        <div>
          <button
            src={ shareIcon }
            type="button"
            className={ styles.shareButton }
            onClick={ () => copyToClipBoard(recipe) }
            data-testid={ `${index}-horizontal-share-btn` }

          >
            {' '}
          </button>
          <button
            src={ blackHeartIcon }
            type="button"
            className={ styles.favoriteButton }
            onClick={ () => removeRecipeFromLS(recipe.id) }
            data-testid={ `${index}-horizontal-favorite-btn` }
          >
            {' '}
          </button>
        </div>

        <p
          data-testid={ `${index}-${recipe.tags}-horizontal-tag` }
        >
          {recipe.tags !== 'null' && recipe.tags }
        </p>
      </div>
    ));
  }

  function renderFavoriteRecipes() {
    return (
      <div className={ styles.favoriteRecipes }>
        <FilterButtons
          recipes={ FAVORITE_RECIPES }
          setFilteredRecipes={ setFilteredRecipes }
        />
        {isCopy && <span>Link copiado!</span>}
        <div>
          {filteredRecipes && renderFavoriteRecipesCard()}
        </div>
      </div>
    );
  }

  return (
    <>
      <Header title="Receitas Favoritas" icon="false" currentPage="" />
      {renderFavoriteRecipes()}
    </>
  );
}

export default FavoriteScreen;
