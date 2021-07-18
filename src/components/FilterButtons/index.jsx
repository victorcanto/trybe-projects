import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function FilterButtons(props) {
  const { pathname } = useLocation();
  const { recipes, setFilteredRecipes } = props;
  function filterRecipes(filter) {
    const filtered = recipes.filter(({ type }) => type === filter);
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
      setFilteredRecipes(recipes);
    }
  }

  function renderFilterButtons() {
    return (
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
    );
  }

  function noRecipeFound() {
    let msgStatus = 'Não há receitas favoritas';
    if (pathname === '/receitas-feitas') msgStatus = 'Não há receitas feitas';
    return msgStatus;
  }

  return (
    <div>
      { recipes.length ? renderFilterButtons() : noRecipeFound()}
    </div>
  );
}

export default FilterButtons;

FilterButtons.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  setFilteredRecipes: PropTypes.func.isRequired,
};
