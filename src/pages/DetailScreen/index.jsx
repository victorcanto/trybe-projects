<<<<<<< HEAD
import React, { useContext, useEffect } from 'react';
=======
import React, { } from 'react';
>>>>>>> 97ada00bdb5f526d0f337a3455824b24b6b7d61d
import { useLocation, useParams } from 'react-router-dom';
import useRecipeDetails from '../../hooks/useRecipeDetails';
import '../../styles/global.scss';
import c from './constants';
import useRecipes from '../../hooks/useRecipes';
<<<<<<< HEAD
import Context from '../../context/DetailScreen/DetailContext';
=======
// import Context from '../../context/DetailScreen/DetailContext';
>>>>>>> 97ada00bdb5f526d0f337a3455824b24b6b7d61d
import BasicInfo from '../../components/RecipeDetails/BasicInfo';
import InteractiveButtons from '../../components/RecipeDetails/InteractiveButtons';
import Ingredients from '../../components/RecipeDetails/Ingredients';
import Instructions from '../../components/RecipeDetails/Instructions';
import VideoRecipe from '../../components/RecipeDetails/VideoRecipe';
import Recommendations from '../../components/RecipeDetails/Recommendations';
import StartRecipe from '../../components/RecipeDetails/StartRecipe';

function DetailScreen() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const split = pathname.split('/')[1];
  const data = {
    comidas: {
      key: c.meals,
      domain: c.themealdb,
      name: c.Meal,
      category: c.strCategory,
      keyRecommend: c.drinks,
      domainRecommend: c.thecocktaildb,
      nameRecommend: c.Drink,
      categoryRecommend: c.strAlcoholic,
    },
    bebidas: {
      key: c.drinks,
      domain: c.thecocktaildb,
      name: c.Drink,
      category: c.strAlcoholic,
      keyRecommend: c.meals,
      domainRecommend: c.themealdb,
      nameRecommend: c.Meal,
      categoryRecommend: c.strCategory,
    },
  };

  const API_INFO_DETAILS = {
    id,
    key: data[split].key,
    domain: data[split].domain,
  };

  const type = {
    name: data[split].name,
    category: data[split].category,
    nameRecommend: data[split].nameRecommend,
    categoryRecommend: data[split].categoryRecommend,
  };

  const API_INFO_RECOMMENDED = {
    key: data[split].keyRecommend,
    domain: data[split].domainRecommend,
    qtdR: 6,
  };

<<<<<<< HEAD
  const DATA_DETAILS = useRecipeDetails(API_INFO_DETAILS);
  const DATA_RECOMMENDED = useRecipes(API_INFO_RECOMMENDED);

  const {
    recipeDetails,
    setRecipeDetails,
    recommendedRecipes,
    setRecommendedRecipes } = useContext(Context);

  useEffect(() => {
    setRecipeDetails(DATA_DETAILS);
    setRecommendedRecipes(DATA_RECOMMENDED);
  }, [DATA_DETAILS, DATA_RECOMMENDED, setRecipeDetails, setRecommendedRecipes]);
=======
  const recipeDetails = useRecipeDetails(API_INFO_DETAILS);
  const recommendedRecipes = useRecipes(API_INFO_RECOMMENDED);
>>>>>>> 97ada00bdb5f526d0f337a3455824b24b6b7d61d

  function renderDetails() {
    return (
      <>
        <BasicInfo
          recipeDetails={ recipeDetails }
          name={ type.name }
          category={ type.category }
        />
        <InteractiveButtons />
        <Ingredients recipeDetails={ recipeDetails } />
        <Instructions recipeDetails={ recipeDetails } />
        <VideoRecipe recipeDetails={ recipeDetails } name={ type.name } />
        <Recommendations
          recipes={ recommendedRecipes }
          name={ type.nameRecommend }
          category={ type.categoryRecommend }
        />
        <StartRecipe />
      </>
    );
  }

  return (
    <div>
<<<<<<< HEAD
      {(recipeDetails && recommendedRecipes) && renderDetails()}
=======
      {renderDetails()}
>>>>>>> 97ada00bdb5f526d0f337a3455824b24b6b7d61d
    </div>

  );
}

export default DetailScreen;
