import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/index';

function Explorer() {
  return (
    <div>
      <Header title="Explorar" icon="false" />
      <a href="/explorar/comidas">
        <h2 data-testid="explore-food">Explorarar Comidas</h2>
      </a>
      <a href="/explorar/bebidas">
        <h2 data-testid="explore-drinks">Explorarar Bebidas</h2>
      </a>
      <Footer />
    </div>
  );
}

export default Explorer;
