import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/bebidas">
        <img alt="Drinks" src="../images/drinkIcon.svg" data-testid="drinks-bottom-btn" />
      </Link>
      <Link to="/explorar">
        <img
          alt="Explorar"
          src="../images/drinkIcon.svg"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link to="/comidas">
        <img
          alt="Comidas"
          src="../images/drinkIcon.svg"
          data-testid="food-bottom-btn"
        />
      </Link>
    </footer>
  );
}

export default Footer;
