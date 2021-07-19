import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useHistory } from 'react-router-dom';

import useRecipeDetails from '../../../hooks/useRecipeDetails';
import data from '../../../helpers/apiData';
import '../../../styles/global.scss';

import Loading from '../../../components/Loading';
import BasicInfo from '../../../components/RecipeDetails/BasicInfo';
import InteractiveButtons from '../../../components/RecipeDetails/InteractiveButtons';
import Instructions from '../../../components/RecipeDetails/Instructions';
import Button from '../../../components/Button';
import Steps from './components/Steps';

function InProgress() {
  const { id } = useParams();
  const history = useHistory();
  const { pathname } = useLocation();
  const foodOrDrink = pathname.split('/')[1];
  const { domain, key } = data[foodOrDrink];
  const [isButtonValidated, setIsButtonValidated] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [recipeDetails, isFetchingDetails] = useRecipeDetails(domain, key, id);

  const type = {
    name: data[foodOrDrink].name,
    category: data[foodOrDrink].category,
    nameRecommend: data[foodOrDrink].nameRecommend,
    categoryRecommend: data[foodOrDrink].categoryRecommend,
  };

  useEffect(() => {
    setIsLoading(isFetchingDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetchingDetails]);

  const formatDate = () => {
    const doneDate = new Date().toISOString().split('-');
    const day = doneDate[2].split('T')[0];
    const month = doneDate[1];
    const year = doneDate[0];

    return [day, month, year].join('/');
  };

  const handleClick = () => {
    const savedRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    let alcoholicOrNot = '';
    let area = '';
    let tags = [];
    const doneDate = formatDate();

    if (type.category === 'strAlcoholic') alcoholicOrNot = 'Alcoholic';
    if (recipeDetails.strArea) area = recipeDetails.strArea;
    if (recipeDetails.strTags) tags = recipeDetails.strTags.split(',');

    const doneRecipe = {
      id: recipeDetails[`id${type.name}`],
      type: foodOrDrink.split('s')[0],
      area,
      category: recipeDetails.strCategory,
      alcoholicOrNot,
      name: recipeDetails[`str${type.name}`],
      image: recipeDetails[`str${type.name}Thumb`],
      doneDate,
      tags,
    };

    if (savedRecipes) {
      const duplicated = savedRecipes.some(({ id: recipeId }) => {
        const isDuplicated = recipeId === recipeDetails[`id${type.name}`];
        return isDuplicated;
      });

      if (!duplicated) {
        localStorage.setItem(
          'doneRecipes', JSON.stringify([...savedRecipes, doneRecipe]),
        );
      }
    } else localStorage.setItem('doneRecipes', JSON.stringify([doneRecipe]));
    return history.push('/receitas-feitas');
  };

  function renderDetails() {
    return (
      <>
        <BasicInfo
          name={ type.name }
          category={ type.category }
          recipe={ recipeDetails }
        />
        <InteractiveButtons
          recipeDetails={ recipeDetails }
          foodOrDrink={ foodOrDrink }
          type={ type }
          id={ id }
        />

        <Steps
          setIsButtonValidated={ setIsButtonValidated }
          origin={ foodOrDrink }
          recipe={ recipeDetails }
        />

        <Instructions name={ type.name } recipe={ recipeDetails } />

        <Button
          handleClick={ handleClick }
          dataTestid="finish-recipe-btn"
          isValidated={ !isButtonValidated }
        >
          <span>Finish</span>
        </Button>
      </>
    );
  }

  return (
    <div>
      {isLoading ? <Loading /> : renderDetails()}
    </div>

  );
}

export default InProgress;
