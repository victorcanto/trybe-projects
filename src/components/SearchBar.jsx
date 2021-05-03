import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <form onSubmit={ this.handleSubmit } data-testid="search-bar-form">
        <label htmlFor="search_input" data-testid="text-input-label">
          Inclui o texto
          <input
            id="search_input"
            type="text"
            value={ this.props.searchText }
            onChange={ this.props.onSearchTextChange }
            data-testid="text-input"
          />
        </label>
        <label
          htmlFor="favorites_input"
          data-testid="checkbox-input-label"
        >
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            id="favorites_input"
            checked={ this.props.bookmarkedOnly }
            onChange={ this.props.onBookmarkedChange }
          />
        </label>
        <label htmlFor="gender_input" data-testid="select-input-label">
          Filtrar por gênero
          <select
            id="gender_input"
            value={ this.props.selectedGenre }
            onChange={ this.props.onSelectedGenreChange }
            data-testid="select-input"
          >
            <option value="" data-testid="select-option">Todos</option>
            <option value="action" data-testid="select-option">Ação</option>
            <option value="comedy" data-testid="select-option">Comédia</option>
            <option value="thriller" data-testid="select-option">Suspense</option>
          </select>
        </label>

      </form>
    );
  }
}

export default SearchBar;
