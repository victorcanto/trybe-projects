import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

function PlanetName() {
  const { states: { name }, sets: { setName } } = useContext(AppContext);

  return (
    <label htmlFor="name-input">
      <input
        type="text"
        data-testid="name-filter"
        id="name-input"
        onChange={ (e) => setName(e.target.value) }
        value={ name }
      />
    </label>
  );
}

export default PlanetName;
