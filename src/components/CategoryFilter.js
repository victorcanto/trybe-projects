import React, { Component } from 'react';
import * as api from '../services/api';


class CategoryFilter extends Component {
  constructor() {
    super();
    this.state = { categoryList: [] };
    this.onclick = this.onclick.bind(this);
  }

  componentDidMount() {
    this.fetchCategoryList();
  }

  async fetchCategoryList() {
    const dataCategories = await api.getCategories();
    this.setState({ categoryList: dataCategories });
  }

  onclick(id) {
    const { fetchAPI } = this.props;
    fetchAPI(id);
  }

  render() {
    const { categoryList } = this.state;
    return (
      <nav>
        <ul>
          { categoryList
            .map(({ name, id }) => (
              <li onClick={ () => this.onclick(id) } data-testid="category" key={ id }>{ name }</li>
            )) }
        </ul>
      </nav>
    );
  }
}

export default CategoryFilter;
