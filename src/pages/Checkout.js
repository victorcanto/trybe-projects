import React, { Component } from 'react';
import estados from '../components/Data';

class Checkout extends Component {
  constructor() {
    super();
    const item = JSON.parse(localStorage.getItem('item'));
    const totValue = JSON.parse(localStorage.getItem('totValue'));
    this.state = { item, totValue };
  }

  mascaraTelefone(valor) {
    const tel = document.getElementById('tel');
    valor = valor.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
    tel.value = valor;
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
          <h2>Revise seus pedidos.</h2>
          { this.renderCart() }
          <h2>{ `Total: R$${totValue.reduce((a, b) => a + b)}` }</h2>
        </section>
        <form action="" method="post">
          <div>
            <input type="text" placeholder="Nome Completo" name="id-cliente" required />
            <input type="text" placeholder="CPF" name="id-cliente" required />
            <input type="email" placeholder="Email" name="id-cliente" required />
            <input
              onChange={ (e) => this.mascaraTelefone(e.target.value) }
              onKeyPress={ (e) => this.mascaraTelefone(e.target.value) }
              type="tel"
              placeholder="Telefone"
              name="id-cliente"
              id="tel"
              required
            />
          </div>
          <div>
            <input type="text" placeholder="CEP" name="endereço" required />
            <input type="text" placeholder="Endereço" name="endereço" required />
          </div>
          <div>
            <input type="text" placeholder="Complemento" name="endereço" required />
            <input type="text" placeholder="Numero" name="endereço" required />
            <input type="text" placeholder="Cidade" name="endereço" required />
            <select name="endereço" placeholder="Estado" required>
              <option value="null">Estados</option>
              { estados.map((uf) => <option key={ uf } value={ uf }>{ uf }</option>) }
            </select>
            <section>
              <input type="radio" />
            </section>
          </div>
        </form>
      </div>
    );
  }
}

export default Checkout;
