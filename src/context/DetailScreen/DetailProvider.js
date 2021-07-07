import React from 'react';
import { node } from 'prop-types';
import Context from './DetailContext';

function DetailProvider({ children }) {
  // const [recipeDetails, setRecipeDetails] = useState();
  // const [recommendedRecipes, setRecommendedRecipes] = useState();

  // const value = {
  //   recipeDetails,
  //   recommendedRecipes,
  //   setRecipeDetails,
  //   setRecommendedRecipes,
  // };
  return (
    <Context.Provider value="">
      {children}
    </Context.Provider>
  );
}

export default DetailProvider;

DetailProvider.propTypes = {
  children: node.isRequired,
};
