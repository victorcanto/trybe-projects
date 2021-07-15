import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import DetailContext from '../../context/DetailProvider/DetailContext';

import useRecipes from '../../hooks/useRecipes';
import useRecipeDetails from '../../hooks/useRecipeDetails';
import data from '../../helpers/apiData';
import '../../styles/global.scss';

import Loading from '../../components/Loading';
import BasicInfo from '../../components/RecipeDetails/BasicInfo';
import InteractiveButtons from '../../components/RecipeDetails/InteractiveButtons';
import Ingredients from '../../components/RecipeDetails/Ingredients';
import Instructions from '../../components/RecipeDetails/Instructions';
import VideoRecipe from '../../components/RecipeDetails/VideoRecipe';
import Recommendations from '../../components/RecipeDetails/Recommendations';
import StartRecipe from '../../components/RecipeDetails/StartRecipe';

function DetailScreen() {
  // const {
  //   setInfoDetails,
  //   setInfoRecommended,
  //   recipeDetails,
  //   isLoading,
  // } = useContext(DetailContext);

  const { id } = useParams();
  const { pathname } = useLocation();
  const foodOrDrink = pathname.split('/')[1];
  const { domain, key } = data[foodOrDrink];
  const { domainRecommend, keyRecommend } = data[foodOrDrink];

  const [isLoading, setIsLoading] = useState(true);
  const [recipeDetails, isFetchingDetails] = useRecipeDetails(domain, key, id);
  const [
    recommendedRecipes,
    isFetchingRecommended,
  ] = useRecipes(domainRecommend, keyRecommend);

  const type = {
    name: data[foodOrDrink].name,
    category: data[foodOrDrink].category,
    nameRecommend: data[foodOrDrink].nameRecommend,
    categoryRecommend: data[foodOrDrink].categoryRecommend,
  };

  useEffect(() => {
    setIsLoading(isFetchingDetails && isFetchingRecommended);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetchingDetails, isFetchingRecommended]);

  function handleStorage() {
    let duplicated = false;
    let savedRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

    let alcoholicOrNot = '';
    let area = '';
    if (type.category === 'strAlcoholic') alcoholicOrNot = 'Alcoholic';
    if (recipeDetails.strArea) area = recipeDetails.strArea;

    const favoriteRecipe = {
      id: recipeDetails[`id${type.name}`],
      type: foodOrDrink.split('s')[0],
      area,
      category: recipeDetails.strCategory,
      alcoholicOrNot,
      name: recipeDetails[`str${type.name}`],
      image: recipeDetails[`str${type.name}Thumb`],
    };

    if (savedRecipes) {
      savedRecipes = savedRecipes
        .filter(({ id: recipeId }) => {
          const isNotDuplicated = recipeId !== recipeDetails[`id${type.name}`];
          if (!isNotDuplicated) duplicated = true;
          return isNotDuplicated;
        });
      if (duplicated) {
        return localStorage
          .setItem('favoriteRecipes', JSON.stringify(savedRecipes));
      }
      return localStorage
        .setItem('favoriteRecipes', JSON.stringify([...savedRecipes, favoriteRecipe]));
    }

    localStorage
      .setItem('favoriteRecipes', JSON.stringify([favoriteRecipe]));
  }

  function renderDetails() {
    return (
      <>
        <BasicInfo
          name={ type.name }
          category={ type.category }
          recipe={ recipeDetails }
        />
        <InteractiveButtons handleStorage={ handleStorage } id={ id } />
        <Ingredients recipe={ recipeDetails } />
        <Instructions name={ type.name } recipe={ recipeDetails } />
        <VideoRecipe name={ type.name } recipe={ recipeDetails } />
        <Recommendations
          name={ type.nameRecommend }
          category={ type.categoryRecommend }
          recommendedRecipes={ recommendedRecipes }
        />
        <StartRecipe />
      </>
    );
  }

  return (
    <div>
      {isLoading ? <Loading /> : renderDetails()}
    </div>

  );
}

export default DetailScreen;
