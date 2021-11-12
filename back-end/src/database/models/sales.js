module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("sale", 
    {
      total_price: DataTypes.DECIMAL,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING
    },
    {
      timestamps: true,
      tableName: "sales"
    }
  )
  
  Sale.associate = (models) => {
    Sale.belongsTo(models.user,
      {foreignKey: "user_id", as: 'users'}
    )
  }

  Sale.associate = (models) => {
    Sale.belongsTo(models.user,
      {foreignKey: "seller_id", as: 'sellers'}
    )
  }
 
  return Sale;
};
