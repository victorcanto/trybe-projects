import React from 'react';
import { node } from 'prop-types';
import Context from './DetailContext';

function DetailProvider({ children }) {
  return (
    <Context.Provider value={ {} }>
      {children}
    </Context.Provider>
  );
}

export default DetailProvider;

DetailProvider.propTypes = {
  children: node.isRequired,
};
