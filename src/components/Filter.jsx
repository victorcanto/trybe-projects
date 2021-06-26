import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

function Filter() {
  const { filters: { filterByNumericValues } } = useContext(AppContext);
  function renderFilters() {
    return filterByNumericValues
      .map(({ column, comparison, value }, index) => (
        <div
          key={ index }
          data-testid="filter"
        >
          {`Fitro ${index}: ${column}-${comparison}-${value}`}
        </div>));
  }
  return (
    <div>
      {renderFilters()}
    </div>

  );
}

export default Filter;
