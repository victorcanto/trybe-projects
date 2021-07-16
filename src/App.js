import React from 'react';

import FoodProvider from './context/FoodProvider';
import DrinkProvider from './context/DrinkProvider';
// import DetailProvider from './context/DetailProvider';
import Routes from './routes';

function App() {
  return (
    <FoodProvider>
      <DrinkProvider>
        <Routes />
      </DrinkProvider>
    </FoodProvider>
  );
}

export default App;
