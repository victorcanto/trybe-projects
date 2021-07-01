import Login from '../pages/Login';
import MealScreen from '../pages/MealScreen';
import DrinkScreen from '../pages/DrinkScreen';
import DetailScreen from '../pages/DetailScreen';

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
