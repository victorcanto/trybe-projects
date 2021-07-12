import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './madeRecipes.module.scss';

const MADE_RECIPES = [
  {
    type: 'comidas',
    id: '52977',
    img: 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg',
    category: 'Side',
    name: 'Corba',
    date: '12/07/2021',
    tags: 'Soup',
  },
  {
    type: 'bebidas',
    id: '15997',
    img: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    category: 'Optional alcohol',
    name: 'GG',
    date: '12/07/2021',
    tags: 'null',
  },

]; // TEMP

function MadeRecipes() {
  const [isCopy, setIsCopy] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState(MADE_RECIPES);

  function copyToClipBoard({ type, id }) {
    const path = `${type}/${id}`;
    const FIVE_SECONDS = 5000;
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), FIVE_SECONDS);
    return navigator.clipboard.writeText(`http://localhost:3000/${path}`);
  }

  function filterRecipes(filter) {
    const filtered = MADE_RECIPES.filter(({ type }) => type === filter);
    setFilteredRecipes(filtered);
  }

  function handleFilterButtons({ target }) {
    const content = target.textContent;
    switch (content) {
    case 'Food':
      filterRecipes('comidas');
      break;
    case 'Drinks':
      filterRecipes('bebidas');
      break;
    default:
      setFilteredRecipes(MADE_RECIPES);
      break;
    }
  }

  function mapMadeRecipes() {
    return filteredRecipes.map((recipe, index) => (
      <div className={ styles.madeRecipesCard } key={ index }>
        <Link to={ `${recipe.type}/${recipe.id}` }>
          <img
            data-testid={ `${index}-horizontal-image` }
            src={ recipe.img }
            alt={ recipe.name }
          />
          <p data-testid={ `${index}-horizontal-top-text` }>{recipe.category}</p>

          <h3 data-testid={ `${index}-horizontal-name` }>{recipe.name}</h3>
          <p data-testid={ `${index}-horizontal-done-date` } />
        </Link>
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

        {isCopy && <span>Link copiado!</span>}
        <p data-testid={ `${index}-${recipe.tags}-horizontal-tag` } />
      </div>
    ));
  }

  function renderMadeRecipes() {
    return (
      <div className={ styles.madeRecipes }>
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
        <div>
          {mapMadeRecipes()}
        </div>
      </div>
    );
  }

  return (
    <>
      <Header title="Receitas feitas" icon="false" currentPage="" />
      {renderMadeRecipes()}
    </>
  );
}

export default MadeRecipes;
