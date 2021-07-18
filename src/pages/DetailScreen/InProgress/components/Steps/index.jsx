import React, { useEffect, useState } from 'react';
import { string, node, func } from 'prop-types';
import { useParams } from 'react-router-dom';

import styles from './steps.module.scss';

import Checkbox from '../Checkbox';

function Steps({ recipe, origin, setIsButtonValidated }) {
  const { id } = useParams();
  const pathType = origin === 'comidas' ? 'meals' : 'cocktails';
  // https://github.com/tryber/sd-010-a-project-recipes-app/blob/main-group-15/src/hooks/useRecipeProgress.js
  // Primeiramente não estava funcionando o requisito 50 e pudemos ter uma luz de lógica a partir desse pull request na função isChecked
  const inProgressStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
  let storagedId = [];
  if (inProgressStorage) {
    storagedId = inProgressStorage[pathType][id] || [];
  }
  const [stepsInProgress, setStepsInProgress] = useState(storagedId);

  useEffect(() => {
    let inProgressStoraged = JSON.parse(localStorage.getItem('inProgressRecipes'));

    if (!inProgressStoraged) {
      inProgressStoraged = {
        cocktails: {},
        meals: {},
      };
    }

    inProgressStoraged[pathType][id] = stepsInProgress;

    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressStoraged));
  }, [stepsInProgress]);

  const handleProgress = (name, checked) => {
    if (checked) {
      return setStepsInProgress((prev) => prev.concat(name));
    }

    const checkedRemoved = stepsInProgress.filter((ingredient) => ingredient !== name);
    return setStepsInProgress(checkedRemoved);
  };

  const filterIngredients = ([key, value]) => key.includes('strIngredient') && (value);

  const filterMeasures = ([key, value]) => key.includes('strMeasure')
      && (!!value && value !== ' ');

  const createArrOfIngredientsAndMeasures = () => {
    const entries = Object.entries(recipe);
    const ingredients = entries.filter(filterIngredients).map((el) => el[1]);
    const measures = entries.filter(filterMeasures).map((el) => el[1]);

    return ingredients.reduce((acc, cur, index) => [...acc, [cur, measures[index]]], []);
  };

  const arrResult = createArrOfIngredientsAndMeasures();

  useEffect(() => {
    setIsButtonValidated(arrResult.every(([key]) => stepsInProgress.includes(key)));
  });

  return (
    <div>
      <h2>Ingredients</h2>
      <ul className={ styles.steps }>
        {arrResult.map(([key, value], index) => {
          const isChecked = stepsInProgress.includes(key);
          return (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              <Checkbox
                isChecked={ isChecked }
                handleProgress={ handleProgress }
                value={ value }
                keyValue={ key }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Steps;

Steps.propTypes = {
  recipe: node.isRequired,
  origin: string.isRequired,
  setIsButtonValidated: func.isRequired,
};
