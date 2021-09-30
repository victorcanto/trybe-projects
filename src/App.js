import React from 'react';
// source :// https://reactrouter.com/web/guides/quick-start
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <h1>Movie Card Library CRUD</h1>
        <button type="button">
          <Link className="add-card-link" to="/movies/new">ADICIONAR CARTÃO</Link>
        </button>
      </header>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </Router>

  );
}

export default App;
