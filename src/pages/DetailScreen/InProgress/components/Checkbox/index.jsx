import React from 'react';
import { bool, func, string } from 'prop-types';

function Checkbox({ keyValue, value, handleProgress, isChecked }) {
  const handleChange = ({ target: { name, checked } }) => {
    handleProgress(name, checked);
  };

  return (
    <label htmlFor={ keyValue }>
      <input
        type="checkbox"
        checked={ isChecked }
        id={ keyValue }
        name={ keyValue }
        onChange={ handleChange }
      />
      <p>{!value ? keyValue : `${keyValue} - ${value}`}</p>
    </label>
  );
}

Checkbox.propTypes = {
  keyValue: string.isRequired,
  value: string.isRequired,
  isChecked: bool.isRequired,
  handleProgress: func.isRequired,
};

export default Checkbox;
