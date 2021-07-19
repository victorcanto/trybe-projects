import React, { useEffect, useState } from 'react';
import { string, objectOf } from 'prop-types';
import { useLocation } from 'react-router-dom';

import styles from './buttons.module.scss';
import handleStorage from '../../../helpers/handleStorage';

import whiteHeartIcon from '../../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../../images/blackHeartIcon.svg';

function InteractiveButtons({ id, recipeDetails, type, foodOrDrink }) {
  let { pathname } = useLocation();
  [pathname] = pathname.split('/in-progress');
  const [isCopy, setIsCopy] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (savedRecipes) {
      const recipeFound = savedRecipes.find(({ id: recipeId }) => recipeId === id);
      if (recipeFound) setIsFavorite(true);
    }
  }, [id]);

  const copyToClipBoard = () => {
    const FIVE_SECONDS = 5000;
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), FIVE_SECONDS);
    return navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
  };

  const handleClick = () => {
    handleStorage(recipeDetails, type, foodOrDrink);
    favoriteToggle();
  };

  let favoriteColor = whiteHeartIcon;
  if (isFavorite) favoriteColor = blackHeartIcon;

  return (
    <div>
      <div>
        <button
          type="button"
          id="share-btn"
          className={ styles.shareButton }
          onClick={ copyToClipBoard }
          data-testid="share-btn"
        >
          {' '}
        </button>
        <button
          type="button"
          id="favorite-btn"
          className={ styles.favoriteButton }
          onClick={ handleClick }
        >
          <img data-testid="favorite-btn" src={ favoriteColor } alt="heart" />
        </button>
      </div>

      {isCopy && <span>Link copiado!</span>}
    </div>
  );
}

export default InteractiveButtons;

InteractiveButtons.propTypes = {
  id: string.isRequired,
  foodOrDrink: string.isRequired,
  recipeDetails: objectOf(string).isRequired,
  type: objectOf(string).isRequired,
};

// Code References:
// - Copy To Clipboard: https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
