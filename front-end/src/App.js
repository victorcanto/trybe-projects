import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Products from './pages/Customer/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Checkout from './pages/Customer/Checkout';
import OrderDetails from './pages/OrderDetails';

const App = () => (
  <Switch>
    <Redirect exact from="/" to="/login" />
    <Route path="/login" component={ Login } />
    <Route path="/register" component={ Register } />
    <Route path="/customer/products" component={ Products } />
    <Route path="/customer/checkout" component={ Checkout } />
    <Route path="/customer/orders/:id" component={ OrderDetails } />
    <Route component={ NotFound } />
  </Switch>
);

export default App;
