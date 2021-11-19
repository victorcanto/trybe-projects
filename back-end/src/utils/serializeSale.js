const userId = 'user_id';
const sellerId = 'seller_id';
const totalPrice = 'total_price';
const deliveryAddress = 'delivery_address';
const deliveryNumber = 'delivery_number';
const saleDate = 'sale_date';

const serializeSale = (sale) => ({
    [sellerId]: sale.sellerId,
    [userId]: sale.userId,
    [totalPrice]: sale.totalPrice,
    [deliveryAddress]: sale.deliveryAddress,
    [deliveryNumber]: sale.deliveryNumber,
    [saleDate]: sale.saleDate,
    status: sale.status,
});

module.exports = { serializeSale };
