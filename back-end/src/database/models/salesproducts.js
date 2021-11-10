'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define("SaleProduct", {
    quantity: DataTypes.DECIMAL, 
  },{
    timestamps: true,
    // tableName: "SalesProducts"
  } )

  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    })

    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    })
  }

  return SaleProduct;
};
