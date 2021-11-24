const userId = 'user_id';
const sellerId = 'seller_id';
const totalPrice = 'total_price';
const deliveryAddress = 'delivery_address';
const deliveryNumber = 'delivery_number';
const saleDate = 'sale_date';
const productId = 'product_id';
const saleIdKey = 'sale_id';

module.exports = {
  sale(sale) {
    return {
      [sellerId]: sale.sellerId,
      [userId]: sale.userId,
      [totalPrice]: sale.totalPrice,
      [deliveryAddress]: sale.deliveryAddress,
      [deliveryNumber]: sale.deliveryNumber,
      [saleDate]: sale.saleDate,
      status: sale.status,
    };
  },

  product(product, createdSaleId) {
    return {
      [productId]: product.id, 
      [saleIdKey]: createdSaleId, 
      quantity: product.quantity,
    };
  },
};
