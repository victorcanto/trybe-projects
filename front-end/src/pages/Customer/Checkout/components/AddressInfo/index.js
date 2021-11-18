import React, { useCallback, useState, useEffect } from 'react';
import { requestUsersByRole } from '../../../../../services/api';
import { useUser } from '../../../../../contexts/userContext';
import StyledAddressInfo from './styles';

const AddressInfo = () => {
  const [sellers, setSellers] = useState([]);
  const { user } = useUser();
  const getAllSellers = useCallback(
    async () => {
      const result = await requestUsersByRole(user.token, 'seller');
      setSellers(result.users);
    },
    [user.token],
  );

  useEffect(() => getAllSellers(), [getAllSellers]);

  console.log('');
  return (
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
            {sellers.length && sellers.map((seller) => (
              <option key={ seller.id } value={ seller.name }>
                {seller.name}
              </option>
            ))}
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
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="number"
          />
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
};

export default AddressInfo;
