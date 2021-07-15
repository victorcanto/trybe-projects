import React, { useEffect, useState } from 'react';
import { bool, func, string } from 'prop-types';

function Checkbox({ keyValue, value, isAlreadyChecked, handleProgress }) {
  const [isChecked, setIsChecked] = useState(false);

  // useEffect(() => {
  //   setIsChecked(isAlreadyChecked);
  // });

  const handleChange = ({ target: { name, checked } }) => {
    // setIsChecked(checked);
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
  isAlreadyChecked: bool.isRequired,
  handleProgress: func.isRequired,
};

export default Checkbox;
