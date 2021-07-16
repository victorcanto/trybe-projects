import React from 'react';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';

function FoodOrigin() {
  return (
    <div>
      {/* <select data-testid="explore-by-area-dropdown">
        <option disabled="">Selecione uma opção</option>
        <option data-testid="All-option">All</option>
        {areas.map((area) => (
          <option data-testid={ `${area}-option` } key={ area }>
            {area}
          </option>
        ))}
      </select> */}
      <Header title="Explorar Origem" icon />
      <Footer />
    </div>
  );
}

export default FoodOrigin;
