const { 
  sale: Sale,
  saleProduct: SaleProduct,
  product: Product, sequelize } = require('../database/models');
const { saleSchema } = require('../schemas/saleSchema');
const { validateResponse, httpStatusCode, errors } = require('../utils');
const { serializeSale } = require('../utils/serializeSale');

const serializeProduct = (product, createdSaleId) => {
  const productId = 'product_id';
  const saleIdKey = 'sale_id';

  return {
    [productId]: product.id, [saleIdKey]: createdSaleId, quantity: product.quantity,
  };
};

const createSaleTransaction = async (sale, products) => {
  const serializedSale = serializeSale(sale);

  try {
    const result = await sequelize.transaction(async (transaction) => {
      const { 
        dataValues: { id: createdSaleId } } = await Sale.create(serializedSale, { transaction });
  
      await Promise.all(products.map(async (product) => {
        const serializedProduct = serializeProduct(product, createdSaleId);

        await SaleProduct
          .create(serializedProduct, { transaction });
      }));
    });
  
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  async create(sale, products) {
    const { error } = saleSchema.validate(sale);

    if (error) {
      return validateResponse(
        httpStatusCode.badRequest,
        error.details[0].message,
        'error',
      );
    }

    const createSaleError = await createSaleTransaction(sale, products);

    if (createSaleError) {
      return validateResponse(httpStatusCode.badRequest, error.details[0].message, 'error');
    }

     return validateResponse(
      httpStatusCode.created, null, 'sales',
    );
  },

  async show(id) {
    const sale = await Sale
      .findOne({ where: { id }, include: [{ model: Product, as: 'products' }] });
    
    if (!sale) {
      return validateResponse(httpStatusCode.badRequest, 'num quis vir nao', 'error');
    }

    return validateResponse(
      httpStatusCode.ok, sale, 'sale',
    );
  },

  async getAll(filter) {
    const sales = await Sale.findAll(filter);

    if (!sales) {
      return validateResponse(
        httpStatusCode.notFound,
        errors.NO_SALES_FOUND,
        'error',
      );
    }
    return validateResponse(httpStatusCode.ok, sales, 'sales');
  },
};
