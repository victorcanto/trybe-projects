import React from 'react';

import FoodProvider from './context/Foods/FoodProvider';
import DetailProvider from './context/DetailScreen/DetailProvider';
import Routes from './routes';

function App() {
  return (
    <FoodProvider>
      <DetailProvider>
        <Routes />
      </DetailProvider>
    </FoodProvider>
  );
}

export default App;
