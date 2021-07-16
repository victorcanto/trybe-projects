import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './buttons.module.scss';
import whiteHeartIcon from '../../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../../images/blackHeartIcon.svg';

function InteractiveButtons({ handleStorage, id }) {
  let { pathname } = useLocation();
  [pathname] = pathname.split('/in-progress');
  const [isCopy, setIsCopy] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  function favoriteToggle() {
    setIsFavorite(!isFavorite);
  }

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (savedRecipes) {
      const recipeFound = savedRecipes.find(({ id: recipeId }) => recipeId === id);
      if (recipeFound) setIsFavorite(true);
    }
  }, [id]);

  function copyToClipBoard() {
    const ONE_SECOND = 5000;
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), ONE_SECOND);
    return navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
  }

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
          onClick={ () => { handleStorage(); favoriteToggle(); } }
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
  id: PropTypes.string.isRequired,
  handleStorage: PropTypes.func.isRequired,
};

// Code References:
// - Copy To Clipboard: https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
