import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DetailContext from '../../../context/DetailProvider/DetailContext';

function BasicInfo(props) {
  const { category, name } = props;
  const { recipeDetails } = useContext(DetailContext);
  return (
    <div>
      <img
        data-testid="recipe-photo"
        src={ recipeDetails[`str${name}Thumb`] }
        alt={ recipeDetails[`str${name}`] }
        width="100%"
      />
      <h1 data-testid="recipe-title">{recipeDetails[`str${name}`]}</h1>
      <p data-testid="recipe-category">{recipeDetails[category]}</p>
    </div>
  );
}

export default BasicInfo;

BasicInfo.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
