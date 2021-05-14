import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
      </Switch>
    </Router>

  );
}

export default App;
