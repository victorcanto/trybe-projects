import React from 'react';
import PropTypes from 'prop-types';

function Categories(props) {
  const { categories, renderRecipesByCategory } = props;
  return (
    <div>
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ renderRecipesByCategory }
      >
        All
      </button>
      {categories.map(({ strCategory }) => (
        <button
          className="btn-filter"
          type="button"
          key={ strCategory }
          data-testid={ `${strCategory}-category-filter` }
          onClick={ renderRecipesByCategory }
        >
          {strCategory}
        </button>))}
    </div>
  );
}

export default Categories;

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderRecipesByCategory: PropTypes.func.isRequired,
};
