import React, { Component } from 'react';
import CategoryFilter from '../components/CategoryFilter';

class Main extends Component {
  render() {
    return (
      <div>
        <CategoryFilter />
        <form>
          <input type="text" />
        </form>
        <h1
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>

    );
  }
}

export default Main;
