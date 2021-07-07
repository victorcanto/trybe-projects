import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './buttons.module.scss';

function InteractiveButtons() {
  const { pathname } = useLocation();
  const [isCopy, setIsCopy] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  function favoriteToggle() {
    setIsFavorite(!isFavorite);
  }

  function copyToClipBoard() {
    const ONE_SECOND = 1000;
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), ONE_SECOND);
    return navigator.clipboard.writeText(`http://localhost:3000${pathname}`);
  }

  let favoriteColor = styles.whiteHeartIcon;
  if (isFavorite) favoriteColor = styles.blackHeartIcon;

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
          className={ favoriteColor }
          onClick={ favoriteToggle }
          data-testid="favorite-btn"
        >
          {' '}
        </button>
      </div>

      {isCopy && <span>Link copiado!</span>}
    </div>
  );
}

export default InteractiveButtons;

// Code References:
// - Copy To Clipboard: https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
