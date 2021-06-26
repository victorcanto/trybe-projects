import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

let arrColumns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function PlanetSelect() {
  const { states: { column, comparison, value },
    sets: { setColumn, setComparison, setValue },
    filters: { filterByNumericValues } } = useContext(AppContext);

  function checkValue({ target }) {
    const valueToNumber = target.value.replace(/\D/g, '');
    setValue(valueToNumber);
  }

  function renderColumnOptions() {
    let idx = 0;
    const toRemove = filterByNumericValues.map((el) => el.column);
    for (let i = 0; i < toRemove.length; i += 1) {
      idx = i;
    }
    arrColumns = arrColumns.filter((el) => el !== toRemove[idx]);

    return arrColumns.map((el) => (
      <option key={ el } value={ el }>{el}</option>
    ));
  }

  return (
    <>
      <label htmlFor="column-input">
        <select
          name="column-input"
          id="column-input"
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
          value={ column }
        >
          {renderColumnOptions()}
        </select>
      </label>
      <label htmlFor="comparison-input">
        <select
          name="comparison-input"
          id="comparison-input"
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-input">
        <input
          type="text"
          name="value-input"
          id="value-input"
          data-testid="value-filter"
          onChange={ checkValue }
          value={ value }
        />
      </label>
    </>
  );
}

export default PlanetSelect;

// source ref
// regex: https://pt.stackoverflow.com/questions/136774/express%C3%A3o-regular-apenas-n%C3%BAmeros-sem-espa%C3%A7o
