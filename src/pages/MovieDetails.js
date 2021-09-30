import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import '../styles/MovieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
    };
  }

  componentDidMount() {
    this.onGetMovie();
  }

  async onDeleteMovie(id) {
    await movieAPI.deleteMovie(id);
  }

  async onGetMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie });
  }

  render() {
    const { movie } = this.state;
    if (Object.keys(movie).length === 0) return <Loading />;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
    return (
      <div className="movie-details-container" data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Título: ${title}` }</p>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="links-container">
          <button type="button"><Link to={ `${id}/edit` }>EDITAR</Link></button>
          <button type="button"><Link to="/">VOLTAR</Link></button>
          <button type="button">
            <Link to="/" onClick={ () => this.onDeleteMovie(id) }>DELETAR</Link>
          </button>
        </div>

      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieDetails;
