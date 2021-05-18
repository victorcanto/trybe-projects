import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class ShowAddToCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qtdeProduct: 0,
      // productItem: '',
    };
  }

  addTotalCartValue() {
    return 'total';
  }

  increaseProductQuantify() {
    const { qtdeProduct } = this.state;
    this.setState({
      qtdeProduct: qtdeProduct + 1,
    });
  }

  decreaseProductQuantify() {
    const { qtdeProduct } = this.state;
    if (qtdeProduct <= 0) return;
    this.setState({
      qtdeProduct: qtdeProduct - 1,
    });
  }

  removeProduct() {

  }

  render() {
    const { qtdeProduct } = this.state;
    return (
      <div>
        <div>
          <button type="button" onClick={ () => this.removeProduct() }>X</button>
          <span>Produto</span>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => this.decreaseProductQuantify() }
          >
            -
          </button>
          <span>{` ${qtdeProduct} `}</span>
          <button
            data-testid="product-increase-quantity"
            type="button"
            onClick={ () => this.increaseProductQuantify() }
          >
            +
          </button>
          <span>R$ Valor do produto</span>
        </div>

        <div>{`Valor total da compra: R$ ${this.addTotalCartValue()}`}</div>
        <button type="submit">Finalizar compra</button>
      </div>
    );
  }
}

// ShowAddToCart.propTypes = {

// };

export default ShowAddToCart;
