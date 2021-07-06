import React from 'react';

import FoodProvider from './context/Foods/FoodProvider';
import Routes from './routes';

function App() {
  return (
    <FoodProvider>
      <Routes />
    </FoodProvider>
  );
}

export default App;
