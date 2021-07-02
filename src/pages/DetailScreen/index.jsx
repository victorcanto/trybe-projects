import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import RecommendedCard from '../../components/RecommendedCard';
import useRecipeDetails from '../../hooks/useRecipeDetails';
import '../../styles/global.scss';
import styles from './details.module.scss';
import c from './constants';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import useRecipes from '../../hooks/useRecipes';

function DetailScreen() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const split = pathname.split('/')[1];
  const data = {
    comidas: [
      c.meals,
      c.themealdb,
      c.Meal,
      c.strCategory,
      c.drinks,
      c.thecocktaildb,
      c.Drink,
      c.strAlcoholic,
    ],
    bebidas: [
      c.drinks,
      c.thecocktaildb,
      c.Drink,
      c.strAlcoholic,
      c.meals,
      c.themealdb,
      c.Meal,
      c.strCategory,
    ],
  };

  const dataForRecipeApi = {
    id,
    key: data[split][0],
    domain: data[split][1],
  };

  const type = {
    name: data[split][2],
    category: data[split][3],
    nameRecommend: data[split][6],
    categoryRecommend: data[split][7],
  };

  const dataForRecommendedApi = {
    name: data[split][4],
    domain: data[split][5],
    qtdR: 6,
  };

  const recipeDetails = useRecipeDetails(dataForRecipeApi);
  const recipes = useRecipes(dataForRecommendedApi);

  function filterIngredients([key, value]) {
    return key.includes('strIngredient')
      && (value);
  }

  function filterMeasures([key, value]) {
    return key.includes('strMeasure')
      && (!!value && value !== ' ');
  }

  function createArrOfIngredientsAndMeasures() {
    const entries = Object.entries(recipeDetails);
    const ingredients = entries.filter(filterIngredients)
      .map((el) => el[1]);
    const measures = entries.filter(filterMeasures)
      .map((el) => el[1]);

    return ingredients
      .reduce((acc, cur, index) => [...acc, [cur, measures[index]]], []);
  }

  function renderIngredients() {
    const arrResult = createArrOfIngredientsAndMeasures();

    return (
      <div>
        <ul>
          {arrResult.map(([key, value], index) => (
            <li
              key={ key }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {!value ? key : `${key} - ${value}`}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function renderRecommendations(name, category) {
    return (
      <div className={ styles.recommendedCards }>
        {recipes.map((recipe, index) => (
          <RecommendedCard
            index={ index }
            key={ index }
            category={ recipe[category] }
            name={ recipe[`str${name}`] }
            thumb={ recipe[`str${name}Thumb`] }

          />))}
      </div>
    );
  }

  function getUrlYt() {
    const { strYoutube } = recipeDetails;
    if (strYoutube) {
      return strYoutube.split('v=')[1];
    }
  }

  function renderRecipeDetails(name, category) {
    const r = recipeDetails;
    const urlYT = getUrlYt();

    return (
      <div>
        <img
          data-testid="recipe-photo"
          src={ r[`str${name}Thumb`] }
          alt={ r[`str${name}`] }
          width="100%"
        />
        <h1 data-testid="recipe-title">{r[`str${name}`]}</h1>
        <div>
          <button
            type="button"
            data-testid="share-btn"
          >
            <img src={ shareIcon } alt="shareIcon" />
          </button>
          <button
            type="button"
            data-testid="favorite-btn"
          >
            <img src={ whiteHeartIcon } alt="whiteHeartIcon" />
          </button>
        </div>

        <p data-testid="recipe-category">{r[category]}</p>
        {renderIngredients()}
        <p data-testid="instructions">{r.strInstructions}</p>
        {name === c.Meal && <iframe
          data-testid="video"
          width="100%"
          height="215"
          src={ `https://www.youtube.com/embed/${urlYT}` }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture"
          allowFullScreen
        />}
        {renderRecommendations(type.nameRecommend, type.categoryRecommend)}
        <button
          className={ styles.startRecipeBtn }
          type="button"
          data-testid="start-recipe-btn"
        >
          INICIAR RECEITA
        </button>
      </div>
    );
  }

  return (
    <>
      {renderRecipeDetails(type.name, type.category)}
    </>
  );
}

export default DetailScreen;
