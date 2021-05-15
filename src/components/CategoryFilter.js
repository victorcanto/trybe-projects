import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import * as api from '../services/api';

class CategoryFilter extends Component {
  constructor() {
    super();
    this.state = { categoryList: [] };
  }

  componentDidMount() {
    this.fetchCategoryList();
  }

  async fetchCategoryList() {
    const dataCategories = await api.getCategories();
    this.setState({ categoryList: dataCategories });
  }

  render() {
    const { categoryList } = this.state;
    return (
      <aside>
        <nav>
          { categoryList
            .map(({ name, id }) => (
              <Link to={ `./category/${name}` } data-testid="category" key={ id }>{ name }</Link>
            )) }
        </nav>
      </aside>
    );
  }
}

export default CategoryFilter;
