import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const result = movies
      .map((movie) => <MovieCard key={ movie.title } info={ movie } />);
    return (
      <section>
        {result}
      </section>
    );
  }
}

export default MovieList;
