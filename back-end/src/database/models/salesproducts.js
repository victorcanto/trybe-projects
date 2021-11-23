module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define("saleProduct", {
    quantity: DataTypes.DECIMAL, 
  },{
    timestamps: true,
    tableName: "salesProducts"
  } )

  SaleProduct.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    })

    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    })
  }

  return SaleProduct;
};
