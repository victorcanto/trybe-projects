import React from 'react';
import DetailProvider from './context/DetailScreen/DetailProvider';
import Routes from './routes';

function App() {
  return (
    <DetailProvider>
      <Routes />
    </DetailProvider>
  );
}

export default App;
