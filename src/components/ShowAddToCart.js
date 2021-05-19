import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowAddToCart extends Component {
  constructor(props) {
    super(props);

    const cart = JSON.parse(localStorage.getItem('item'));
    let qtdeProduct = [];
    let values = [];
    for (let index = 0; index < cart.length; index += 1) {
      qtdeProduct = [...qtdeProduct, 1];
      values = [...values, cart[index].price];
    }

    this.state = {
      qtdeProduct,
      cart,
      values,
    };
  }

  componentWillUnmount() {
    const { qtdeProduct, values } = this.state;
    localStorage.setItem('qtd', JSON.stringify(qtdeProduct));
    localStorage.setItem('totValue', JSON.stringify(values));
  }

  addValueByQuantify(index) {
    const { qtdeProduct, cart } = this.state;
    const subtotal = qtdeProduct[index] * cart[index].price;
    return subtotal;
  }

  updateValues(index, qtd) {
    const { cart, values } = this.state;
    const subtotal = qtd * cart[index].price;
    let arrValues = [];
    for (let index2 = 0; index2 < cart.length; index2 += 1) {
      if (index2 === index) {
        arrValues = [...arrValues, subtotal];
      } else { arrValues = [...arrValues, values[index2]]; }
    }
    this.setState({ values: arrValues });
  }

  addTotalCartValue() {
    const { values } = this.state;

    return (
      <div>
        {`Valor total da compra: R$ ${values.reduce((acc, value) => acc + value)}`}
      </div>
    );
  }

  increaseProductQuantify(index) {
    const { qtdeProduct } = this.state;
    let arrQtdeProduct = [];
    for (let index2 = 0; index2 < qtdeProduct.length; index2 += 1) {
      if (index2 === index) {
        arrQtdeProduct = [...arrQtdeProduct, qtdeProduct[index2] + 1];
      } else { arrQtdeProduct = [...arrQtdeProduct, qtdeProduct[index2]]; }
      this.setState({
        qtdeProduct: arrQtdeProduct,
      });
      this.updateValues(index, arrQtdeProduct[index]);
    }
  }

  decreaseProductQuantify(index) {
    const { qtdeProduct } = this.state;
    if (qtdeProduct[index] <= 1) return;
    let arrQtdeProduct = [];
    for (let index2 = 0; index2 < qtdeProduct.length; index2 += 1) {
      if (index2 === index) {
        arrQtdeProduct = [...arrQtdeProduct, qtdeProduct[index2] - 1];
      } else { arrQtdeProduct = [...arrQtdeProduct, qtdeProduct[index2]]; }
      this.setState({
        qtdeProduct: arrQtdeProduct,
      });
      this.updateValues(index, arrQtdeProduct[index]);
    }
  }

  removeProduct(index) {
    const { cart } = this.state;
    const array = JSON.parse(localStorage.getItem('item'));
    const removed = [];
    array.forEach((object) => {
      if (object.id !== cart[index].id) {
        removed.push(object);
      }
    });
    localStorage.setItem('item', JSON.stringify(removed));
    window.location.reload();
  }

  renderCart() {
    const { qtdeProduct, cart } = this.state;
    console.log(cart[0]);
    return cart.map((item, index) => (
      <div key={ index }>
        <button type="button" onClick={ () => this.removeProduct(index) }>X</button>
        <img src={ item.thumbnail } alt={ item.title } width="50px" />
        <span data-testid="shopping-cart-product-name">{item.title}</span>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => this.decreaseProductQuantify(index) }
        >
          -
        </button>
        <span
          data-testid="shopping-cart-product-quantity"
        >
          {` ${qtdeProduct[index]} `}
        </span>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => this.increaseProductQuantify(index) }
        >
          +
        </button>
        <span>{`R$ ${this.addValueByQuantify(index)}`}</span>
      </div>
    ));
  }

  render() {
    return (
      <div>
        {this.renderCart()}
        {this.addTotalCartValue()}
        <Link to="/checkout">
          <button data-testid="checkout-products" type="submit">Finalizar compra</button>
        </Link>
      </div>
    );
  }
}

export default ShowAddToCart;
