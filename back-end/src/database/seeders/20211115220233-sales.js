'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'sales',
      [
        {
          user_id: 3,
          seller_id: 2,
          total_price: 9.7,
          delivery_address: 'Rua Dr Cachaceiro',
          delivery_number: 51,
          sale_date: new Date(),
          status: 'Entregue',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          seller_id: 2,
          total_price: 9.99,
          delivery_address: 'Rua Dr Cachaceiro',
          delivery_number: 51,
          sale_date: new Date(),
          status: 'Pendente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          seller_id: 2,
          total_price: 6.68,
          delivery_address: 'Rua Dr Cachaceiro',
          delivery_number: 51,
          sale_date: new Date(),
          status: 'Preparando',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
