import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import '../styles/MovieList.css';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.onGetMovies();
  }

  async onGetMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
    });
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) return <Loading />;
    return (
      <div className="background-default" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
