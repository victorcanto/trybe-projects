import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

function Table() {
  const { data } = useContext(AppContext);

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

  function renderData() {
    return data.map((obj, index) => (
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

  return (
    <div>
      <table>
        <thead>{renderHeaders()}</thead>
        <tbody>{renderData()}</tbody>
      </table>
    </div>
  );
}

export default Table;
