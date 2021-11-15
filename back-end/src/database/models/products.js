module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
      name: DataTypes.STRING,
      price: DataTypes.NUMBER,
      url_image: DataTypes.STRING
    },
    {
      timestamps: true,
      tableName: "products"
    }
  )
  
  return Product;
};
