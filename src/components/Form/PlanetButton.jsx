import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function PlanetButton(props) {
  const { filterBtn, value } = props;
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    function updateDisableButton() {
      if (value.length > 0) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }

    updateDisableButton();
  });

  return (
    <button
      type="button"
      data-testid="button-filter"
      onClick={ filterBtn }
      disabled={ disabled }
    >
      Filtrar
    </button>
  );
}

PlanetButton.propTypes = {
  filterBtn: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PlanetButton;
