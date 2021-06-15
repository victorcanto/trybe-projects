import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import ScreenGame from './components/ScreenGame';
import Settings from './components/Settings';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/game" component={ ScreenGame } />
      <Route path="/settings" component={ Settings } />
    </Switch>
  );
}
