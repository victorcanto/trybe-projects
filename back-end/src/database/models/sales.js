module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", 
    {
      total_price: DataTypes.DECIMAL,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING
    },
    {
      timestamps: true,
      // tableName: "Sales"
    }
  )
  
  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      {foreignKey: "user_id", as: 'users'}
    )
  }

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      {foreignKey: "seller_id", as: 'sellers'}
    )
  }
 
  return Sale;
};
