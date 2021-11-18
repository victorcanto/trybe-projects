import React, { useCallback, useState, useEffect } from 'react';
import { requestUsersByRole } from '../../../../../services/api';
import { useUser } from '../../../../../contexts/userContext';
import StyledAddressInfo from './styles';
import { useProduct } from '../../../../../contexts/productContext';
import Form from '../../../../../components/Form';
import useForm from '../../../../../hooks/useForm';

const AddressInfo = () => {
  const [{ values }, handleChange, handleSubmit] = useForm();
  const { products, total } = useProduct();

  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState();
  const { user } = useUser();

  const handleCreateSale = () => {
    console.log({ values, products, total, selectedSeller });
    // handle create a sale
  };

  const getAllSellers = useCallback(
    async () => {
      const result = await requestUsersByRole(user.token, 'seller');
      setSellers(result.users);
    },
    [user.token],
  );

  useEffect(() => getAllSellers(), [getAllSellers]);

  useEffect(() => {
    if (sellers.length > 0) {
      setSelectedSeller(sellers[0].id);
    }
  }, [sellers]);

  return (
    <StyledAddressInfo>
      <Form onSubmit={ handleSubmit(handleCreateSale) }>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <br />
          <select
            data-testid="customer_checkout__select-seller"
            name="seller"
            id="seller"
            select
            value={ selectedSeller }
            onChange={ (event) => setSelectedSeller(event.target.value) }

          >
            {sellers.length && sellers.map((seller) => (
              <option key={ seller.id } value={ seller.id }>
                {seller.name}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="seller">
          Endereço
          <br />
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            name="address"
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="seller">
          Número
          <br />
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="number"
            name="addressNumber"
            onChange={ handleChange }
          />
        </label>
        <div>
          <button
            data-testid="customer_checkout__button-submit-order"
            type="submit"
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </Form>
    </StyledAddressInfo>
  );
};

export default AddressInfo;
