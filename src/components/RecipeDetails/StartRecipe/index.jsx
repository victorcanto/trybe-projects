import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './start.module.scss';

function StartRecipe() {
  const { pathname } = useLocation();
  const [isStarted, setIsStarted] = useState(false);
  // const [isDone, setIsDone] = useState(false);
  const isDone = false; // Temporario

  function renderStartRecipeBtn(msgStatus) {
    return (
      <div className={ styles.startContainer }>
        <Link to={ `${pathname}/in-progress` }>
          <button
            className={ styles.start }
            type="button"
            data-testid="start-recipe-btn"
            onClick={ () => setIsStarted(true) }
          >
            {msgStatus}
          </button>
        </Link>
      </div>

    );
  }

  function statusBtn() {
    let msgStatus = 'Iniciar Receita';
    if (isStarted && !isDone) msgStatus = 'Continuar receita';
    if (!isDone) return renderStartRecipeBtn(msgStatus);
  }

  return (
    statusBtn()
  );
}

export default StartRecipe;
