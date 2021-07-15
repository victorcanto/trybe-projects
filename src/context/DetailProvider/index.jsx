// import React, { useState, useEffect } from 'react';
// import { node } from 'prop-types';

// import Context from './DetailContext';
// import useRecipes from '../../hooks/useRecipes';
// import useRecipeDetails from '../../hooks/useRecipeDetails';

// const API_INFO_RECOMMENDED = {
//   domain: 'themealdb',
//   key: 'meals',
//   qtdR: 6,
// };

// const API_INFO_DETAILS = {
//   id: '52977',
//   key: 'meals',
//   domain: 'themealdb',
// };

// function DetailProvider({ children }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [infoDetails, setInfoDetails] = useState(API_INFO_DETAILS);
//   const [recipeDetails, isFetchingDetails] = useRecipeDetails(infoDetails);
//   const [infoRecommended, setInfoRecommended] = useState(API_INFO_RECOMMENDED);
//   const { domain, key } = infoRecommended;
//   const recommendAmount = 6;
//   const [
//     recommendedRecipes,
//     isFetchingRecommended,
//   ] = useRecipes(domain, key, recommendAmount);

//   useEffect(() => {
//     setIsLoading(isFetchingDetails && isFetchingRecommended);
//   }, [isFetchingDetails, isFetchingRecommended]);

//   const value = {
//     setInfoDetails,
//     setInfoRecommended,
//     recipeDetails,
//     recommendedRecipes,
//     isLoading,
//   };

//   return (
//     <Context.Provider value={ value }>
//       {children}
//     </Context.Provider>
//   );
// }

// export default DetailProvider;

// DetailProvider.propTypes = {
//   children: node.isRequired,
// };
