import React from 'react';
import PropTypes from 'prop-types';

function MainCard(props) {
  const { name, thumb } = props;
  return (
    <div>
      <img src={ thumb } alt={ name } width="100px" />
      <p>{name}</p>
    </div>
  );
}

export default MainCard;

MainCard.propTypes = {
  name: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
};
