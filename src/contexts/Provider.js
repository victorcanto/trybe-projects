import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import fetchApi from '../services/api';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function requestPlanets() {
      const results = await fetchApi();
      try {
        setData(results);
      } catch (err) {
        setError(err);
      }
    }

    requestPlanets();
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
