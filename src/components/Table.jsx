import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { filterPlanetsByName, filterPlanetsByValues } from '../filters/PlanetFilters';
import Filter from './Filter';
import PlanetButton from './Form/PlanetButton';
import PlanetName from './Form/PlanetName';
import PlanetSelects from './Form/PlanetSelects';

function Table() {
  const {
    states: { data, mutableData, name, column, comparison, value, error },
    sets: { setMutableData, setFilter },
    filters: { filterByNumericValues } } = useContext(AppContext);

  function filterHeaders() {
    if (data.length) {
      return Object.keys(data[0]).filter((key) => key !== 'residents');
    }
  }

  function renderHeaders() {
    return (
      <tr>
        {filterHeaders() && filterHeaders()
          .map((header) => <th key={ header }>{header}</th>)}
      </tr>
    );
  }

  function addFilterByNumericValues() {
    setFilter([...filterByNumericValues, { column, comparison, value }]);
  }

  let filteredData = mutableData;

  function renderFilteredDataByValue() {
    const filteredDataByValue = filterPlanetsByValues(data, column, comparison, value);
    setMutableData(filteredDataByValue);
    addFilterByNumericValues();
  }

  function renderData() {
    if (name.length) {
      filteredData = filterPlanetsByName(data, name);
    }

    return filteredData.map((obj, index) => (
      <tr key={ index }>
        <td>{obj.name}</td>
        <td>{obj.rotation_period}</td>
        <td>{obj.orbital_period}</td>
        <td>{obj.diameter}</td>
        <td>{obj.climate}</td>
        <td>{obj.gravity}</td>
        <td>{obj.terrain}</td>
        <td>{obj.surface_water}</td>
        <td>{obj.population}</td>
        <td>{obj.films}</td>
        <td>{obj.created}</td>
        <td>{obj.edited}</td>
        <td>{obj.url}</td>
      </tr>
    ));
  }

  const errorMessage = <h1>{error}</h1>;

  return (
    <div>
      <form onSubmit={ (e) => e.preventDefault() }>
        <PlanetName />
        <PlanetSelects />
        <PlanetButton
          filterBtn={ renderFilteredDataByValue }
          value={ value }
        />
      </form>
      <div>
        <Filter />
      </div>
      <table>
        <thead>{renderHeaders()}</thead>
        <tbody>{error.length ? errorMessage : renderData() }</tbody>
      </table>
    </div>
  );
}

export default Table;
