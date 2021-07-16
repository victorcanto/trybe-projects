import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './start.module.scss';
import DetailContext from '../../../context/DetailProvider/DetailContext';

function StartRecipe({ id, pathname }) {
  const typeRecipe = pathname.split('/')[1];
  const { isInProgress, isDone, setIsInProgress } = useContext(DetailContext);

  function checkRecipesInProgress() {
    let keyName = 'meals';
    let checked;
    if (typeRecipe === 'bebidas') keyName = 'cocktails';
    const data = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (data) {
      checked = Object.keys(data[keyName]).some((key) => key === id);
    }
    return checked ? setIsInProgress(true) : setIsInProgress(false);
  }

  useEffect(() => {
    checkRecipesInProgress();
  });

  function renderButton(msgStatus) {
    return (
      <Link to={ `${pathname}/in-progress` }>
        <button
          className={ styles.start }
          type="button"
          data-testid="start-recipe-btn"
        >
          {msgStatus}
        </button>

      </Link>
    );
  }

  function renderStartRecipeBtn(msgStatus) {
    return (
      <div className={ styles.startContainer }>
        {!isDone && renderButton(msgStatus)}
      </div>
    );
  }

  function statusBtn() {
    let msgStatus = 'Iniciar Receita';
    if (isInProgress && !isDone) msgStatus = 'Continuar Receita';
    return renderStartRecipeBtn(msgStatus);
  }

  return (
    statusBtn()
  );
}

export default StartRecipe;
