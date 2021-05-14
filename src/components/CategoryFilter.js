import React, { Component } from 'react';
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
        <ul>
          { categoryList
            .map(({ name, id }) => <li data-testid="category" key={ id }>{ name }</li>) }
        </ul>
      </aside>
    );
  }
}

export default CategoryFilter;
