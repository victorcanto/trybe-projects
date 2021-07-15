import React, { useEffect, useState } from 'react';
import { string, node } from 'prop-types';
import { useParams } from 'react-router-dom';

import styles from './steps.module.scss';

import Checkbox from '../Checkbox';

function Steps({ recipe, origin }) {
  const { id } = useParams();
  const [stepsInProgress, setStepsInProgress] = useState([]);
  const pathType = origin === 'comidas' ? 'meals' : 'cocktails';
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const inProgressStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));
    let storagedId = [];
    if (inProgressStorage) {
      storagedId = inProgressStorage[pathType][id];
    }
    const isUpdated = stepsInProgress.every(
      (ingredient, index) => ingredient === storagedId[index],
    );

    if (isUpdated && !stepsInProgress.length && storagedId.length) {
      return setStepsInProgress(storagedId);
    }
  }, []);

  useEffect(() => {
    let inProgressStorage = JSON.parse(localStorage.getItem('inProgressRecipes'));

    if (!inProgressStorage) {
      inProgressStorage = {
        cocktails: {},
        meals: {},
      };
    }

    inProgressStorage[pathType][id] = stepsInProgress;

    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressStorage));
  }, [stepsInProgress]);

  const handleProgress = (name, checked) => {
    if (checked) {
      return setStepsInProgress((prev) => prev.concat(name));
    }

    const removed = stepsInProgress.filter((ingredient) => ingredient !== name);
    return setStepsInProgress(removed);
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

  return (
    <div>
      <h2>Ingredients</h2>
      <ul className={ styles.steps }>
        {arrResult.map(([key, value], index) => {
          const alreadyChecked = stepsInProgress.includes(key);
          return (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            >
              <Checkbox
                // isChecked={ isChecked }
                isAlreadyChecked={ alreadyChecked }
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
};
