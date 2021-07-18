import React from 'react';
import { Link } from 'react-router-dom';
import styles from './start.module.scss';

function StartRecipe({ id, pathname }) {
  const typeRecipe = pathname.split('/')[1];
  // const { isInProgress, setIsInProgress } = useContext(DetailContext);
  function checkRecipesInProgress() {
    let keyName = 'meals';
    let checked;
    if (typeRecipe === 'bebidas') keyName = 'cocktails';
    const data = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (data) {
      checked = Object.keys(data[keyName]).some((key) => key === id);
    }
    return checked;
  }
  const isDone = false;

  function renderButton() {
    return (
      <Link to={ `${pathname}/in-progress` }>
        <button
          className={ styles.start }
          type="button"
          data-testid="start-recipe-btn"
        >
          {checkRecipesInProgress() ? 'Continuar Receita' : 'Iniciar Receita'}
        </button>
      </Link>
    );
  }

  function renderStartRecipeBtn() {
    return (
      <div className={ styles.startContainer }>
        {!isDone && renderButton()}
      </div>
    );
  }

  // function statusBtn() {
  //   const msgStatus = 'Iniciar Receita';
  //   // if (isInProgress && !isDone) msgStatus = 'Continuar Receita';
  //   // if (isInProgress) msgStatus = 'Continuar Receita';
  //   // console.log(msgStatus);
  //   return renderStartRecipeBtn(msgStatus);
  // }

  return (
    renderStartRecipeBtn()
  );
}

export default StartRecipe;
