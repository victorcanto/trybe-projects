const validateSaleData = (
  { values: { address, addressNumber }, total, selectedSeller }, userId,
) => ({
  userId,
  sellerId: selectedSeller,
  totalPrice: Number(total.replace(',', '.')),
  deliveryAddress: address,
  deliveryNumber: addressNumber,
  saleDate: new Date(),
  status: 'Pendente',
});

export default validateSaleData;
