import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useRecipes from '../../hooks/useRecipes';
import useRecipeDetails from '../../hooks/useRecipeDetails';
import data from '../../helpers/apiData';
import '../../styles/global.scss';

import Loading from '../../components/Loading';
import BasicInfo from '../../components/RecipeDetails/BasicInfo';
import InteractiveButtons from '../../components/RecipeDetails/InteractiveButtons';
import Ingredients from '../../components/RecipeDetails/Ingredients';
import VideoRecipe from '../../components/RecipeDetails/VideoRecipe';
import Instructions from '../../components/RecipeDetails/Instructions';
import Recommendations from '../../components/RecipeDetails/Recommendations';
import StartRecipe from '../../components/RecipeDetails/StartRecipe';

const RECOMMENDED_RECIPES_AMOUNT = 6;

function DetailScreen() {
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
  ] = useRecipes(domainRecommend, keyRecommend, RECOMMENDED_RECIPES_AMOUNT);

  const type = {
    name: data[foodOrDrink].name,
    category: data[foodOrDrink].category,
    nameRecommend: data[foodOrDrink].nameRecommend,
    categoryRecommend: data[foodOrDrink].categoryRecommend,
  };

  useEffect(() => {
    setIsLoading(isFetchingDetails && isFetchingRecommended);
  }, [isFetchingDetails, isFetchingRecommended]);

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

        <Ingredients recipe={ recipeDetails } />

        <Instructions name={ type.name } recipe={ recipeDetails } />

        <VideoRecipe name={ type.name } recipe={ recipeDetails } />

        <Recommendations
          name={ type.nameRecommend }
          category={ type.categoryRecommend }
          recommendedRecipes={ recommendedRecipes }
        />

        <StartRecipe id={ id } pathname={ pathname } />
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
