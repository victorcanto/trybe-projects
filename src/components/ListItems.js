import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ListItems extends Component {
  render() {
    const { list } = this.props;

    return (
      <div>
        {list.length === 0 ? <span>Nenhum produto foi encontrado</span>
          : list.map((item) => <ProductCard item={ item } key={ item.id } />) }
      </div>

    );
  }
}

ListItems.propTypes = {
  list: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ListItems;
