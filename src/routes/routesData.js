import Login from '../pages/Login';
<<<<<<< HEAD
import MealScreen from '../pages/MainScreen/MealScreen';
import DrinkScreen from '../pages/MainScreen/DrinkScreen';
import DetailScreen from '../pages/DetailScreen/DetailScreen';
import Explorer from '../pages/Explorer';
import ExploreFoods from '../pages/Explorer/Food';
import ExploreDrinks from '../pages/Explorer/Drink';
import ExploreIngredientsFood from '../pages/Explorer/Food/Ingredients';
import ExploreIngredientsDrink from '../pages/Explorer/Drink/Ingredients';
import FoodOrigins from '../pages/Explorer/Food/Origin';
import Profile from '../pages/Profile';
=======
import MealScreen from '../pages/MealScreen';
import DrinkScreen from '../pages/DrinkScreen';
import DetailScreen from '../pages/DetailScreen';
>>>>>>> main-group-13

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
  // {
  //   path: '/comidas/:id/in-progress',
  //   exact: true,
  //   component: '',
  // },
  // {
  //   path: '/bebidas/:id/in-progress',
  //   exact: true,
  //   component: '',
  // },
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
  // {
  //   path: '/receitas-feitas',
  //   exact: true,
  //   component: '',
  // },
  // {
  //   path: '/receitas-favoritas',
  //   exact: true,
  //   component: '',
  // },
];

export default routes;
