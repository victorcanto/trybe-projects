import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  onclick(id) {
    const { fetchAPI } = this.props;
    fetchAPI(id);
  }

  async fetchCategoryList() {
    const dataCategories = await api.getCategories();
    this.setState({ categoryList: dataCategories });
  }

  render() {
    const { categoryList } = this.state;
    return (
      <nav>
        <ul>
          { categoryList
            .map(({ name, id }) => (
              <button
                type="button"
                onClick={ () => this.onclick(id) }
                data-testid="category"
                key={ id }
              >
                { name }
              </button>
            )) }
        </ul>
      </nav>
    );
  }
}

CategoryFilter.propTypes = { fetchAPI: PropTypes.func.isRequired };

export default CategoryFilter;
