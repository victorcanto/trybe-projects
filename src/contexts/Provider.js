import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(API_URL);
      const { results } = await response.json();
      try {
        setData(results);
      } catch (err) {
        setError(err);
      }
    }

    fetchApi();
  }, []);

  const contextValue = {
    sets: {
      setData,
      setName,
      setColumn,
      setComparison,
      setValue,
    },
    data,
    error,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
        {
          column,
          comparison,
          value,
        },
      ],
    },
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
