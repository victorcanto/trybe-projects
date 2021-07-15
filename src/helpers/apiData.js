const data = {
  comidas: {
    key: 'meals',
    domain: 'themealdb',
    name: 'Meal',
    category: 'strCategory',
    keyRecommend: 'drinks',
    domainRecommend: 'thecocktaildb',
    nameRecommend: 'Drink',
    categoryRecommend: 'strAlcoholic',
  },
  bebidas: {
    key: 'drinks',
    domain: 'thecocktaildb',
    name: 'Drink',
    category: 'strAlcoholic',
    keyRecommend: 'meals',
    domainRecommend: 'themealdb',
    nameRecommend: 'Meal',
    categoryRecommend: 'strCategory',
  },
};

export default data;
