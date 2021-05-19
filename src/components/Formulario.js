import React, { Component } from 'react';
import { Redirect } from 'react-router';
import estados from './Data';

export default class Formulario extends Component {
  // função mascaraTelefone foi retirado de pesquisa no Stack Overflow
  // mascaraTelefone(valor) {
  //   const tel = document.getElementById('tel');
  //   valor = valor.replace(/\D/g, '');
  //   valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
  //   valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
  //   tel.value = valor;
  // }
  constructor() {
    super();
    this.state = { redirect: false };
    this.compreMais = this.compreMais.bind(this);
  }

  compreMais() {
    localStorage.clear();
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
    return (
      <form method="get" onSubmit={ this.compreMais }>
        <h3>Informações do Comprador</h3>
        <div>
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome Completo"
            name="id-cliente"
            required
          />
          <input
            data-testid="checkout-cpf"
            type="text"
            placeholder="CPF"
            name="id-cliente"
            required
          />
          <input
            data-testid="checkout-email"
            type="email"
            placeholder="Email"
            name="id-cliente"
            required
          />
          <input
            data-testid="checkout-phone"
            // onChange={ (e) => this.mascaraTelefone(e.target.value) }
            // onKeyPress={ (e) => this.mascaraTelefone(e.target.value) }
            type="tel"
            placeholder="Telefone"
            name="id-cliente"
            id="tel"
            required
          />
        </div>
        <div>
          <input
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
            name="endereço"
            required
          />
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Endereço"
            name="endereço"
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Complemento"
            name="endereço"
            required
          />
          <input
            type="text"
            placeholder="Numero"
            name="endereço"
            required
          />
          <input
            type="text"
            placeholder="Cidade"
            name="endereço"
            required
          />
          <select name="endereço" placeholder="Estado" required>
            <option value="">Estados</option>
            { estados.map((uf) => <option key={ uf } value={ uf }>{ uf }</option>) }
          </select>
          <section>
            <h3>Método de Pagamento</h3>
            <label htmlFor="boleto">
              Boleto
              <input
                type="radio"
                id="boleto"
                value="boleto"
                name="forma-pagamento"
                required
              />
            </label>
            <label htmlFor="master">
              Master
              <input
                type="radio"
                id="master"
                value="master"
                name="forma-pagamento"
              />
            </label>
            <label htmlFor="visa">
              Visa
              <input
                type="radio"
                id="visa"
                value="visa"
                name="forma-pagamento"
              />
            </label>
            <label htmlFor="elo">
              Elo
              <input
                type="radio"
                id="elo"
                value="elo"
                name="forma-pagamento"
              />
            </label>
          </section>
          <button type="submit">Comprar</button>
          { redirect && <Redirect to="/" /> }
        </div>
      </form>
    );
  }
}
