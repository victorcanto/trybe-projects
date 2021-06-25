import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import fetchApi from '../services/api';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [mutableData, setMutableData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function requestPlanets() {
      const results = await fetchApi();
      try {
        setData(results);
        setMutableData(results);
      } catch (err) {
        setError(err);
      }
    }

    requestPlanets();
  }, []);

  const contextValue = {
    sets: {
      setData,
      setMutableData,
      setName,
      setColumn,
      setComparison,
      setValue,
    },
    states: {
      data,
      mutableData,
      name,
      column,
      comparison,
      value,
      error,
    },

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
