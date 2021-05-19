import React, { Component } from 'react';
import Formulario from '../components/Formulario';

class Checkout extends Component {
  constructor() {
    super();
    const item = JSON.parse(localStorage.getItem('item'));
    const totValue = JSON.parse(localStorage.getItem('totValue'));
    this.state = { item, totValue };
  }

  renderCart() {
    const { item, totValue } = this.state;
    return item.map((element, index) => (
      <div key={ element.id }>
        <img src={ element.thumbnail } alt={ element.title } width="50px" />
        <span data-testid="shopping-cart-product-name">{element.title}</span>
        <span>
          { ` - R$${totValue[index]}` }
        </span>
      </div>
    ));
  }

  render() {
    const { totValue } = this.state;
    return (
      <div>
        <section>
          <h3>Revise seus pedidos.</h3>
          { this.renderCart() }
          <h2>{ `Total: R$${totValue.reduce((a, b) => a + b)}` }</h2>
        </section>
        <div>
          Alguma coisa
          <Formulario />
        </div>
      </div>
    );
  }
}

export default Checkout;
