import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location: { itemCard } } = this.props;
    const { title, price, thumbnail } = itemCard;
    return (
      <div>
        <Link to="/">
          <button type="button">&#8678;</button>
        </Link>
        <Link to="/shopping-cart">
          <button type="button">&#128722;</button>
        </Link>
        <h1 data-testid="product-detail-name">{ `${title} - R$${price}` }</h1>
        <div className="details-container">
          <div>
            <img src={ thumbnail } alt="Imagem do Produto" />
          </div>
          <div>
            <ul>
              <li>O produto é bom</li>
              <li>O produto é bom demais</li>
              <li>O produto é bão</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    itemCard: PropTypes.shape({
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default ProductDetails;
