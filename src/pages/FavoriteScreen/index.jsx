import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './favorite.module.scss';

function FavoriteScreen() {
  const FAVORITE_RECIPES = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [filteredRecipes, setFilteredRecipes] = useState(FAVORITE_RECIPES);
  const [isCopy, setIsCopy] = useState(false);

  function copyToClipBoard({ type, id }) {
    const path = `${type}/${id}`;
    const FIVE_SECONDS = 5000;
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), FIVE_SECONDS);
    return navigator.clipboard.writeText(`http://localhost:3000/${path}`);
  }

  function filterRecipes(filter) {
    const filtered = FAVORITE_RECIPES.filter(({ type }) => type === filter);
    setFilteredRecipes(filtered);
  }

  function handleFilterButtons({ target }) {
    const content = target.textContent;
    switch (content) {
    case 'Food':
      filterRecipes('comida');
      break;
    case 'Drinks':
      filterRecipes('bebida');
      break;
    default:
      setFilteredRecipes(FAVORITE_RECIPES);
      break;
    }
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
          <p data-testid={ `${index}-horizontal-top-text` }>{recipe.category}</p>
          <Link to={ `${recipe.type}s/${recipe.id}` }>
            <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
          </Link>

          <p data-testid={ `${index}-horizontal-done-date` } />
        </div>
        <div>
          <button
            type="button"
            className={ styles.shareButton }
            onClick={ () => copyToClipBoard(recipe) }
            data-testid={ `${index}-horizontal-share-btn` }
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
        <div>
          <button
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ handleFilterButtons }
          >
            All
          </button>
          <button
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ handleFilterButtons }
          >
            Food
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ handleFilterButtons }
          >
            Drinks
          </button>
        </div>
        {isCopy && <span>Link copiado!</span>}
        <div>
          {renderFavoriteRecipesCard()}
        </div>
      </div>
    );
  }

  return (
    <>
      <Header title="Receitas feitas" icon="false" currentPage="" />
      {renderFavoriteRecipes()}
    </>
  );
}

export default FavoriteScreen;
