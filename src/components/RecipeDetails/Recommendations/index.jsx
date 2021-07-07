import React from 'react';
import PropTypes from 'prop-types';
import Cards from './Cards';
import styles from './recommendations.module.scss';

function Recommendations({ recipes, name, category }) {
  return (
    <div>
      <h2>Recommended</h2>
      <div className={ styles.recommendations }>
        {recipes.map((recipe, index) => (
          <Cards
            index={ index }
            key={ index }
            category={ recipe[category] }
            name={ recipe[`str${name}`] }
            thumb={ recipe[`str${name}Thumb`] }
          />))}
      </div>
    </div>
  );
}

export default Recommendations;

Recommendations.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
