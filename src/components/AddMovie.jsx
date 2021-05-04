import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.onResetState = this.onResetState.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onResetState() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title_input" data-testid="title-input-label">
          Título
          <input
            type="text"
            id="title_input"
            name="title"
            value={ title }
            onChange={ this.handleChange }
            data-testid="title-input"
          />
        </label>
        <label htmlFor="subtitle_input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            id="subtitle_input"
            name="subtitle"
            value={ subtitle }
            onChange={ this.handleChange }
            data-testid="subtitle-input"
          />
        </label>
        <label htmlFor="image_input" data-testid="image-input-label">
          Imagem
          <input
            type="text"
            id="image_input"
            name="imagePath"
            value={ imagePath }
            onChange={ this.handleChange }
            data-testid="image-input"
          />
        </label>
        <label htmlFor="storyline_input" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline_input"
            cols="30"
            rows="10"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="rating_input" data-testid="rating-input-label">
          Avaliação
          <input
            type="number"
            name="rating"
            id="rating_input"
            data-testid="rating-input"
            value={ rating }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="genre_input" data-testid="genre-input-label">
          Gênero
          <select
            name="genre"
            id="genre_input"
            data-testid="genre-input"
            value={ genre }
            onChange={ this.handleChange }
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
        <button type="submit" data-testid="send-button" onClick={ this.onResetState }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
