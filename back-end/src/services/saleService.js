const {
  user: User,
  sale: Sale,
  saleProduct: SaleProduct,
  product: Product,
  sequelize,
} = require('../database/models');
const { saleSchema } = require('../schemas/saleSchema');
const { validateResponse, httpStatusCode, errors } = require('../utils');
const { serialize } = require('../utils');

const createSaleTransaction = async (sale, products) => {
  const serializedSale = serialize.sale(sale);
  try {
    const result = await sequelize.transaction(async (transaction) => {
      const {
        dataValues: { id: createdSaleId },
      } = await Sale.create(serializedSale, { transaction });

      await Promise.all(
        products.map(async (product) => {
          const serializedProduct = serialize.product(product, createdSaleId);
          await SaleProduct.create(serializedProduct, { transaction });
        }),
      );
      return createdSaleId;
    });

    return result;
  } catch (error) {
    return { message: error.message };
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

    const createSale = await createSaleTransaction(sale, products);

    if (createSale.message) {
      return validateResponse(
        httpStatusCode.internalServerError,
        null,
        'error',
      );
    }

    return validateResponse(httpStatusCode.created, createSale, 'saleId');
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

  // async show(id) {
  //   const sale = await Sale.findOne({
  //     where: { id },
  //     include: [{ model: Product, as: 'products' }],
  //   });

  //   if (!sale) {
  //     return validateResponse(
  //       httpStatusCode.badRequest,
  //       errors.SALE_NOT_FOUND,
  //       'error',
  //     );
  //   }

  //   return validateResponse(httpStatusCode.ok, sale, 'sale');
  // },
  async show(id) {
    const sale = await Sale.findOne({
      where: { id },
      include: [{ model: Product, as: 'products' }],
    });

    const user = await User.findOne({
      where: { id: sale.seller_id },
    });

    if (!sale) {
      return validateResponse(
        httpStatusCode.badRequest,
        errors.SALE_NOT_FOUND,
        'error',
      );
    }

    return validateResponse(httpStatusCode.ok, { sale, user }, 'sale');
  },
};
