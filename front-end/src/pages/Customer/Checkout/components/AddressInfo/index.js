import React from 'react';
import StyledAddressInfo from './styles';

const AddressInfo = () => (
  <StyledAddressInfo>
    <form action="">
      <label htmlFor="seller">
        P. Vendedora Responsável
        <br />

        <select
          data-testid="customer_checkout__select-seller"
          name="seller"
          id="seller"
        >
          <option value="seller1">Tiago Santos</option>
          <option value="seller2">Wellington Cypriano</option>
        </select>
      </label>

      <label htmlFor="seller">
        Endereço
        <br />

        <input data-testid="customer_checkout__input-address" type="text" />
      </label>

      <label htmlFor="seller">
        Número
        <br />

        <input data-testid="customer_checkout__input-addressNumber" type="number" />
      </label>

    </form>
    <div>
      <button
        data-testid="customer_checkout__button-submit-order"
        type="button"
      >
        FINALIZAR PEDIDO
      </button>
    </div>

  </StyledAddressInfo>
);

export default AddressInfo;
