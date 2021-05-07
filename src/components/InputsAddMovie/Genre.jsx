import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <label htmlFor="genre_input" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genre_input"
          data-testid="genre-input"
          value={ genre }
          onChange={ handleChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string,
  handleChange: PropTypes.func,
};

Genre.defaultProps = {
  genre: '',
  handleChange: PropTypes.func,
};

export default Genre;
