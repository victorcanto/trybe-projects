import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={ styles.footer } data-testid="footer">
      <Link to="/bebidas">
        <img
          alt="Drinks"
          src={ drinkIcon }
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/explorar">
        <img
          alt="Explorar"
          src={ exploreIcon }
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link to="/comidas">
        <img
          alt="Comidas"
          src={ mealIcon }
          data-testid="food-bottom-btn"
        />
      </Link>
    </footer>
  );
}

export default Footer;
