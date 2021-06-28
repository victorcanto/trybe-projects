import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

function Filter() {
  const { filters: { filterByNumericValues }, states: { data },
    sets: { setFilter, setMutableData } } = useContext(AppContext);

  function removeFilter(e) {
    const columnName = e.target.parentNode.textContent.split('-')[0];
    const updatedFilter = filterByNumericValues
      .filter(({ column }) => column !== columnName);

    setFilter(updatedFilter);
  }

  function renderFilters() {
    if (!filterByNumericValues.length) {
      setMutableData(data);
    }
    return filterByNumericValues
      .map(({ column, comparison, value }, index) => (
        <div
          key={ index }
          data-testid="filter"
        >
          {`${column}-${comparison}-${value}`}
          <button type="button" onClick={ removeFilter }>X</button>
        </div>));
  }
  return (
    <div>
      {renderFilters()}
    </div>

  );
}

export default Filter;
