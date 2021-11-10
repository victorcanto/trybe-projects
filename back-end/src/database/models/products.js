const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
      name: DataTypes.STRING,
      price: DataTypes.NUMBER,
      url_image: DataTypes.STRING
    },
    {
      timestamps: true,
      // tableName: "Sales"
    }
  )
  
  return Product;
};
