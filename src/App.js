import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MealScreen from './components/MainScreen/MealScreen';
import DrinkScreen from './components/MainScreen/DrinkScreen';
import DetailScreen from './components/DetailScreen/DetailScreen';

function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route exact path="/" />
        <Route exact path="/comidas/" component={ MealScreen } />
        <Route exact path="/bebidas/" component={ DrinkScreen } />
        <Route path="/comidas/:id" component={ DetailScreen } />
        <Route path="/bebidas/:id" component={ DetailScreen } />
      </Switch>
    </div>

  );
}

export default App;
