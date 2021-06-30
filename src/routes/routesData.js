import Login from '../pages/Login';
import MealScreen from '../pages/MainScreen/MealScreen';
import DrinkScreen from '../pages/MainScreen/DrinkScreen';
import DetailScreen from '../pages/DetailScreen/DetailScreen';

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
    path: '/comidas/:id-receita',
    exact: true,
    component: DetailScreen,
  },
  {
    path: '/bebidas/:id-receita',
    exact: true,
    component: DetailScreen,
  },
  // {
  //   path: '/comidas/:id-receita/in-progress',
  //   exact: true,
  //   component: '',
  // },
  // {
  //   path: '/bebidas/:id-receita/in-progress',
  //   exact: true,
  //   component: '',
  // },
  // {
  //   path: '/explorar',
  //   exact: true,
  //   component: '',
  // },
  // {
  //   path: '/explorar/comidas',
  //   exact: true,
  //   component: '',
  // },
  // {
  //   path: '/explorar/bebidas',
  //   exact: true,
  //   component: '',
  // },
  // {
  //   path: '/explorar/comidas/ingredientes',
  //   exact: true,
  //   component: '',
  // },
  // {
  //   path: '/explorar/bebidas/ingredientes',
  //   exact: true,
  //   component: '',
  // },
  // {
  //   path: '/explorar/comidas/area',
  //   exact: true,
  //   component: '',
  // },
  // {
  //   path: '/perfil',
  //   exact: true,
  //   component: '',
  // },
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
