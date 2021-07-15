import React from 'react';
import PropTypes from 'prop-types';

function Instructions(props) {
  const { recipe: { strInstructions } } = props;
  return (
    <div>
      <h2>Instructions</h2>
      <p data-testid="instructions">{strInstructions}</p>
    </div>
  );
}

export default Instructions;

Instructions.propTypes = {
  recipe: PropTypes.node.isRequired,
};
