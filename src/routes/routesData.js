import Login from '../pages/Login';
import MealScreen from '../pages/MealScreen';
import DrinkScreen from '../pages/DrinkScreen';
import DetailScreen from '../pages/DetailScreen';
import InProgress from '../pages/DetailScreen/InProgress';
import Explorer from '../pages/Explorer';
import ExploreFoods from '../pages/Explorer/Food';
import ExploreDrinks from '../pages/Explorer/Drink';
import ExploreIngredientsFood from '../pages/Explorer/Food/Ingredients';
import ExploreIngredientsDrink from '../pages/Explorer/Drink/Ingredients';
import FoodOrigins from '../pages/Explorer/Food/Origin';
import Profile from '../pages/Profile';
import FavoriteScreen from '../pages/FavoriteScreen';
import MadeRecipes from '../pages/MadeRecipes';

// component should be the page
const routes = [
  {
    path: '/',
    exact: true,
    component: Login,
  },
  {
    path: '/comidas',
    exact: true,
    component: MealScreen,
  },
  {
    path: '/bebidas',
    exact: true,
    component: DrinkScreen,
  },
  {
    path: '/comidas/:id',
    exact: true,
    component: DetailScreen,
  },
  {
    path: '/bebidas/:id',
    exact: true,
    component: DetailScreen,
  },
  {
    path: '/comidas/:id/in-progress',
    exact: true,
    component: InProgress,
  },
  {
    path: '/bebidas/:id/in-progress',
    exact: true,
    component: InProgress,
  },
  {
    path: '/explorar',
    exact: true,
    component: Explorer,
  },
  {
    path: '/explorar/comidas',
    exact: true,
    component: ExploreFoods,
  },
  {
    path: '/explorar/bebidas',
    exact: true,
    component: ExploreDrinks,
  },
  {
    path: '/explorar/comidas/ingredientes',
    exact: true,
    component: ExploreIngredientsFood,
  },
  {
    path: '/explorar/bebidas/ingredientes',
    exact: true,
    component: ExploreIngredientsDrink,
  },
  {
    path: '/explorar/comidas/area',
    exact: true,
    component: FoodOrigins,
  },
  {
    path: '/perfil',
    exact: true,
    component: Profile,
  },

  {
    path: '/receitas-feitas',
    exact: true,
    component: MadeRecipes,
  },
  {
    path: '/receitas-favoritas',
    exact: true,
    component: FavoriteScreen,
  },
];

export default routes;
