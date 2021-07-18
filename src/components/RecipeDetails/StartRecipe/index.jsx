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

  function checkRecipesIsDone() {
    let checked;
    const recipesIsDone = JSON.parse(localStorage.getItem('doneRecipes'));
    if (recipesIsDone) {
      checked = recipesIsDone.some((recipe) => recipe.id === id);
    }
    return checked;
  }

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
        { !checkRecipesIsDone() && renderButton()}
      </div>
    );
  }

  return (
    renderStartRecipeBtn()
  );
}

export default StartRecipe;
