import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import DetailContext from './DetailContext';

function DetailProvider({ children }) {
  const [isInProgress, setIsInProgress] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const value = {
    isInProgress,
    isDone,
    setIsInProgress,
    setIsDone,
  };

  useEffect(() => {

  }, [isInProgress, isDone]);

  return (
    <DetailContext.Provider value={ value }>
      {children}
    </DetailContext.Provider>
  );
}

DetailProvider.propTypes = {
  children: node.isRequired,
};

export default DetailProvider;
