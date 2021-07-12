import React from 'react';

import FoodProvider from './context/Food';
import DrinkProvider from './context/Drink';
import DetailProvider from './context/DetailScreen';
import Routes from './routes';

function App() {
  return (
    <FoodProvider>
      <DrinkProvider>
        <DetailProvider>
          <Routes />
        </DetailProvider>
      </DrinkProvider>
    </FoodProvider>
  );
}

export default App;
